/**
 * Leave Quota Availability
 * Api to know to leave availablity for a particular block.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ranjithkumar.kodangil@boeing.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as querystring from "querystring";
import * as url from "url";

import * as isomorphicFetch from "isomorphic-fetch";
import * as assign from "core-js/library/fn/object/assign";

interface Dictionary<T> { [index: string]: T; }
export interface FetchAPI { (url: string, init?: any): Promise<any>; }

const BASE_PATH = "http://api.crew.jeppesen.com/crew".replace(/\/+$/, "");

export interface FetchArgs {
    url: string;
    options: any;
}

export class BaseAPI {
    basePath: string;
    fetch: FetchAPI;

    constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) {
        this.basePath = basePath;
        this.fetch = fetch;
    }
};

export interface ErrorModel {
    "code": number;
    "message": string;
}

export interface Quota {
    "availableQuota"?: number;
    "description"?: string;
}



/**
 * DefaultApi - fetch parameter creator
 */
export const DefaultApiFetchParamCreator = {
    /**
     * 
     * @summary Get leave quota for requested date.
     */
    leaveQuotaGet(options?: any): FetchArgs {
        const baseUrl = `/leave/quota`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * DefaultApi - functional programming interface
 */
export const DefaultApiFp = {
    /**
     * 
     * @summary Get leave quota for requested date.
     */
    leaveQuotaGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Quota> {
        const fetchArgs = DefaultApiFetchParamCreator.leaveQuotaGet(options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * DefaultApi - object-oriented interface
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get leave quota for requested date.
     */
    leaveQuotaGet(options?: any) {
        return DefaultApiFp.leaveQuotaGet(options)(this.fetch, this.basePath);
    }
};

/**
 * DefaultApi - factory interface
 */
export const DefaultApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Get leave quota for requested date.
         */
        leaveQuotaGet(options?: any) {
            return DefaultApiFp.leaveQuotaGet(options)(fetch, basePath);
        },
    };
};

