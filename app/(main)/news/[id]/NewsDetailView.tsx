import DetailItem from "../../_lib/components/DetailItem";
import ContentArea from "../../_lib/components/ContentArea";
import News from "../../_lib/models/news/News";


export default function NewsDetailView({ newsDetail }: { newsDetail: News }) {

    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/news"
                    subTitle="뉴스"
                    title={newsDetail.title}
                    image={undefined}
                    contentTitle="뉴스"
                    attachments={undefined}
                    content={
                        newsDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                    <li>
                            <div className="text-zinc-600 text-lg">세미나 일자</div>
                            <div className="text-white text-2xl font-bold">
                                {newsDetail.date}
                            </div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">종류</div>
                            <div className="text-white text-2xl font-bold">
                                {newsDetail.newsType}
                            </div>
                        </li>
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    )
}