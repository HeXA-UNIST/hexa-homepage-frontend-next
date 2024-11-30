import ProjectRepository from "../../_lib/services/project/project_repository";
import ProjectListView from "./ProjectListView";

async function ProjectList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let queryResult;
  const q = (await searchParams)["q"];
  if (typeof (q) === "string") {
    queryResult = await ProjectRepository.queryProjects({searchText: q})
  } else {
    queryResult = await ProjectRepository.getProjects();
  }
  return <ProjectListView queryResult={queryResult} defaultSearch={typeof (q) === "string" ? q : undefined} />;
}

export default ProjectList;
