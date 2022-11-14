import React, { useContext, useEffect, useState } from 'react'

//Supabase
import { createClient } from '@supabase/supabase-js';
import { AuthContext } from '../service/AuthContext';
import { useNavigate } from 'react-router-dom';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'

function Login() {
    const supabase = createClient(PROJECT_URL, API_KEY);
    const authcontext = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        authcontext.checkUser();
        window.addEventListener('hashchange', () => authcontext.checkUser);
        console.log('SETEI')
    }, [])

    useEffect(() => {
        if(authcontext.user) {
            console.log('tentei ir')
            navigate('chat')
        }
    }, [authcontext.user])

    function signIn() {
        authcontext.signInWithGithub();
    }

    if(authcontext.user) {
        return (
            <div>
                <img src={authcontext.user.avatar_url} />
                <h1>Iae {authcontext.user.full_name}</h1>
                <button onClick={authcontext.signOut}>Sign out</button>
            </div>
        )
    }

    return(
        <div>
            <h1>Login</h1>
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}

export default Login;