import AppList from "/js/components/list/list.js";
import { openDB } from 'idb';
import checkConnectivity from '/js/connection.js';
import Queue from '/js/components/queue/queue.js';


(async function (document) {
    const app = document.querySelector('#app');
    const skeleton = app.querySelector('.skeleton');
    const listPage = app.querySelector('[page=list]');
    const queue = new Queue();
    const basePath = 'http://localhost:3000';

    checkConnectivity(3, 1000);

    const database = await openDB('app-store', 1, {
        upgrade(db) {
            db.createObjectStore('todo')
        }
    });
    // trigger connection status change
    document.addEventListener('connection-changed', ({ detail }) => {
        if (detail.online && queue.getQueue().length > 0) {
            const syncTodo = queue.getQueue();
            syncTodo.forEach(function (queueTodo, index, object) {
                if (queueTodo.type === "add") {
                    queue.syncAdding(queueTodo);
                }

                if (queueTodo.type === "delete") {
                    queue.syncRemove(queueTodo);
                }

                object.splice(index, 1)
            })
        }
    });

    // trigger delete element
    document.addEventListener('todo-deleted', async ({detail}) => {
        const todoId = detail.todoId;
        const todo = await database.get('todo', 'todo');
        if (navigator.onLine) {
            fetch(basePath+'/todo/' + todoId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            queue.addQueue("delete", {"id": todoId})
        }

        const response = todo.filter(t => t.id !== todoId);
        database.put('todo', response, 'todo');
    });

    skeleton.removeAttribute('active');
    listPage.setAttribute('active', '');

    try {
        const data = await fetch(basePath+'/todo');
        const json = await data.json();

        if (navigator.onLine) {
            await database.put('todo', json, 'todo')
        }

         json.map(item => {
            const todoElement = new AppList();

            todoElement.initCard(item.id, item.value, item.createdAt);
            listPage.appendChild(todoElement);
        });

        const todoForm = document.querySelector('.btn');

        todoForm.addEventListener('click', function (event) {
            const input = document.querySelector('.js-todo-input');

            const todoElement = new AppList();
            let currentDate = new Intl.DateTimeFormat('en-GB').format(Date.now());
            let value = input.value;

            let currentDatetime = Date.now();
            todoElement.initCard(currentDatetime, value, currentDate);
            listPage.appendChild(todoElement);

            let newTodo = {
                'createdAt' : currentDate,
                'id' : currentDatetime,
                'value' : value
            };

            json.push(newTodo);

            database.put('todo', json, 'todo');
            if (navigator.onLine) {
                const req = new XMLHttpRequest();
                req.open('POST', basePath+'/todo', true);
                req.setRequestHeader('Content-Type', 'application/json');
                req.send(JSON.stringify(newTodo))
            }else {
                queue.addQueue('add', JSON.stringify(newTodo))
            }
        })
    }catch (error) {
        // if application is of line load data on innoDB
        const todo = await database.get('todo', 'todo');

        todo.map(item => {
            const todoElement = new AppList();

            todoElement.initCard(item.id, item.value, item.createdAt);
            listPage.appendChild(todoElement);

            return todoElement
        });

    }
})(document);