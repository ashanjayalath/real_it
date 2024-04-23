'use client';

import dynamic from "next/dynamic";

const NewPassWindow = dynamic(()=>import("../../Windows/NewPassWindow/newPassWindow"),{ssr:false})

export default function NewPassword() {
    return<><NewPassWindow/></>
}