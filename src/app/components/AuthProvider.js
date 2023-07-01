'use client'
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";


export default function AuthProvider({ children }) {
    
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}