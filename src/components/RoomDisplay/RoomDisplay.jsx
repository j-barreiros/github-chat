import React from 'react'

//Style
import StyledRoomDisplay from './StyledRoomDisplay';

//Icon
import Icons from './Icons';

function RoomDisplay({ setRoom, selectedRoom }) {

  const roomList = ['#general', '#html', '#css', '#javascript', '#react'];

  return (
    <StyledRoomDisplay>
      {roomList.map((room, index) => {
        const isActive = selectedRoom == room;
        return (
          <button
            key={index}
            className={`
              roomButton
              ${isActive && 'active'}
            `}
            onClick={() => setRoom(room)}
          >
            <Icons icon={room} className='roomIcon'/>
            {room}
          </button>
        )
      })}
    </StyledRoomDisplay>
  )
}

export default RoomDisplay