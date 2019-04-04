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

@injectable()
export class SetupService {
    @lazyInject(TYPES.Config) private config: Config;
    @lazyInject(TYPES.Context.Shared) private sharedContext: SharedContext;

    constructor() {
    }

    async setup() {
        console.log('Starting setup...');
    }



}
