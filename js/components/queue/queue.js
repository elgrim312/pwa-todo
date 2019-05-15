export default class Queue {
    queueStack = [];

    addQueue(type, todo) {
        this.queueStack.push({
            "type" : type,
            "todo" : todo
        })
    }

    getQueue() {
        return this.queueStack
    }

    syncAdding(queue) {
        fetch('http://localhost:3000/todo', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
            body: queue.todo
        });
    }

    syncRemove(queue) {
         fetch('http://localhost:3000/todo/' + queue.todo.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    syncUpdated(queue) {
        let jsonQueue = JSON.parse(queue.todo);
        fetch('http://localhost:3000/todo/'+ jsonQueue.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: queue.todo
        })
    }
}