import React from 'react';
import Popover from 'react-tiny-popover'

import './index.scss';

class CustomEvent extends React.Component {
    state = {
        isPopoverOpen: false,
    };
    togglePopover = () => {
        const { isPopoverOpen } = this.state;
        this.setState({ isPopoverOpen: !isPopoverOpen });
    }
    render () {
        const { event } = this.props;
        const { isPopoverOpen } = this.state;
        return (
            <Popover
                isOpen={isPopoverOpen}
                position={['top', 'bottom', 'right', 'left']} // preferred position
                onClickOutside={this.togglePopover} 
                padding={-30}
                transitionDuration={0.2}
                containerStyle={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                }}
                content={(
                    <div className="popoverWrapper">
                        <div className="popoverHeader">{event.title}</div>
                        <div className="popoverBody">
                            {event.desc}
                        </div>
                    </div>
                )}>
                <div onClick={this.togglePopover}>
                    {event.title}
                </div>
            </Popover>
        );
    }
}

export default CustomEvent;