
import React, { Component } from 'react';
import Todos from '../todos';
import Filter from '../filter';

export default class Wrapper extends Component {
    constructor(...args) {
        super(...args);
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            inputContent: ''
        };
    }
    handleInput(e) {
        this.setState({
            inputContent: e.target.value
        });
    }
    handleKeyUp(e) {
        const {addTodo} = this.props;
        if (e.keyCode === 13) {
            addTodo(e.target.value);
            this.setState({
                inputContent: ''
            });
        }
            
    }
    componentDidMount() {
        this.props.getTodos();
    }
    render() {
        const {isLoading, params_filter, params_todos} = this.props;
        const {inputContent} = this.state;
        if (isLoading) {
            return (<div>LOADING...</div>)
        }
        return (
            <div>
                <label>增加事项(回车添加)：<input onChange={this.handleInput} onKeyUp={this.handleKeyUp} value={inputContent}/></label>
                <Filter {...params_filter}/>
                <Todos {...params_todos}/>
            </div>
        );
    }
}