import React, { useEffect, useState } from 'react'

//Supabase
import { createClient } from '@supabase/supabase-js';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'

function Login() {
    const supabase = createClient(PROJECT_URL, API_KEY);
    const [githubUser, setGithubUser] = useState(null);

    useEffect(() => {
        checkUser();
        window.addEventListener('hashchange', () => checkUser());
    }, [])

    async function signInWithGithub() {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'github',
        })
    }

    async function signOut() {
        await supabase.auth.signOut();
        setGithubUser(null);
    }

    async function checkUser() {
        const userRequest = supabase.auth.getUser();
        userRequest.then((result) => {
            setGithubUser(result.data.user.user_metadata)
        })
    }

    if(githubUser) {
        return (
            <div>
                {console.log(githubUser)}
                <img src={githubUser.avatar_url} />
                <h1>Iae {githubUser.full_name}</h1>
                <h2>também conhecido como {githubUser.user_name}</h2>
                <h3>e dono do email {githubUser.email}</h3>
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