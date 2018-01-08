import React from 'react';
import svgSprite from 'crewmodules-design-system/dist/resources/cds-icons.svg';

export default function Icon({name, size}) {
    return (
        <svg className={`cds-icon cds-icon_size_${size || 48}`}>
            <use href={`${svgSprite}#${name}`}/>
        </svg>
    );
}