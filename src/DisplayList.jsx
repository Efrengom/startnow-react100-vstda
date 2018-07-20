import React, { Component } from 'react'
import DisplayItem from './DisplayItem'


class DisplayList extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todos, i) => {
                    return <DisplayItem
                    key={todos.timeStamp}
                    index={i}
                    handleDelete={this.props.handleDelete.bind(null, todos.timeStamp)}
                    handleEditSave={this.props.handleEditSave}
                     todos={todos.title}/>
                })}
               
            </div>
        );

    }
}

export default DisplayList;
