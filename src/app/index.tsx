// import { redirect } from 'next/navigation';
// import Loading from '../app/loading'
// export default function Home({}) {
//     return redirect('/admin')
// }
import WithSubnavigation from "./component/navBar";
import CallToActionWithAnnotation from "./component/header";

export default function Home({}) {
    return<>
        <WithSubnavigation/>
        <CallToActionWithAnnotation/>
    </>
}
