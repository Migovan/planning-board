import React from 'react'
import Button from '../button'

const Sort = ({ onClick, children }) => {
    return (
        <Button className="sort-button"
                onClick={onClick}>{children}</Button>
    )
  }

export default Sort
