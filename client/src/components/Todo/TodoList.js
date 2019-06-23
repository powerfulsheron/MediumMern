import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


class TodoList extends React.Component {

    state = {
        todos : [
            {text:"todo 1"},
            {text:"todo 2", checked: true}
        ]
    }

    handleNew = (text) => {
        const todo = {text: "new todo", checked:false};
        this.setState({
            todos:[...this.state.todos, todo]
        });
    }

    handleSelect = (item) => {
        this.setState({
            todos:this.state.todos.map(todo =>{
                if(todo.text === item.text){
                    todo.checked =!todo.checked
                }
                return todo;
            })
        });
    }

    handleDelete = (item) =>{
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.text != item.text
            })
        })
    }

    render(){
        return <>
            <TodoForm onNew={this.handleNew}/>
            <ul>
                {
                    this.state.todos.map((item, index) =>
                    <TodoItem key={index} item={item} onSelect={this.handleSelect} onDelete={this.handleSelect}/>
                    )
                }
            </ul>
        </>;
    }
}

export default TodoList;