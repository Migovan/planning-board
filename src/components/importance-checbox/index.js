import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'
import { showImportanceCheckbox } from '../../actionCreator'
import CheckMark from '../../assets/icon/done.png'


const Wrapper = styled.label`
  display: flex;
  div {
    margin-right: 10px;
    color: #6b946b;
    font-size: 24px;
  }
  img {
    width: 18px;
    height: 18px;
    position: relative;
    top: 2px;
    right: 30px;
  }
`

const OrdinaryImportance = css`
    border: 1px solid #f1d90d;
    background-color: #ffeb3b69;
`

const MediumImportance = css`
    border: 1px solid #f1a974;
    background-color: #f1a9748a;
`

const HighImportance = css`
    border: 1px solid #ff0000;
    background-color: #ff00008c;
`

const Checkbox = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
    > input {
      display: none;
    }
    ${props => props.importance === 'ordinary' && OrdinaryImportance}
    ${props => props.importance === 'medium' && MediumImportance}
    ${props => props.importance === 'high' && HighImportance}
`


const ImportanceCheckbox = ({ onChange, checked, importance }) => {
    return (
      <Wrapper>
          <Checkbox importance={importance}>
            <input onChange={onChange}
                   type="checkbox"
                   checked={checked}/>
          </Checkbox>
          {checked && <img src={CheckMark} alt="check-mark"/>}
      </Wrapper>
    )
  }

const mapDispatchToProps = (dispatch) => bindActionCreators({ showImportanceCheckbox }, dispatch)

export default connect(null, mapDispatchToProps)(ImportanceCheckbox)
