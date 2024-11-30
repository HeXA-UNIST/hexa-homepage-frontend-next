import Activities from "./_lib/components/sections/Activities";
import Main from "./_lib/components/sections/Main";
import News from "./_lib/components/sections/News";
import Services from "./_lib/components/sections/Services";
import Supports from "./_lib/components/sections/Supports";
import MainPageRepository from "./_lib/services/mainpage/mainpage_repository";

export default async function MainPage() {
    const mainPageData = await MainPageRepository.getMainPageData();
    return <>
        <Main />
        <News newsList={mainPageData.newsList} />
        <Services serviceList={mainPageData.serviceList} />
        <Activities />
        <Supports />
    </>
}