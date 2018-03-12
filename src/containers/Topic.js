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
        let {id} = this.state;

        if (this.props.id !== id) {
            actions.fetchSingle(id)(this.props.dispatch);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            id: nextProps.id
        });
    }

    render() {
        return <TopicComponent {...this.state}/>
    }
}

const mapStateToProps = state => state.topic;

export default connect(
    mapStateToProps
)(Topic);
