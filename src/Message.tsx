
import React from 'react'
// PascalCasing
function Message() {
    //JSX: Javascript XML
    const name = 'Bento';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello world</h1>
}

export default Message;