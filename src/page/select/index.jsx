import React, {useState} from "react";
import './select_page.css';
import {TestComponent} from '../../component/test_component'

export const SelectPage = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const componentSelect = [
        {
            id: 1,
            title: "first",
            description: "jfnjvnfjv"
        },
        {
            id: 2,
            title: "second",
            description: "jfnjvnfjv"
        },
        {
            id: 3,
            title: "third",
            description: "jfnjvnfjv"
        }
    ];

    const handleHover = (id) => {
        setHoveredId(id);

    };

    const handleLeave = () => {
        setHoveredId(null);
    };

    return (
        <div className="select_page">
            <p className="select_title">Select test</p>
            <div className="select_tests">
                {componentSelect.map((test) => (
                    <TestComponent
                        key={test.id}
                        id={test.id} 
                        sTitle={test.title}
                        sDescription={test.description}
                        onHover={handleHover}
                        onLeave={handleLeave}
                        isHovered={hoveredId === test.id}
                    />
                    
                ))}
            </div>
        </div>
    );
}