'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getLastParam } from '../util/util';
import UserComponent from '../components/User';
import * as actions from '../components/User/actions';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            id: getLastParam(this.props.location.pathname)
        }
    }

    componentWillMount() {
        let {id} = this.state;

        if (this.props.id !== id) {
            actions.fetchInfo(id)(this.props.dispatch);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            id: nextProps.id
        });
    }

    render() {
        return <UserComponent {...this.state}/>
    }
}

const mapStateToProps = state => state.user;

export default connect(
    mapStateToProps
)(User);
