"use client";

import WithSubnavigation from "./component/navBar";
import CallToActionWithAnnotation from "./component/header";
import { redirect } from "next/navigation";

export default function Home() {
    return redirect('/admin');
    // <>
    //     <WithSubnavigation/>
    //     <CallToActionWithAnnotation/>
    // </>
}
