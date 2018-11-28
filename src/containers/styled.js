import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  margin-top: 80px;
  h1 {
    margin: 10px 0;
    color: #6b946b;
  }
`
export const Textarea = styled.textarea`
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    resize: none;
    min-height: 80px;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    ::placeholder { 
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

export const ImportanceBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0 10px;
    h2 {
      margin-right: 10px;
      color: #6b946b;
      font-size: 24px;
    }
`
