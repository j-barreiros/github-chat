import React from 'react'

//Style
import StyledRoomDisplay from './StyledRoomDisplay';

//Icon
import Icons from './Icons';

function RoomDisplay({ setRoom, selectedRoom }) {

  const roomList = ['#general', '#html', '#css', '#javascript', '#react'];

  return (
    <StyledRoomDisplay>
      <h1 className='app_name'><span>Dev</span>_Chat</h1>
      <select
        className='room_select'
        value={selectedRoom}
        onChange={(event) => setRoom(event.target.value)}
      >
        {roomList.map((room, index) => <option key={index} value={room}>{room}</option>)}
      </select>
      <div className='room_buttons'>
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
              <Icons icon={room} className='roomIcon' />
              {room}
            </button>
          )
        })}
      </div>
    </StyledRoomDisplay>
  )
}

export default RoomDisplay