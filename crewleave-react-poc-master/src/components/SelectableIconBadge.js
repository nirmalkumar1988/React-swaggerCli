import React from 'react';
import Icon from './Icon';

export default function SelectableIconBadge({name, size, color}) {
    return (
        <button className={`cds-icon-badge cds-icon-badge_selectable cds-icon-badge_${color || 'green'}`}>
            <Icon name={name} size={size}/>
        </button>
    );
}