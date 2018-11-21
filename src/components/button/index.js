import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    width: ${props => props.className === 'add-button' ? '42%' : '20%'};
    height: 33px;
    margin: 10px 0;
    margin-right: ${props => props.className === 'add-button' ? '0' : '10px'};
    border-radius: 0;
    border: 1px solid;
    background-color: ${props => props.className === 'add-button' ? '#efa823' : '#249fc5cf'};
    color: #fff;
    font-family: 'Black Han Sans', sans-serif;
    letter-spacing: 1px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
`

const Button = ({ onClick, children, className = '' }) => {
  return (
    <ButtonStyled onClick={onClick}
                  className={className}>{children}</ButtonStyled>
  );
}

export default Button
