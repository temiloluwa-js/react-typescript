import React from 'react'
type InputProps = {
    value: string,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  return (
    <div>
        <input type="text" value={props.value} onChange={props.handleInput}/>
    </div>
  )
}
