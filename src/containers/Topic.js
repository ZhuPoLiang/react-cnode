'use strict';

import React from 'react';
import { connect } from 'react-redux';

import TopicComponent from '../components/Topic';
import * as actions from '../components/Topic/actions';

const filterID = pathname => {
    let path = pathname.split("/");
    return path[path.length - 1];
}

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            id: filterID(this.props.location.pathname)
        }
    }

    componentWillMount() {
        actions.fetchSingle(this.state.id)(this.props.dispatch);
    }

    render() {
        return <TopicComponent {...this.props}/>
    }
}

const mapStateToProps = state => state.topic;

export default connect(
    mapStateToProps
)(Topic);
