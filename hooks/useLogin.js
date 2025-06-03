'use client'

import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { warehouseAuth } from "@/lib/firebaseClient";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    
    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            res = await signInWithEmailAndPassword(warehouseAuth, email, password);

            // dispatch log out action
            dispatch({ type: 'LOGIN', payload: res.user });

            // update state
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } 
        catch(err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, login };
}