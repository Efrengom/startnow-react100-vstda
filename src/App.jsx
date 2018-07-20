import React, { Component } from 'react';
import DisplayList from './DisplayList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            priority: '1',
            timeStamp: '',
            todos: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEditSave = this.handleEditSave.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        var title = this.state.title
        var priority = this.state.priority
        var time = Date.now()
        var newtodos = this.state.todos.concat({ title: title, priority: priority, timeStamp: time })
        this.setState({
            title: '',
            priority: '1',
            todos: newtodos,
        })
    }

    handleInputChange(e) {
        var title = e.target.value
        this.setState({
            title: title
        })
    }

    handleSelectChange(e) {
        var priority = e.target.value
        this.setState({
            priority: priority
        })
    }

    handleDelete(deleteItem) {
        var newtodos = this.state.todos.filter((todos) => {
            return todos.timeStamp != deleteItem
        })

        this.setState({
            todos: newtodos,
        })
    }

    handleEditSave(newText, newPriority, i) {
        var newObj = { title: newText, priority: newPriority, timeStamp: this.state.todos[i].timeStamp }
        var finalTodos = Object.assign([], this.state.todos)
        console.log(finalTodos)
        finalTodos.splice(i, 1, newObj)
        this.setState({
            todos: finalTodos
        })
    }

    render() {


        return (
            <div>
                <h1 className='titleStuff'>Welcome to My Simple Todo App</h1>
                <div className='flex-container'>
                    <form onSubmit={this.handleSubmit}>
                        <p>What is something you need to do?</p>
                        <textarea className='create-todo-text' onChange={this.handleInputChange} value={this.state.title}></textarea>
                        <p>How much of a priority is this?</p>
                        <select className='create-todo-priority' onChange={this.handleSelectChange} value={this.state.priorty}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                        <button className='create-todo' >Submit</button>
                    </form>
                </div>
                <DisplayList
                    todos={this.state.todos}
                    handleDelete={this.handleDelete}
                    handleEditSave={this.handleEditSave} />
            </div>

        );
    }
}

export default App;