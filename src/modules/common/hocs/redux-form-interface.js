import React from 'react'

export default WrappedComponent => ({
  input: {
    onChange,
    value,
  },
  ...props
}) => (
  <WrappedComponent
    onChange={onChange}
    value={value}
    {...props}
  />
)
