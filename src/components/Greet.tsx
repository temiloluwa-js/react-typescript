import React from 'react'
type GreetProp = {
  name: string
}

export const Greet = (props: GreetProp) => {
  return (
    <div>
        <h2>Welcome {props.name} You have 10 unread messages</h2>
    </div>
  )
}
