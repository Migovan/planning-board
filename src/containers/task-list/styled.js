import styled, { css } from 'styled-components'

export const SortBlock = styled.div`
  display: flex;
  margin-top: 50px;
  button {
    margin-right: 30px;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const Ordinary = css`
  box-shadow: 0px 0px 20px #f1d90d;
`

export const Medium = css`
  box-shadow: 0px 0px 20px #f1a974;
`

export const High = css`
  box-shadow: 0px 0px 20px #ff0000;
`

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 0 30px;
  ${props => props.typeCheckbox === 'ordinary' && Ordinary};
  ${props => props.typeCheckbox === 'medium' && Medium};
  ${props => props.typeCheckbox === 'high' && High};
  input {
    width: 40%;
    height: 25px;
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    box-shadow: ${props => !props.edit && '0 0 3pt 2pt #2ab7e0'};
  }
  textarea {
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    resize: none;
    min-height: 80px;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    box-shadow: ${props => !props.edit && '0 0 3pt 2pt #2ab7e0'};
  }
  div {
    width: 90%;
  } 
  div > section {
        display: flex;
        flex-direction: column;
      }
     
  img {
    width: 50px;
    height: 50px;
  }
`
