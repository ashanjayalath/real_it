'use client';

import dynamic from "next/dynamic";

const EstimateWindow = dynamic(()=>import("../../Windows/EstimateWindow/estimateWindow"),{ssr:false})

export default function Estimate() {
    return<><EstimateWindow/></>
}