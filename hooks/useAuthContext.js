'use client'

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('useAuthContext must be within an AuthContextProvider');
    }

    return context;
}