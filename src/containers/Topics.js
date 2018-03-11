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
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            page: 1,
            tab: filterTab(this.props.location.pathname)
        }
    }

    componentWillMount() {
        const {tab, page} = this.state;
        actions.fetchList(tab, page)(this.props.dispatch);
    }

    componentWillReceiveProps(nextProps) {
        var tab = filterTab(nextProps.location.pathname);
        
        if (this.state.tab !== tab) {
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

const mapStateToProps = state => state.topics;

export default connect(
    mapStateToProps
)(Topics);
