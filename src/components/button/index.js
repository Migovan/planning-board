import React from 'react'
import styled, { css } from 'styled-components'

const SmallButton = css`
  width: 20%;
  color: #fff;
  background-color: #4eb6d6;
  margin-right: 10px;
  :hover {
    background-color:#7dcfe8
  }
`
const BigButton = css`
  width: 42%;
  color: #fff;
  background-color: #efa823;
  :hover {
    background-color:#efc26f;
  }
`

const SortButton = css`
  width: 15%;
  color: #6095676b;
  :hover {
    background-color: #6095676b;
    color: #fff;
  }
`

const ButtonStyled = styled.button`
    height: 33px;
    margin: 10px 0;
    border: 1px solid;
    font-family: 'Black Han Sans', sans-serif;
    letter-spacing: 1px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    
    ${props => props.className === 'add-button' && BigButton} 
    ${props => props.className === 'small-button' && SmallButton} 
    ${props => props.className === 'sort-button' && SortButton} 
`

const Button = ({ onClick, children, className = '' }) => {
  return (
    <ButtonStyled onClick={onClick}
                  className={className}>{children}</ButtonStyled>
  );
}

export default Button
