import axiosClient from './axiosClient';
import type { ListParams, ListPokemon, SearchItemInfo } from '~/models';

const searchApi = {
    getAll(params: ListParams): Promise<ListPokemon> {
        return axiosClient.get('', { params });
    },
    getSearchInfo(id: string): Promise<SearchItemInfo> {
        const url = `/${id}`;
        return axiosClient.get(url);
    },
};

export default searchApi;
