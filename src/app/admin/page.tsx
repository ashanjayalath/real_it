'use client';

import dynamic from "next/dynamic";

const DashboardWindow = dynamic(()=>import("../Windows/DashboardWindow/dashboardWindow"),{ssr:false})

export default function Customer() {
    return <DashboardWindow/>
}