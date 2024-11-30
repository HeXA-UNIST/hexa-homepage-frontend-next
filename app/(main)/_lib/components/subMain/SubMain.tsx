import ContentArea from "../ContentArea";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { ActivityMode } from "../../models/activity/ActivityMode";

import "./submain.css";

interface DropdownItem {
    id: ActivityMode;
    label: string;
    link: string;
    description: string;
}

const PageList: DropdownItem[] = [
    {
        id: ActivityMode.Project,
        label: "프로젝트",
        link: "/activity/projects",
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: ActivityMode.Service,
        label: "서비스",
        link: "/activity/services",
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: ActivityMode.News,
        label: "소식",
        link: "/activity/news",
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: ActivityMode.Seminar,
        label: "세미나",
        link: "/activity/seminars",
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
];

function SubMain({ mode }: { mode: ActivityMode }) {
    const curPage = PageList.find((v) => v.id == mode) || PageList[0];

    return (
        <ContentArea>
            <div className="flex flex-col items-start text-white font-semibold text-5xl pt-[180px] mb-10">
                <div className="w-100 mb-5">HeXA에서 진행한</div>
                <div className="flex flex-row mb-7">
                    <div>
                        <div className="relative inline-block text-left">
                            <div>
                                <details
                                    className="w-[15.5rem] border-b-4 border-zinc-300 text-zinc-300 pb-3 pl-2 pr-11 group/dropdown h-16"
                                >
                                    <summary className="w-60 flex justify-center absolute top-0 group-hover/dropdown:mt-[3px]"
                                        style={{
                                            transitionProperty: "margin-top",
                                            transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
                                            transitionDuration: "150ms",
                                        }}>
                                        <span>
                                            {curPage.label}
                                            <FontAwesomeIcon
                                                className="ml-3"
                                                icon={faArrowDown}
                                            />
                                        </span>
                                    </summary>


                                    <div
                                        className={`z-20 text-2xl absolute origin-top top-20 rounded-lg bg-zinc-800 overflow-hidden submain-list`}>
                                        {PageList.filter((item) => item.id !== mode).map((subPageItem) => (
                                            <Link
                                                key={subPageItem.id}
                                                className="text-white block px-4 py-2 w-56 text-center rounded-md hover:bg-zinc-900 m-2"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                                href={subPageItem.link}
                                            >
                                                {subPageItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>


                            </div>
                        </div>
                    </div>
                    <span className="ml-4">목록</span>
                </div>
                <div className=" font-medium text-zinc-400 text-lg">
                    {curPage.description}
                </div>
            </div>
        </ContentArea>
    );
}

export default SubMain;
/*

*/