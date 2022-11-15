import axiosClient from './axiosClient';

class SearchPageAPI {
    getAll = (params) => {
        const url = 'pages/search';
        return axiosClient.get(url, { params });
    };
}

const searchPageApi = new SearchPageAPI();
export default searchPageApi;
