import { useContext, useEffect, useState } from 'react'

//Components
import MessageBoard from './components/MessageBoard/MessageBoard'
import MessageInput from './components/MessageInput/MessageInput'
import RoomDisplay from './components/RoomDisplay/RoomDisplay'

//Style
import StyledApp from './StyledApp'

//Supabase
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './service/AuthContext';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'
const supabase = createClient(PROJECT_URL, API_KEY);

function App() {

  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('#general');
  const navigate = useNavigate();
  const authcontext = useContext(AuthContext);

  useEffect(() => {

    if(authcontext.user == null) {
      navigate('/')
    } 
    
    supabase.from('messages')
      .select('*')
      .then(({ data }) => {
        setMessages(data)
      })
  }, [])

  supabase
    .channel("*")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "messages" },
      (payload) => {
        console.log("Change received!", setMessages([...messages, payload.new]));
      }
    )
    .subscribe();

  function addMessage(newMessage) {
    //setMessages([...messages,newMessage]);
    supabase.from('messages')
      .insert({...newMessage, room: room})
      .then()
      .catch()
  }

  return (
    <StyledApp>
      <RoomDisplay setRoom={setRoom} />
      <div className='chat'>
        <MessageBoard messages={messages} room={room}/>
        <MessageInput addMessage={addMessage} room={room}/>
      </div>
    </StyledApp>
  )
}

export default App
