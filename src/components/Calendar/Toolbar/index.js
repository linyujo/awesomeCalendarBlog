import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Toolbar = ({
	onNavigate,
	label
}) => {
    return (
        <div className="toolbarWrapper rbc-toolbar">
            <button className="today" onClick={() => onNavigate('TODAY')}>今天</button>
            <button className="prev" onClick={() => onNavigate('PREV')}>
				<FontAwesomeIcon icon={['fas', 'chevron-left']} />
			</button>
            <span className="rbc-toolbar-label">{label}</span>
            <button className="next" onClick={() => onNavigate('NEXT')}>
				<FontAwesomeIcon icon={['fas', 'chevron-right']} />
			</button>
        </div>
    );
};

export default Toolbar;