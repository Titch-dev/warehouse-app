'use client'

import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { warehouseAuth } from '@/lib/firebaseClient';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName ) => {
        setError(null);
        setIsPending(true);

        try {
            //signup user
            const res = await createUserWithEmailAndPassword(warehouseAuth, email, password);

            if (!res) {
                throw new Error('Could not complete signup')
            }

            // add display name to user
            await updateProfile(res.user, { displayName })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state
            if (!isCancelled){
                setIsPending(false);
                setError(null)
            }
        }
        catch (err) {
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

    return { error, isPending, signup }
}
