'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopicComponent from '../components/Topic';
import { showLoading, hideLoading } from '../components/Loading/actions';
import * as actions from '../components/Topic/actions';

const filterTab = pathname => {
    let path = pathname.split("/");
    return path[path.length - 1];
}

class Topic extends React.Component {
    constructor(arg) {
        super(arg);

        this.state = {
            data: this.props.data,
            id: this.props.match.params.id
        }
    }

    componentWillMount() {
        actions.fetchSingle(this.state.id)(this.props.dispatch);
    }

    componentWillReceiveProps(nextProps) {
        // let tab = filterTab(nextProps.location.pathname);
        // if (this.state.tab !== tab) {
        //     this.setState({
        //         tab,
        //         page: 1
        //     });
        //     actions.fetchList(tab, 1)(this.props.dispatch);
        //     return false;
        // }
        // return true;
    }

    render() {
        return <TopicComponent {...this.props}/>
    }
}

const mapStateToProps = (state) => state.topic;

export default connect(
    mapStateToProps
)(Topic);
