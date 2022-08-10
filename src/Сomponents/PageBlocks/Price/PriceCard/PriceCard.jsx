import React from 'react';
import styled from "styled-components";
import css from "../../../../Styles/Elements/Arrows.module.css"
import {useEffect, useState} from "react";

const MainList = styled.ul`
  display: ${props => props.index <= 3 ? "block" : "none"};
`;

const SecondaryList = styled.ul`
  display: ${props => props.index > 3 ? "block" : "none"};
`;

const PriceCard = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    let windowWidth = window.screen.width;
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className="price-card">
            <div>
                <p>{props.title_month}</p>
            </div>
            <div>
                <MainList index={props.index}>
                    <li>Онлайн-бронирование</li>
                    <li>Отзывы и рейтинги</li>
                    <li>Конвертация валют</li>
                    <li>Мультиязычное меню</li>
                </MainList>
                <SecondaryList index={props.index}>
                    <li>Фунционал пакета Basic</li>
                    <li>CRM-система</li>
                </SecondaryList>
            </div>
            <div>
                <p>
                    <span className="price-card-strikethrough">
                            {props.title_strikethrough}{props.title_strikethrough === "" ? "" : <span className={windowWidth <= 768 ? css.inActiveSpan : css.activeSpan}> тенге</span>}
                    </span> {windowWidth <= 768 ? "" : <br/>} {props.title_price}
                </p>
            </div>
        </div>
    );
};

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}


export default PriceCard;