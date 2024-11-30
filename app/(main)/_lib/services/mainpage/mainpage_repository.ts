//import axios from "axios";
import WebConstants from "../../../../_constants/web_constants";
import MainPageData from "../../models/mainpage/MainPageData";

export default class MainPageRepository {
    public static async getMainPageData(): Promise<MainPageData> {
        // const option = {
        //     url: `${WebConstants.API_URL}`,
        //     method: "GET",
        //     header: {
        //         "Content-Type": `application/json;charset=UTF-8`,
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Credentials": "true",
        //     },
        // };

        // const fakeResponse: IMainPageData = await MainPageRepository.fakeData();
        // return new MainPageData(fakeResponse);

        try {
            const response = await fetch(WebConstants.API_URL);
            return new MainPageData(await response.json());
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
