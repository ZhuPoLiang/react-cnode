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
            isFetch: true,
            tab: getLastParam(this.props.location.pathname)
        }
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
        return true;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState);
        return true;
    }

    fetchData(tab, page) {
        const _fetch = actions.fetchList(tab, page)(this.props.dispatch);

        _fetch.then(() => (
            this.setState({
                isFetch: true
            })
        )).catch(() => (
            this.setState({
                isFetch: true
            })
        ));
    }

    hanlderPage(page, isNext) {
        let {isFetch, tab} = this.state;

        // 防重复请求处理
        if (!isFetch) {
            return false;
        }

        if (isNext) {
            page++;
        } else {
            page = page > 0 ? (page - 1) : 1;
        }

        if (page > 0) {
            this.setState({
                page: page,
                isFetch: false
            });
            this.fetchData(tab, page);
        }
    }

    render() {
        return <TopicsComponent hanlderPage={this.hanlderPage.bind(this)} newPage={this.state.page} {...this.props} />
    }
}

const mapStateToProps = state => state.topics;

export default connect(
    mapStateToProps
)(Topics);
