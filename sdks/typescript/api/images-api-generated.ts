/* tslint:disable */
/* eslint-disable */
/**
 * Leap
 * The Official Leap API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateInferenceDto } from '../models';
// @ts-ignore
import { InferenceEntity } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ImagesApi - axios parameter creator
 * @export
 */
export const ImagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete the image job and all related images.
         * @summary Delete Image Job
         * @param {string} modelId The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
         * @param {string} inferenceId The ID of the image generation job to retrieve. This is the same ID that is returned when you submit a new image generation job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (modelId: string, inferenceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('delete', 'modelId', modelId)
            // verify required parameter 'inferenceId' is not null or undefined
            assertParamExists('delete', 'inferenceId', inferenceId)
            const localVarPath = `/api/v1/images/models/{modelId}/inferences/{inferenceId}`
                .replace(`{${"modelId"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-modelId-`)))
                .replace(`{${"inferenceId"}}`, encodeURIComponent(String(inferenceId !== undefined ? inferenceId : `-inferenceId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a single image generation job, including the urls for the images generated.
         * @summary Get Single Image Job
         * @param {string} modelId The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
         * @param {string} inferenceId The ID of the image generation job to retrieve. This is the same ID that is returned when you submit a new image generation job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (modelId: string, inferenceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('findOne', 'modelId', modelId)
            // verify required parameter 'inferenceId' is not null or undefined
            assertParamExists('findOne', 'inferenceId', inferenceId)
            const localVarPath = `/api/v1/images/models/{modelId}/inferences/{inferenceId}`
                .replace(`{${"modelId"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-modelId-`)))
                .replace(`{${"inferenceId"}}`, encodeURIComponent(String(inferenceId !== undefined ? inferenceId : `-inferenceId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generate an image by providing a text description. Generations usually take bettween 4-20 seconds per image. Total generation time depends on the number of `steps` and `noOfImages` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Single Image Job](https://reference.tryleap.ai/reference/inferencescontroller_findone-1) endpoint.
         * @summary Generate an Image
         * @param {string} modelId The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
         * @param {CreateInferenceDto} createInferenceDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generate: async (modelId: string, createInferenceDto: CreateInferenceDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('generate', 'modelId', modelId)
            // verify required parameter 'createInferenceDto' is not null or undefined
            assertParamExists('generate', 'createInferenceDto', createInferenceDto)
            const localVarPath = `/api/v1/images/models/{modelId}/inferences`
                .replace(`{${"modelId"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-modelId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createInferenceDto,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createInferenceDto, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of inference jobs for a specific model.
         * @summary List All Image Jobs
         * @param {string} modelId The ID of the model to generate images. This can be a custom model or a public model. Visit: https://docs.tryleap.ai/public-models to view the list of public models.
         * @param {boolean} [onlyFinished] If set to true, only finished inferences will be returned. If set to false or not set, all inference jobs will be returned.
         * @param {number} [page] The page to request.
         * @param {number} [pageSize] The number of items to return per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (modelId: string, onlyFinished?: boolean, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('listAll', 'modelId', modelId)
            const localVarPath = `/api/v1/images/models/{modelId}/inferences`
                .replace(`{${"modelId"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-modelId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (onlyFinished !== undefined) {
                localVarQueryParameter['onlyFinished'] = onlyFinished;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ImagesApi - functional programming interface
 * @export
 */
export const ImagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ImagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete the image job and all related images.
         * @summary Delete Image Job
         * @param {ImagesApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: ImagesApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.modelId, requestParameters.inferenceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a single image generation job, including the urls for the images generated.
         * @summary Get Single Image Job
         * @param {ImagesApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(requestParameters: ImagesApiFindOneRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InferenceEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(requestParameters.modelId, requestParameters.inferenceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generate an image by providing a text description. Generations usually take bettween 4-20 seconds per image. Total generation time depends on the number of `steps` and `noOfImages` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Single Image Job](https://reference.tryleap.ai/reference/inferencescontroller_findone-1) endpoint.
         * @summary Generate an Image
         * @param {ImagesApiGenerateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generate(requestParameters: ImagesApiGenerateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InferenceEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generate(requestParameters.modelId, requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a list of inference jobs for a specific model.
         * @summary List All Image Jobs
         * @param {ImagesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: ImagesApiListAllRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InferenceEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.modelId, requestParameters.onlyFinished, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ImagesApi - factory interface
 * @export
 */
export const ImagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ImagesApiFp(configuration)
    return {
        /**
         * Delete the image job and all related images.
         * @summary Delete Image Job
         * @param {ImagesApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: ImagesApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a single image generation job, including the urls for the images generated.
         * @summary Get Single Image Job
         * @param {ImagesApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: ImagesApiFindOneRequest, options?: AxiosRequestConfig): AxiosPromise<InferenceEntity> {
            return localVarFp.findOne(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate an image by providing a text description. Generations usually take bettween 4-20 seconds per image. Total generation time depends on the number of `steps` and `noOfImages` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Single Image Job](https://reference.tryleap.ai/reference/inferencescontroller_findone-1) endpoint.
         * @summary Generate an Image
         * @param {ImagesApiGenerateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generate(requestParameters: ImagesApiGenerateRequest, options?: AxiosRequestConfig): AxiosPromise<InferenceEntity> {
            return localVarFp.generate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of inference jobs for a specific model.
         * @summary List All Image Jobs
         * @param {ImagesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: ImagesApiListAllRequest, options?: AxiosRequestConfig): AxiosPromise<Array<InferenceEntity>> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for delete operation in ImagesApi.
 * @export
 * @interface ImagesApiDeleteRequest
 */
export type ImagesApiDeleteRequest = {
    
    /**
    * The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
    * @type {string}
    * @memberof ImagesApiDelete
    */
    readonly modelId: string
    
    /**
    * The ID of the image generation job to retrieve. This is the same ID that is returned when you submit a new image generation job.
    * @type {string}
    * @memberof ImagesApiDelete
    */
    readonly inferenceId: string
    
}

/**
 * Request parameters for findOne operation in ImagesApi.
 * @export
 * @interface ImagesApiFindOneRequest
 */
export type ImagesApiFindOneRequest = {
    
    /**
    * The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
    * @type {string}
    * @memberof ImagesApiFindOne
    */
    readonly modelId: string
    
    /**
    * The ID of the image generation job to retrieve. This is the same ID that is returned when you submit a new image generation job.
    * @type {string}
    * @memberof ImagesApiFindOne
    */
    readonly inferenceId: string
    
}

/**
 * Request parameters for generate operation in ImagesApi.
 * @export
 * @interface ImagesApiGenerateRequest
 */
export type ImagesApiGenerateRequest = {
    
    /**
    * The ID of the model to use to generate images. This can be a custom model, or a public model. To view the list of public models, visit: https://docs.tryleap.ai/public-models
    * @type {string}
    * @memberof ImagesApiGenerate
    */
    readonly modelId: string
    
} & CreateInferenceDto

/**
 * Request parameters for listAll operation in ImagesApi.
 * @export
 * @interface ImagesApiListAllRequest
 */
export type ImagesApiListAllRequest = {
    
    /**
    * The ID of the model to generate images. This can be a custom model or a public model. Visit: https://docs.tryleap.ai/public-models to view the list of public models.
    * @type {string}
    * @memberof ImagesApiListAll
    */
    readonly modelId: string
    
    /**
    * If set to true, only finished inferences will be returned. If set to false or not set, all inference jobs will be returned.
    * @type {boolean}
    * @memberof ImagesApiListAll
    */
    readonly onlyFinished?: boolean
    
    /**
    * The page to request.
    * @type {number}
    * @memberof ImagesApiListAll
    */
    readonly page?: number
    
    /**
    * The number of items to return per page.
    * @type {number}
    * @memberof ImagesApiListAll
    */
    readonly pageSize?: number
    
}

/**
 * ImagesApiGenerated - object-oriented interface
 * @export
 * @class ImagesApiGenerated
 * @extends {BaseAPI}
 */
export class ImagesApiGenerated extends BaseAPI {
    /**
     * Delete the image job and all related images.
     * @summary Delete Image Job
     * @param {ImagesApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApiGenerated
     */
    public delete(requestParameters: ImagesApiDeleteRequest, options?: AxiosRequestConfig) {
        return ImagesApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a single image generation job, including the urls for the images generated.
     * @summary Get Single Image Job
     * @param {ImagesApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApiGenerated
     */
    public findOne(requestParameters: ImagesApiFindOneRequest, options?: AxiosRequestConfig) {
        return ImagesApiFp(this.configuration).findOne(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generate an image by providing a text description. Generations usually take bettween 4-20 seconds per image. Total generation time depends on the number of `steps` and `noOfImages` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Single Image Job](https://reference.tryleap.ai/reference/inferencescontroller_findone-1) endpoint.
     * @summary Generate an Image
     * @param {ImagesApiGenerateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApiGenerated
     */
    public generate(requestParameters: ImagesApiGenerateRequest, options?: AxiosRequestConfig) {
        return ImagesApiFp(this.configuration).generate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of inference jobs for a specific model.
     * @summary List All Image Jobs
     * @param {ImagesApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApiGenerated
     */
    public listAll(requestParameters: ImagesApiListAllRequest, options?: AxiosRequestConfig) {
        return ImagesApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}