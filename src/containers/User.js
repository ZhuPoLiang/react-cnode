'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getLastParam } from '../util/util';
import UserComponent from '../components/User';
import * as actions from '../components/User/actions';



const mapStateToProps = state => state.user;

@connect(mapStateToProps)
export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            id: getLastParam(this.props.location.pathname)
        }
    }

    componentWillMount() {
        let {id} = this.state;
        this.fetchData(id);
    }

    componentWillReceiveProps(nextProps) {
        let id = getLastParam(nextProps.location.pathname);

        if (this.state.id !== id) {
            this.setState({
                id
            });

            this.fetchData(id);
            return false;
        }

        this.setState({
            data: nextProps.data
        });

        return true;
    }

    fetchData(id) {
        actions.fetchInfo(id)(this.props.dispatch);
    }

    render() {
        return <UserComponent {...this.state}/>
    }
};
