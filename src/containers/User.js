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
        let {data, id} = this.state;
        actions.fetchInfo(id)(this.props.dispatch);
    }

    render() {
        return <UserComponent {...this.props}/>
    }
}

const mapStateToProps = state => state.user;

export default connect(
    mapStateToProps
)(User);
