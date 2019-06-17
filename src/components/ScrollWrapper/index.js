import React, { Component } from 'react';
import PropTypes from 'prop-types';

// let lastScroll = 0; // 儲存上次Y軸所在的位置

export default class ScrollWrapper extends Component {
    scrollWrapperRef = null;
    lastScroll = 0; // 儲存上次Y軸所在的位置
    locked = false;
    lastCall = false;
    isHandleScrolling = false;
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        // 因為html, body的overflow: hidden, 因此能scroll的只有id=root跟id=app
        // 後來我把html, body的overflow: hidden拿掉了
        // document.getElementById(this.props.wrapperId).addEventListener("scroll", evt => this.handleScroll(evt));
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        // document.getElementById(this.props.wrapperId).removeEventListener("scroll", evt => this.handleScroll(evt));
    }
    handleScroll = () => {
        if (this.locked) {
            return;
        }
        this.locked = true;
        const scrollWrapper = this.scrollWrapperRef; // 在scroll的component

        if (this.lastCall) {
            clearTimeout(this.lastCall);
        }
        this.lastCall = setTimeout(() => {
            // 取得scroll的位置
            // let currentScroll = document.getElementById(this.props.wrapperId).scrollTop || document.body.scrollTop;
            let currentScroll = Math.abs(scrollWrapper.offsetTop - window.scrollY); // 取得現在的Y軸位置
            // let currentScroll = document.body.scrollTop;

            // console.log('currentScroll', currentScroll);
            // 是不是離頂端有距離
            if (currentScroll > 0) {
                this.props.scrollingHandler(true);
            } else {
                this.props.scrollingHandler(false);
            };

            if (this.props.scrollDownHandler) {
                // 現在Y軸的位置 > 0 且 上次的Y軸刻度小於現在的Y軸刻度
                if (currentScroll > 0 && this.lastScroll <= currentScroll) {
                    // "Scrolling DOWN"
                    this.lastScroll = currentScroll;
                    this.props.scrollDownHandler(true);
                } else {
                    // "Scrolling UP"
                    this.lastScroll = currentScroll;
                    this.props.scrollDownHandler(false);
                }
            };
        }, 200)
        this.locked = false;
    }
    render() {
        return <div className="scroll-wrapper" ref={node => this.scrollWrapperRef = node}>{this.props.children}</div>;
    }
};

ScrollWrapper.propTypes = {
    scrollingHandler: PropTypes.func.isRequired,
    scrollDownHandler: PropTypes.func,
    // wrapperId: PropTypes.string.isRequired,
}