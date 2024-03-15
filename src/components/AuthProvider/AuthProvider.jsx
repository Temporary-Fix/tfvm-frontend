import { useState, useContext, createContext, useEffect } from 'react'

import axiosInstance from '../../axios';

/*
    * Axios responses have this format
    * response.data 
    * response.status
    * response.headers 
*/

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [ authUser, setAuthUser ] = useState(null);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ authLoading, setAuthLoading ] = useState(false);

    useEffect(() => {
        checkAuthTimed(500);
    }, []);

    async function setNewSession(values) {
        setAuthLoading(true);

        setAuthUser(values);
        setIsLoggedIn(true);

        setAuthLoading(false);
    }

    async function setNewSessionTimed(values, delay) {
        console.log('setting new session');
        setAuthLoading(true);

        setAuthUser(values);
        setIsLoggedIn(true);

        setTimeout(() => {
            setAuthLoading(false);
        }, delay);
    }

    async function registerUser(values) {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/users/', values);
            setAuthUser(response.data);
            setIsLoggedIn(false);

            setAuthLoading(false);

            return response;

        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setAuthLoading(false);

            throw error;
        }

    }

    async function registerUserTimed(values, delay) {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/users/', values);
            setAuthUser(response.data);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            return response;

        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            throw(error);

        }

    }

    async function logout() {

        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/logout');
            setAuthUser(null);
            setIsLoggedIn(false);

            setAuthLoading(false);

            return response;

        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setAuthLoading(false);

            throw error;
        }
    }

    async function logoutTimed(delay) {

        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/logout');
            setAuthUser(null);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            return response;

        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            throw(error);

        }
    }

    async function login(values) {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/login', values);
            setAuthUser(response.data);
            setIsLoggedIn(true);

            setAuthLoading(false);

            return response;
        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setAuthLoading(false);

            throw error;

        }
    }


    async function loginTimed(values, delay) {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.post('/login', values);
            setAuthUser(response.data);
            setIsLoggedIn(true);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            return response;
        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

            throw error;

        }
    }

    async function checkAuth() {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.get('/user');
            setAuthUser(response.data);
            setIsLoggedIn(true);

            setAuthLoading(false);

        }
        catch (error) {

            setAuthLoading(true);

            setAuthUser(null);
            setIsLoggedIn(false);

            setAuthLoading(false);

        }

    }

    //used if you want a minimum delay between setAuthLoading true and setAuthLoading false, for visual purposes - not logic
    async function checkAuthTimed(delay) {
        try {

            setAuthLoading(true);

            const response = await axiosInstance.get('/user');

            setAuthUser(response.data);
            setIsLoggedIn(true);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

        }
        catch (error) {

            setAuthUser(null);
            setIsLoggedIn(false);

            setTimeout(() => {
                setAuthLoading(false);
            }, delay);

        }

    }

    const value = {
        setNewSession,
        setNewSessionTimed,
        registerUser,
        registerUserTimed,
        checkAuth,
        checkAuthTimed,
        login,
        loginTimed,
        logout,
        logoutTimed,
        authUser,
        setAuthUser,
        isLoggedIn,
        authLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
