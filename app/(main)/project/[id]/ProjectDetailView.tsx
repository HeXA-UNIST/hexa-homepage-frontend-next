import ContentArea from "../../_lib/components/ContentArea";
import DetailItem from "../../_lib/components/DetailItem";
import Project from "../../_lib/models/project/Project";
import { getStringFromDate } from "../../_lib/util/index";

function ProjectDetailView({
    projectDetail,
}: {
    projectDetail: Project;
}) {
    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/projects"
                    subTitle="프로젝트 명"
                    title={projectDetail.title}
                    image={projectDetail.thumbnail}
                    contentTitle="프로젝트 설명"
                    attachments={undefined}
                    content={
                        projectDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                        <li>
                            <div className="text-zinc-600 text-lg">프로젝트 기간</div>
                            <div className="text-white text-2xl font-bold">
                                {getStringFromDate(
                                    projectDetail.startDate,
                                    projectDetail.endDate
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">프로젝트 상태</div>
                            <div className="text-white text-2xl font-bold">{projectDetail.state}</div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">기술스택</div>
                            <div className="flex flex-row gap-2 mt-1 flex-wrap">
                                {projectDetail.projectTechStacks.map(
                                    (tech) => (
                                        <div key={tech} className=" text-zinc-400 rounded-xl bg-zinc-800 px-3 p-1">
                                            <div className="mb-1">{tech}</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </li>
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    );
}

export default ProjectDetailView;
