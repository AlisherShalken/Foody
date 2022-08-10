import React from 'react';
import "../../../Styles/Elements/Button.css";
import "../../../Variables/Variables.css";
import styled from "styled-components";

let style_color = (props => props.color);
const Btn = styled.button`
  display: grid;
  grid-template-columns: ${props => props.img === "none" ? "1fr" : "1fr 0.1fr"};
  background:  ${props => props.type === "filled" ? style_color : "transparent"};
  color: ${props => props.type === "filled" ? "white": style_color};
  column-gap: ${props => props.gap};
  height: ${props => props.height};
  border: 2px solid ${style_color};
  border-radius: 10px;
  font-weight: ${props => props.fw};
  font-size: ${props => props.fs};
  cursor: ${props => props.disabled === "disabled" ? "auto" : "pointer"};;
  letter-spacing: ${props => props.letter};
  & img{
    display: ${props => props.img === "none" ? "none" : "block"};
  }
`;

const Button = (props) => {
    return (

            <Btn
                className="button"
                type={props.type}
                color={props.color}
                gap={props.gap}
                fs={props.fs}
                fw={props.fw}
                img={props.img}
                letter={props.letter}
                disabled={props.disabled}
            >
                <div>
                    <span>{props.text}</span>
                </div>
                <div>
                    <img src={props.img} alt=""/>
                </div>
            </Btn>

    );
};

export default Button;