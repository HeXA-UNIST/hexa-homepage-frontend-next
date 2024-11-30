import ServiceRepository from "../../_lib/services/service/service_repository";
import ServiceListView from "./ServiceListView";

async function SeminarList() {
  const serviceList = (await ServiceRepository.queryServices()).services;
  return <ServiceListView serviceList={serviceList} />;
}

export default SeminarList;
