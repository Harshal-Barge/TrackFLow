import React, { useState } from 'react'
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Button } from '@/components/ui/button';
import "./Auth.css";

export const Auth = () => {
    const [active, setActive] = useState(true);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-1000 p-4">
            <div className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden w-96 text-white">
                <div className="p-8 space-y-6">
                    {active ? <SignUp /> : <Login />}
                    <div className="text-center text-gray-400">
                        <span>{active ? "Already have an account?" : "Don't have an account?"}</span>
                        <Button
                            className="ml-2 text-blue-500 hover:text-blue-400 transition"
                            variant="ghost"
                            onClick={() => setActive(!active)}
                        >
                            {active ? "Sign In" : "Sign Up"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
