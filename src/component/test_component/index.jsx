import React from "react";
import './test_component.css';


export const TestComponent = ({ id, sTitle, sDescription, onHover, onLeave, isHovered }) => {
    return (
        <div
            onMouseEnter={() => onHover(id)} 
            onMouseLeave={onLeave}        >
            <div className={`component_block ${isHovered ? 'hovered' : ''}`}
            >
            <p className="component_title">{sTitle}</p>
            {isHovered && <p className="component_description">{sDescription}</p>}
            </div>
        </div>
    );
}