import React, { Component } from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
    width: 40%;
    height: 25px;
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    ::placeholder { color: #6095676b; }
    :-ms-input-placeholder { 
      color: #6095676b; 
      opacity: 1; 
    }
    :-ms-input-placeholder { 
    color: #6095676b;
    }
    ::-ms-input-placeholder {
        color: #6095676b;
    }
    :focus { 
      outline: none;
      box-shadow: 0 0 3pt 2pt #2ab7e0;
   }
`

class Input extends Component {
  render() {
    const { onChange, value, placeholder, className = '' } = this.props
    return (
        <InputStyled onChange={onChange}
                     value={value}
                     placeholder={placeholder}
                     className={className}/>
    );
  }
}

export default Input
