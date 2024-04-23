'use client';

import dynamic from "next/dynamic";

const ProfileWindow = dynamic(()=>import("../../Windows/ProfileWindow/profileWindow"),{ssr:false})

export default function Profile() {
    return<><ProfileWindow/></>
}