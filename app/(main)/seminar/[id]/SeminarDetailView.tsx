import ContentArea from "../../_lib/components/ContentArea";
import DetailItem from "../../_lib/components/DetailItem";
import Seminar from "../../_lib/models/seminar/Seminar";

function SeminarDetailView({ seminarDetail }: { seminarDetail: Seminar }) {
    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/seminars"
                    subTitle="세미나"
                    title={seminarDetail.title}
                    image={undefined}
                    contentTitle="세미나 설명"
                    attachments={seminarDetail.attachments}
                    content={
                        seminarDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                        <li>
                            <div className="text-zinc-600 text-lg">날짜</div>
                            <div className="text-white text-2xl font-bold">
                                {seminarDetail.date}
                            </div>
                        </li>
                        
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    )
}

export default SeminarDetailView;