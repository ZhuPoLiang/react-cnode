'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getLastParam } from '../util/util';
import TopicsComponent from '../components/Topics';
import * as actions from '../components/Topics/actions';

class Topics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            page: this.props.page,
            isRequestLock: false,
            tab: getLastParam(this.props.location.pathname)
        }

        this.hanlderPage = this.hanlderPage.bind(this);
    }

    componentWillMount() {
        const {tab, page, data} = this.state;

        if (!data.length) {
            this.fetchData(tab, page);
        }
    }

    componentWillReceiveProps(nextProps) {
        var tab = getLastParam(nextProps.location.pathname);

        if (this.state.tab !== tab) {
            this.setState({
                tab,
                page: 1
            });

            this.fetchData(tab, 1);
            return false;
        }

        this.setState({
            data: nextProps.data,
            page: nextProps.page
        });

        return true;
    }

    fetchData(tab, page) {
        const _fetch = actions.fetchList(tab, page)(this.props.dispatch);

        _fetch.then(() => (
            this.setState({
                isRequestLock: false
            })
        )).catch(() => (
            this.setState({
                isRequestLock: false
            })
        ));
    }

    hanlderPage(page, isNext) {
        let {isRequestLock, tab} = this.state;

        // 防重复请求处理
        if (isRequestLock) {
            return false;
        }

        if (page > 0) {
            this.setState({
                isRequestLock: true
            });
            this.fetchData(tab, page);
        }
    }

    render() {
        return <TopicsComponent hanlderPage={this.hanlderPage} {...this.state} />
    }
}

const mapStateToProps = state => state.topics;

export default connect(
    mapStateToProps
)(Topics);
