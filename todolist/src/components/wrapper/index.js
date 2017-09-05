
import React, { Component } from 'react';
import Todos from '../todos';
import Filter from '../filter';

export default class Wrapper extends Component {
    render() {
        const {params_filter, params_todos} = this.props;
        return (
            <div>
                <Filter {...params_filter}/>
                <Todos {...params_todos}/>
            </div>
        );
    }
}