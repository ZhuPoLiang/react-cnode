'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getLastParam } from '../util/util';
import TopicsComponent from '../components/Topics';
import { showLoading, hideLoading } from '../components/Loading/actions';
import * as actions from '../components/Topics/actions';

class Topics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            page: 1,
            tab: getLastParam(this.props.location.pathname)
        }
    }

    componentWillMount() {
        const {tab, page, data} = this.state;

        if (!data.length) {
            actions.fetchList(tab, page)(this.props.dispatch);
        }
    }

    componentWillReceiveProps(nextProps) {
        var tab = getLastParam(nextProps.location.pathname);

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
