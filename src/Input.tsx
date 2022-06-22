import React from 'react'
type InputProps = {
    value: string,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, handleInput}: InputProps) => {
  return (
    <div>
        <input type="text" value={value} onChange={handleInput}/>
    </div>
  )
}
