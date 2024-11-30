import NewsRepository from "../../_lib/services/news/news_repository";
import NewsListView from "./NewsListView";


async function NewsList() {
  const queryResult = await NewsRepository.queryNews();
  return <NewsListView newsQueryResult={queryResult} />;
}

export default NewsList;
