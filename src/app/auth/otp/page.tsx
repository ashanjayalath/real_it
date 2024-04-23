'use client';

import dynamic from "next/dynamic";

const OtpWindow = dynamic(()=>import("../../Windows/OtpWindow/otpWindow"),{ssr:false})

export default function Otp() {
    return<><OtpWindow/></>
}