'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getLastParam } from '../util/util';
import TopicComponent from '../components/Topic';
import * as actions from '../components/Topic/actions';

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            id: getLastParam(this.props.location.pathname)
        }
    }

    componentWillMount() {
        let {data, id} = this.state;
        actions.fetchSingle(id)(this.props.dispatch);
    }

    render() {
        return <TopicComponent {...this.props}/>
    }
}

const mapStateToProps = state => state.topic;

export default connect(
    mapStateToProps
)(Topic);
