import React from 'react'
import Button from '../button'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  > button {
    margin-right: 20px;
  }
`

const SearchBar = ({ ordinarySort, notSort, mediumSort, highSort }) => {
    return (
      <Wrapper>
        <Button className="sort-button"
                onClick={notSort}>All</Button>
        <Button className="sort-button"
                onClick={ordinarySort}>Ordinary</Button>
        <Button className="sort-button"
                onClick={mediumSort}>Medium</Button>
        <Button className="sort-button"
                onClick={highSort}>High</Button>
      </Wrapper>
    )
  }

export default SearchBar
