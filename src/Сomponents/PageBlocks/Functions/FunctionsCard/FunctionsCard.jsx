import React from 'react';

const FunctionsCard = (props) => {
    return (
        <div className="func-card">
            <div className="func-card-leading-text">
                {props.title}
                <span className="func-card-leading-subtext">
                            {props.subtitle}
                </span>
            </div>
            <div className="func-card-secondary-text">
                {props.description}
            </div>
            <div>
                <img src={props.img} alt=""/>
            </div>
        </div>
    );
};

export default FunctionsCard;