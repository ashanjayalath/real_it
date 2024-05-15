'use client';

import dynamic from "next/dynamic";

const CustomerWindow = dynamic(()=>import("../../Windows/CustomerWindow/customerWindow"),{ssr:false})

export default function Customer() {
    return <CustomerWindow/>
}