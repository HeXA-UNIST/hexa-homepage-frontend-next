import WebConstants from "../../../../_constants/web_constants";
import Seminar, { ISeminar } from "../../models/seminar/Seminar";
import SeminarsQueryResult, {
    SeminarsQueryType,
} from "../../models/seminar/SeminarsQueryResult";

export interface SeminarQueryParams {
    searchText?: string;
    // year?: string;
    // pageNum: number;
    // perPage: number;
}

export default class SeminarRepository {
    public static async getSeminars(): Promise<SeminarsQueryResult> {
        const response = await fetch(
            `${WebConstants.API_URL}/seminar/list`,
        );
        return new SeminarsQueryResult(await response.json());
    }

    public static async querySeminars({
        searchText = "",
        // year,
        // pageNum,
        // perPage,
    }: SeminarQueryParams): Promise<SeminarsQueryResult> {
        // const params = {
        //     searchText,
        //     year,
        //     pageNum,
        //     perPage,
        // };

        return new SeminarsQueryResult(await (await fetch(`${WebConstants.API_URL}/seminar/list?searchText=${searchText}`)).json())

        // const fakeResponse = await SeminarRepository.fakeQueryData();
        // return new SeminarsQueryResult(fakeResponse);
        // try {
        //     const response = await axios.get(
        //         `${WebConstants.API_URL}/seminar/list`,
        //         { params }
        //     );
        //     return new SeminarsQueryResult(response.data);
        // } catch (error) {
        //     console.log(error);
        //     throw error;
        // }
    }

    public static async getSeminarById(id: number): Promise<Seminar> {
        // const fakeResponse = await SeminarRepository.fakeSeminarData();
        // return new Seminar(fakeResponse);
        try {
            const response = await fetch(
                `${WebConstants.API_URL}/seminar/detail?seminarId=${id}`
            );
            return new Seminar(await response.json());
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private static async fakeQueryData(): Promise<SeminarsQueryType> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            totalPage: 1,
            seminars: [
                {
                    seminarId: 0,
                    title: "2022 Seminar 1",
                    date: "2022.01.04",
                    writer: "홍길동",
                    hasAttachment: true,
                },
                {
                    seminarId: 1,
                    title: "2022 Seminar 2",
                    date: "2022.01.04",
                    writer: "홍길동",
                    hasAttachment: false,
                },
                {
                    seminarId: 2,
                    title: "2022 Seminar 3",
                    date: "2022.01.04",
                    writer: "홍길동",
                    hasAttachment: false,
                },
            ]
        };
    }

    private static async fakeSeminarData(): Promise<ISeminar> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            // seminarId: 2,
            title: "2022 Seminar 3",
            date: "2022.01.04",
            writer: "홍길동",
            content: "",
            attachments: [],
        };
    }

    static empty() {
        return SeminarsQueryResult.empty();
    }
}
