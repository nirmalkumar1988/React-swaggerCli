import React from 'react';
import Icon from './Icon';

export default function IconButton({name, size, theme}) {
    return (
        <button className={`cds-icon-button cds-icon-button_${theme || 'light'}`}>
            <Icon name={name} size={size}/>
        </button>
    );
}