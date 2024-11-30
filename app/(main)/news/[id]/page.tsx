import NewsRepository from "../../_lib/services/news/news_repository";
import NewsDetailView from "./NewsDetailView";



async function NewsDetail({params} : {params: {id: number}}) {
  const newsDetail = await NewsRepository.getNewsById(params.id);
  return (
        <NewsDetailView newsDetail={newsDetail} />
  );
}

export default NewsDetail;
