import React from 'react'

function RoomDisplay({setRoom}) {
  return (
    <section>
        <button onClick={() => setRoom('#general')}>#general</button>
        <button onClick={() => setRoom('#html')}>#html</button>
        <button onClick={() => setRoom('#css')}>#css</button>
        <button onClick={() => setRoom('#javascript')}>#javascript</button>
        <button onClick={() => setRoom('#react')}>#react</button>
    </section>
  )
}

export default RoomDisplay