import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }],
            title: 'ToDo List',
            value: ''
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        this.setState({value: ''});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    changeValue(value) {
        this.setState({value});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} quantity={this.state.data.length} />
                <br/>
                <TodoForm addTodo={ value => this.addTodo(value)} changeValue={value => this.changeValue(value)} value={this.state.value}/>
                <br/>
                <TodoList list={this.state.data} remove={id => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default App;