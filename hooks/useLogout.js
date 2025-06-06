'use client'

import { useEffect, useState } from "react";
import { warehouseAuth } from "@/lib/firebaseClient";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    
    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await warehouseAuth.signOut();

            // dispatch log out action
            dispatch({ type: 'LOGOUT'});

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

    return { error, isPending, logout };
}