// import { ProjectStatusString } from "@models/project/Project";
// import { SortDropDown, YearDropDown } from "./DropDowns";
import SearchBox from "./SearchBox";
// import TechStack from "./TechStack";
// import ProjectState from "./ProjectState";

type SubSearchAreaType = ("search" | "state" | "tech")[];

interface ISearchTypes {
    subAreaTypes: SubSearchAreaType;
    search?: {
        searchText: string;
        placeHolder: string;
        // onTextChanged: (text: string) => void;
    };
    // onSortChanged?: (sort: "asc" | "desc") => void;
    // onYearChanged?: (year: string) => void;
    // onPerPageChanged?: (perPage: number) => void;
    // onStatusChanged?: (status: ProjectStatusString[]) => void;
    // projectListViewModel?: ProjectListViewModel;
}

function SubSearchArea({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    if (children == null) {
        return null;
    }
    return (
        <div className="mb-8">
            <div className=" text-left text-xl text-white font-semibold mb-4">
                {title}
            </div>
            <div className="flex flex-row flex-wrap gap-3">{children}</div>
        </div>
    );
}

export default function SearchArea({ toggle }: { toggle: ISearchTypes }) {
    return (
        <div>
            {toggle.subAreaTypes.includes("search") && (
                <SubSearchArea title="검색">
                    {toggle.search !== undefined && (
                        <SearchBox
                            value={toggle.search.searchText}
                            placeholder={toggle.search.placeHolder}
                        />
                    )}
                </SubSearchArea>
            )}
            {/* {toggle.subAreaTypes.includes("state") && (
                <SubSearchArea title="상태">
                    {toggle.projectListViewModel !== undefined && (
                        <ProjectState
                            projectListViewModel={toggle.projectListViewModel}
                        />
                    )}
                </SubSearchArea>
            )}
            {toggle.subAreaTypes.includes("tech") && (
                <SubSearchArea title="기술스택">
                    {toggle.projectListViewModel !== undefined && (
                        <TechStack
                            projectListViewModel={toggle.projectListViewModel}
                        />
                    )}
                </SubSearchArea>
            )} */}
        </div>
    );
}
