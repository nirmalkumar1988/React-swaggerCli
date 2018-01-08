export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
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
export declare const DefaultApiFetchParamCreator: {
    leaveQuotaGet(options?: any): FetchArgs;
};
/**
 * DefaultApi - functional programming interface
 */
export declare const DefaultApiFp: {
    leaveQuotaGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Quota>;
};
/**
 * DefaultApi - object-oriented interface
 */
export declare class DefaultApi extends BaseAPI {
    /**
     *
     * @summary Get leave quota for requested date.
     */
    leaveQuotaGet(options?: any): Promise<Quota>;
}
/**
 * DefaultApi - factory interface
 */
export declare const DefaultApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    leaveQuotaGet(options?: any): Promise<Quota>;
};
