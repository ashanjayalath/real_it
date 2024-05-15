'use client';

import dynamic from "next/dynamic";

const SignInWindow = dynamic(()=>import("../../Windows/SigninWindow/signInWindow"),{ssr:false})

export default function NewPassword() {
    return <SignInWindow/>
}