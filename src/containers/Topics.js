'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopicsComponent from '../components/Topics';
import { showLoading, hideLoading } from '../components/Loading/actions';
import * as actions from '../components/Topics/actions';

const filterTab = pathname => {
    let path = pathname.split("/");
    return path[path.length - 1];
}

class Topics extends React.Component {
    constructor(arg) {
        super(arg);

        var {data, tab} = this.props;

        this.state = {
            data: data,
            page: 1,
            tab: tab
        }
    }

    componentWillMount() {
        const {tab, page} = this.state;
        actions.fetchList(tab, page)(this.props.dispatch);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.tab !== this.props.tab) {
            this.setState({
                tab,
                page: 1
            });
            actions.fetchList(tab, 1)(this.props.dispatch);
            return false;
        }
        return true;
    }

    render() {
        return <TopicsComponent {...this.props} />
    }
}

const mapStateToProps = (state) => state.topics;

export default connect(
    mapStateToProps
)(Topics);
