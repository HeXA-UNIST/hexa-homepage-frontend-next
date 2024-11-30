import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

// import SearchArea from "@components/search";
// import PageNation from "@components/search/PageNation";
import ContentArea from "../../_lib/components/ContentArea";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import SeminarSummary from "../../_lib/models/seminar/SeminarSummary";
import SeminarsQueryResult from "../../_lib/models/seminar/SeminarsQueryResult";
import SearchArea from "@/app/(main)/_lib/components/search";


function SeminarItem({ seminarData }: { seminarData: SeminarSummary }) {
    return (
        <Link
            href={`/seminar/${seminarData.seminarId}`}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        {seminarData.hasAttachment && (
                            <FontAwesomeIcon
                                className=" mr-2 text-xl"
                                icon={faFileLines}
                            />
                        )}
                        <div className="mb-[3px]">{seminarData.title}</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-xl">{seminarData.writer}</div>
                        <div className="text-xl">{seminarData.date}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function SeminarView({ queryResult, defaultSearch }: { queryResult: SeminarsQueryResult, defaultSearch: string | undefined }) {
    return (
        <ContentArea>
            <SearchArea toggle={{
                subAreaTypes: ["search"],
                search: {
                    searchText: defaultSearch === undefined ? "" : defaultSearch,
                    placeHolder: "검색 (예: BUS HeXA, tag:서비스)",
                },
            }} />
            <div className="min-h-[40rem]">

                <div className="grid grid-cols-[repeat(3,minmax(350px,auto))] gap-x-4 gap-y-6 mb-28">
                    {queryResult.seminars.map((seminar) => (
                        <SeminarItem
                            key={seminar.seminarId}
                            seminarData={seminar}
                        />
                    ))}
                </div>

            </div>

            {/* <PageNation
                curPage={viewModel.seminarQueryOptions.pageNum}
                maxPage={viewModel.queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            /> */}
        </ContentArea>
    );
}

export default SeminarView;
