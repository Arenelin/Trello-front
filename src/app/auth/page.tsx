import React from 'react';
import {Metadata} from "next";
import {Auth} from "@/app/auth/Auth";

export const metadata: Metadata = {
    title: 'Auth'
}
const AuthPage = () => {
    return (
        <Auth/>
    );
};

export default AuthPage;
