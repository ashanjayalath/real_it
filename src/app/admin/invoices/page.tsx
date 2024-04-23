'use client';

import dynamic from "next/dynamic";

const InvoiceWindow = dynamic(()=>import("../../Windows/InvoiceWindow/invoiceWindow"),{ssr:false})

export default function Invoice() {
    return<><InvoiceWindow/></>
}