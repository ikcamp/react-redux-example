import mapStateToProps from './param';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../components/wrapper';

class Container extends Component {
    render() {
        return (
            <Wrapper {...this.props}/>
        );
    }
}

export default connect(mapStateToProps)(Container);
