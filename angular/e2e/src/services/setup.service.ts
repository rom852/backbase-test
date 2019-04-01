import {injectable} from 'inversify';
import {lazyInject} from '../core/dependency-injection/di.config';
import {TYPES} from '../core/dependency-injection/types';
import {Config} from '../core/config';
import {SharedContext} from '../context/shared.context';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import {Cookie, CookieJar} from 'tough-cookie';

// enriching axios with logger and cookies
// tslint:disable-next-line
require('axios-debug-log')({
    request: (debug, request: AxiosRequestConfig) => {
        debug('request started: ', request.url);
        debug('request body: %o', request.data);
        debug('request headers: %o', request.headers);
    },
    response: (debug, response: AxiosResponse) => {
        debug(response.config.method.toUpperCase(), response.status);
        debug('response headers: %o', response.headers);
        debug('response body: %o', response.data);
        debug('------------ request ended: ', response.config.url);
    },
    error: (debug, error) => {
        // Read https://www.npmjs.com/package/axios#handling-errors for more info
        debug('Boom', error);
    }
});
// axiosCookieJarSupport(axios);
// axios.defaults.withCredentials = true;
// axios.defaults.jar = new CookieJar();
// const cookieJar = axios.defaults.jar as CookieJar;
// axios.interceptors.request.use((config: AxiosRequestConfig) => {
//     if (config.method === 'post') {
//         const cookies: Cookie[] = cookieJar.getCookiesSync(config.url);
//         const xsrfCookie = cookies.find(cookie => cookie.key === 'XSRF-TOKEN');
//         if (xsrfCookie) {
//             config.headers['X-XSRF-TOKEN'] = xsrfCookie.value;
//         }
//     }
//     return config;
// });

@injectable()
export class SetupService {
    @lazyInject(TYPES.Config) private config: Config;
    @lazyInject(TYPES.Context.Shared) private sharedContext: SharedContext;

    constructor() {
    }

    async setup() {
        console.log('Starting setup...');
        console.log('Connection to DB ...');
        console.log('Connected!');


        console.log('Setup ended!');
    }



}
