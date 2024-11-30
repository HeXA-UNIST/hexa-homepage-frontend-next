import Link from "next/link";
import ProjectSummary from "../../_lib/models/project/ProjectSummary";
import { ImageContent } from "../../_lib/components/ImageContent";

import ContentArea from "../../_lib/components/ContentArea";
// import SearchBox from "@components/search/SearchBox";
// import SearchArea from "../../_lib/components/search";
// import PageNation from "../../_lib/components/search/PageNation";


import ProjectsQueryResult from "../../_lib/models/project/ProjectsQueryResult";
import SearchArea from "@/app/(main)/_lib/components/search";

// const QueryFormPart = observer(
//     ({
//         projectPageViewModel,
//     }: {
//         projectPageViewModel: ProjectListViewModel;
//     }) => (
//         <div className="project-page__query-form">
//             <div>
//                 <SearchArea
//                     toggle={{
//                         subAreaTypes: ["search", "state", "tech"],
//                         search: {
//                             searchText: "",
//                             onTextChanged: (text: string) => {
//                                 projectPageViewModel.setSearchText(text);
//                                 projectPageViewModel.fetchProjects();
//                             },
//                             placeHolder: "검색 (예: BUS HeXA, tag:서비스)",
//                         },
//                         onSortChanged: projectPageViewModel.setSort,
//                         onYearChanged: projectPageViewModel.setYear,
//                         // onStatusChanged: projectPageViewModel.setStatus,
//                         projectListViewModel: projectPageViewModel,
//                     }}
//                 />
//             </div>
//         </div>
//     )
// );

function ProjectItem({ projectData }: { projectData: ProjectSummary }) {
    return (
        <Link
            href={`/project/${projectData.projectId}`}
            className="flex flex-col h-80 bg-neutral-900 rounded-3xl p-6 text-left font-bold"
        >
            <div className="flex flex-row items-center justify-between text-white text-2xl mb-3 px-1">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap">{projectData.title}</div>
                <span className="text-base font-medium text-zinc-500 float-right">
                    Project
                </span>
            </div>
            <div className="flex justify-center items-center bg-neutral-800 rounded-2xl h-44 mb-4 overflow-hidden">
                <ImageContent
                    id={projectData.thumbnail}
                    className=""
                />
            </div>
        </Link>
    );
}

function ProjectView({ queryResult, defaultSearch }: { queryResult: ProjectsQueryResult, defaultSearch: string | undefined }) {
    return (
        <ContentArea>
            <div className="min-h-[40rem]">
            <SearchArea toggle={{
                subAreaTypes: ["search"],
                search: {
                    searchText: defaultSearch === undefined ? "" : defaultSearch,
                    placeHolder: "검색 (예: BUS HeXA, tag:서비스)",
                },
            }} />
                <div className="grid grid-cols-[repeat(3,minmax(350px,_1fr))] gap-x-6 gap-y-8 mb-28">
                    {queryResult.projects.map((project) => (
                        <ProjectItem
                            key={project.projectId}
                            projectData={project}
                        />
                    ))}
                </div>

            </div>

            {/* <PageNation
                curPage={viewModel.projectQueryOptions.pageNum}
                maxPage={viewModel.queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            /> */}
        </ContentArea>
    );
}

export default ProjectView;
