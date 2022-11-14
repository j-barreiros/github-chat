import React, { useEffect, useState } from 'react'

//Supabase
import { createClient } from '@supabase/supabase-js';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'

function Login() {
    const supabase = createClient(PROJECT_URL, API_KEY);
    const [githubUser, setGithubUser] = useState(null);


    async function signInWithGithub() {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://www.google.com'
            }
        })

        console.log(user)
        
        if(user) {
            setGithubUser(user)
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
        setUser(null);
    }

    if(githubUser) {
        return (
            <div>
                {console.log(githubUser)}
                <h1>Hello, {githubUser.email}</h1>
                <button onClick={signOut}>Sign out</button>
            </div>
        )
    }

    return(
        <div>
            {console.log(githubUser)}
            <h1>Login</h1>
            <button onClick={signInWithGithub}>Sign in</button>
        </div>
    )
}

export default Login;