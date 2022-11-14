import React, { createContext, useState } from 'react'

export const AuthContext = createContext(
    {
        user: null,
        signInWithGithub: () => {},
        signOut: () => {},
        checkUser: () => {},
        isLogedIn: () => {},
    });

// Supabase (Isolar isso também)
import { createClient } from '@supabase/supabase-js';
const PROJECT_URL = 'https://wdmngefxwwygmivvtgok.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbW5nZWZ4d3d5Z21pdnZ0Z29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjg1NDksImV4cCI6MTk4Mzg0NDU0OX0.9O9yDhbGvgkyoDSNvSgn-5CBY61FjDuR4NafRQGK7g0'

export default function AuthContextProvider(props) {
    const [user, setUser] = useState(null);
    const supabase = createClient(PROJECT_URL, API_KEY);

    async function signInWithGithub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        })
    }

    async function signOut() {
        await supabase.auth.signOut();
        setUser(null);
    }

    async function checkUser() {
        const userRequest = supabase.auth.getUser();
        userRequest.then((result) => {
            setUser(result.data.user.user_metadata)
        })
    }

    function isLogedIn() {
        return user !== null && user !== undefined;
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            signInWithGithub: signInWithGithub,
            signOut: signOut,
            checkUser: checkUser,
            isLogedIn: isLogedIn,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
