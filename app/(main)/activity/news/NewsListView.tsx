import Link from "next/link";
import NewsSummary from "../../_lib/models/news/NewsSummary";
import ContentArea from "../../_lib/components/ContentArea";
import NewsQueryResult from "../../_lib/models/news/NewsQueryResult";


function NewsItem({ newsData }: { newsData: NewsSummary }) {
    return (
        <Link
            href={`/news/${newsData.newsId}`}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        <div className="mb-[3px]">{newsData.title}</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-xl">{newsData.date}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function NewsView({ newsQueryResult }: { newsQueryResult: NewsQueryResult }) {
    return (
        <ContentArea>
            <div className="min-h-[40rem]">
                    <div className="grid grid-cols-[repeat(3,minmax(350px,auto))] gap-x-4 gap-y-6 mb-28">
                        {newsQueryResult.news.map((news) => (
                            <NewsItem key={news.newsId} newsData={news} />
                        ))}
                    </div>
            </div>
            {/*<PageNation
                curPage={viewModel.newsQueryOptions.pageNum}
                maxPage={queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            />*/}
        </ContentArea>
    );
}

export default NewsView;
