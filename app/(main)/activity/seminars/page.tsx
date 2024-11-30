import SeminarRepository from "../../_lib/services/seminar/seminar_repository";
import SeminarListView from "./SeminarListView";

async function SeminarList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let queryResult;
  const q = (await searchParams)["q"];
  if (typeof (q) === "string") {
    queryResult = await SeminarRepository.querySeminars({searchText: q})
  } else {
    queryResult = await SeminarRepository.getSeminars();
  }
  return <SeminarListView queryResult={queryResult} defaultSearch={typeof (q) === "string" ? q : undefined} />;
}

export default SeminarList;