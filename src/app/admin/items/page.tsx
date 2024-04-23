'use client';
import dynamic from "next/dynamic";

const ItemWindow = dynamic(()=>import("../../Windows/ItemWindow/itemWindow"),{ssr:false})

export default function Items() {
    return<><ItemWindow/></>
}