import { LitElement, html, css } from 'lit-element';

export default class AppList extends LitElement {
    constructor() {
        super();
        this.id = "";
        this.title = "";
        this.date = "";
    }

    static get styles() {
        return css `
            .todo-input__container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 20px;
            }

            .btn {
                border: 0;
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 5px;
                color: #fff;
                background-color: #ff6600;
            }
        
            .todo-input__container input {
                margin-right: 20px;
            }
        
            .todo-list__item {
                display: flex;
                justify-content: space-between;
                margin: 20px;
                border-radius: 5px;
                background: #fff;
                box-shadow: 3px 5px 5px #d2d2d2;
                padding: 10px;
            }
            
            .todo-list__item button {
                background-color: white;
                border: none;
            }
        `
    }

    static get properties() {
        return {
            id: { type: Number },
            title: { type: String },
            date: { type: String },
        };
    }

    initCard(id, title, date) {
        this.id = id;
        this.title = title;
        this.date = date;
    }

    render() {
        return  html `
        <article class="todo-list__item" data-id="${this.id}">
            <div class="content">
                <h1 @click="${this.updateCard}">${this.title}</h1>
                <span>${this.date}</span>
            </div>
            
             <button @click="${this.deleteCard}">x</button>
        </article> `
    }

    async updateCard() {
        const event = new CustomEvent('todo-updated', {
            detail: {
                todo: this,
                id: this.id
            }
        });

        return document.dispatchEvent(event);
    }

    async deleteCard() {
        const event = new CustomEvent('todo-deleted', {
            detail: {
                "todoId": this.id
            }
        });

        this.remove();

        return document.dispatchEvent(event);
    }
}

customElements.define('list-card', AppList);
