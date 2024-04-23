'use client';

import dynamic from "next/dynamic";

const ForgetPassWindow = dynamic(()=>import("../../Windows/ForgetPassWindow/forgetPassWindow"),{ssr:false})

export default function ForgetPassword() {
    return<><ForgetPassWindow/></>
}