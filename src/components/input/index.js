import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { onChange, value, placeholder, className = '' } = this.props
    return (
      <div>
        <input onChange={onChange}
               value={value}
               placeholder={placeholder}
               className={className}/>
      </div>
    );
  }
}

export default Input
