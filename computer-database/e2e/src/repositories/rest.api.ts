import {injectable} from 'inversify';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {lazyInject} from '../core/dependency-injection/di.config';
import {TYPES} from '../core/dependency-injection/types';
import {Config} from '../core/config';

@injectable()
export class RestApi {
    @lazyInject(TYPES.Config) private config: Config;
    private readonly mainHost: string;

    constructor() {
        this.mainHost = this.config.mainHost;
    }

    async get<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(url, config);
        return response.data;
    }

    async delete(url: string, config: AxiosRequestConfig = {}): Promise<void> {
        const response = await axios.delete(url, config);
        return response.data;
    }

    public async post<T = any>(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.post(url, data, config);
        return response.data;
    }

    async patch<T = any>(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.patch(url, data, config);
        return response.data;
    }
}
