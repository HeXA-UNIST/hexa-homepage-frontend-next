import SeminarRepository from "../../_lib/services/seminar/seminar_repository";
import SeminarDetailView from "./SeminarDetailView";



async function SeminarDetail({params} : {params: {id: number}}) {
  const seminarDetail = await SeminarRepository.getSeminarById(params.id);
  return (
    <>
        <SeminarDetailView seminarDetail={seminarDetail} />
    </>
  );
}

export default SeminarDetail;
