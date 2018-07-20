 import React, { Component } from 'react'



class DisplayItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            done: false,
            editing: false,
            changedText: '',
            changedPriority: '1'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.editingDone = this.editingDone.bind(this)
        this.handleEditChange = this.handleEditChange.bind(this)
        this.handlePriorityChange = this.handlePriorityChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            changedText: this.props.todos
        })
    }

    handleChange(e) {
        var _done = !this.state.done
        this.setState({
            done: _done
        })
    }

    handleEdit(e) {
        this.setState({
            editing: true,
        })
    }

    editingDone(e) {
        this.props.handleEditSave(this.state.changedText, this.state.changedPriority, this.props.index)
        this.setState({
            editing: false,
        })

    }

    handleEditChange(e) {
        var _changedText = e.target.value
        this.setState({
            changedText: _changedText

        })
    }

    handlePriorityChange(e) {
        var newPriority = e.target.value
        this.setState({
            changedPriority: newPriority
        })
    }

    render() {
        var todos = this.props.todos

        var viewStyle = {};
        var editStyle = {};

        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        return <li>
            <div style={viewStyle} className='listItems'>
                <input type='checkbox' checked={this.state.done} onChange={this.handleChange} className='checkbox'></input>
                <p className='Items'>{todos}</p>
                <button onClick={this.props.handleDelete.bind(null, todos.timeStamp)}>
                    <span className="glyphicon glyphicon-trash"></span>
                </button>
                <button onClick={this.handleEdit}>
                    <span className='glyphicon glyphicon-edit'></span>
                </button>
            </div>
            <div style={editStyle} className='listItems'>
                <input value={this.state.changedText} onChange={this.handleEditChange} ></input>
                <select value={this.state.changedPriority} onChange={this.handlePriorityChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.editingDone}>Submit</button>
            </div>

        </li>

    }
}

export default DisplayItem;