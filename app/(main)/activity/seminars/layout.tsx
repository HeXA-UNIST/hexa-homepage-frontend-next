import SubMain from "../../_lib/components/subMain/SubMain";
import { ActivityMode } from "../../_lib/models/activity/ActivityMode";

export default function Layout({children}:{children: React.ReactNode}) {
    return <>
        <SubMain mode={ActivityMode.Seminar} />
        {children}
    </>
}