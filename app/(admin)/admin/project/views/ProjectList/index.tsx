import { SimpleProjectAdmin } from "../../../../_lib/models/admin/ProjectAdmin";
import WebConstants from "../../../../../_constants/web_constants";
import Button from "../../../../_lib/components/Button";
import { observer } from "mobx-react-lite";
import { useProjectAdminStore } from "../../context/ProjectAdminContext";
import Image from "next/image";

function ProjectItem({
  item,
  onClick,
}: {
  item: SimpleProjectAdmin;
  onClick: () => void;
}) {
  return (
    <button
      className="p-4 w-full max-w-lg bg-gray-800 rounded-md border border-gray-700 flex flex-row items-center gap-2"
      type="button"
      onClick={onClick}
    >
      <Image
        className="w-[140px] rounded-md overflow-hidden"
        src={`${`${WebConstants.API_URL}/attachment/?attachmentId=${item.thumbnail}`}`}
        alt="thumbnail"
      />
      <div className="flex-1 flex flex-col items-start">
        <div className="text-base font-bold text-white">{item.title}</div>
        <div className="text-sm text-gray-500">{item.state}</div>
      </div>
    </button>
  );
}

function ProjectList() {
  const store = useProjectAdminStore();

  return (
    <div className="w-full h-full relative flex flex-col gap-4 min-h-0 overflow-y-auto">
      <div className="w-full flex flex-row items-center py-2 gap-6">
        <div className="text-xl font-bold text-white">프로젝트 목록</div>
        <Button
          label="프로젝트 추가"
          onClick={() => {
            store.createProject();
          }}
        />
      </div>
      <div className="w-full h-full flex-wrap flex flex-row gap-4 justify-start items-start p-4">
        {store.data?.list.map((item) => (
          <ProjectItem
            key={item.projectId}
            item={item}
            onClick={() => {
              store.editorStore.selectProject(item.projectId);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(ProjectList);
