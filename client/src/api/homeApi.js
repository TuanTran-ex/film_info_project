import axiosClient from './axiosClient';


class HomePageAPI {
    getAll = (params) => {
        const url = '/films';
        return axiosClient.get(url, { params });
    };
}

const homePageApi = new HomePageAPI();
export default homePageApi;
