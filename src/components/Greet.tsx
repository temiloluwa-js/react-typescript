import React from 'react'
type GreetProp = {
  name: string,
  messageCount: number
}

export const Greet = (props: GreetProp) => {
  return (
    <div>
        <h2>Welcome {props.name} You have {props.messageCount} unread messages</h2>
    </div>
  )
}
