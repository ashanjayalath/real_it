'use client';

import dynamic from "next/dynamic";

const VendorsWindow = dynamic(()=>import("../../Windows/VendorsWindow/vendorsWindow"),{ssr:false})

export default function Vendors() {
    return<><VendorsWindow/></>
}