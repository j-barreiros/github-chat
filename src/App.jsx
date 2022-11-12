import { useEffect, useState } from 'react'
import './App.css'

//Components
import MessageBoard from './components/MessageBoard/MessageBoard'
import MessageInput from './components/MessageInput/MessageInput'


//Supabase
import { createClient } from '@supabase/supabase-js';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'
const supabase = createClient(PROJECT_URL, API_KEY);

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
      .insert(newMessage)
      .then()
      .catch()
  }

  return (
    <div className="App">
      <MessageBoard messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  )
}

export default App
