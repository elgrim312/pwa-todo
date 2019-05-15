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
        const request = fetch('http://localhost:3000/todo', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
            body: queue.todo
        });
    }

    syncRemove(queue) {
        const request = fetch('http://localhost:3000/todo/' + queue.todo.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }
}