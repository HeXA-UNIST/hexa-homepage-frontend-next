import ProjectRepository from "../../_lib/services/project/project_repository";
import ProjectDetailView from "./ProjectDetailView";



async function ProjectDetail({params} : {params: {id: number}}) {
  const projectDetail = await ProjectRepository.getProjectById(params.id);
  return (
    <>
        <ProjectDetailView projectDetail={projectDetail} />
    </>
  );
}

export default ProjectDetail;
