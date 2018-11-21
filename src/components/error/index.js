import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    width: 43%;
    color: #f56f6f;
    background-color: #ff000024;
    border: 1px solid;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
`

const Error = () => {
  return (
    <Block>Required field</Block>
  );
}

export default Error
