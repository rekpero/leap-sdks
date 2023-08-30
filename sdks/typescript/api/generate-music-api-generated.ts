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
import { CreateMusicgenInferenceDto } from '../models';
// @ts-ignore
import { MusicgenInferenceEntity } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GenerateMusicApi - axios parameter creator
 * @export
 */
export const GenerateMusicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generate music by providing a text description. Generations usually take bettween 1-3 minutes. Total generation time depends on the `duration` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Music Generation Job](https://reference.tryleap.ai/reference/musiccontroller_findoneaudio) endpoint.
         * @summary Generate Music
         * @param {CreateMusicgenInferenceDto} createMusicgenInferenceDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAudio: async (createMusicgenInferenceDto: CreateMusicgenInferenceDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createMusicgenInferenceDto' is not null or undefined
            assertParamExists('createAudio', 'createMusicgenInferenceDto', createMusicgenInferenceDto)
            const localVarPath = `/api/v1/music`;
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
                requestBody: createMusicgenInferenceDto,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createMusicgenInferenceDto, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all music generation jobs for a workspace.
         * @summary List Music Generation Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllAudio: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/music`;
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
         * Get a specific music generation job.
         * @summary Get a Music Generation Job
         * @param {string} inferenceId The ID of the music generation job to retrieve. This is the same ID returned when you submit a job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneAudio: async (inferenceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inferenceId' is not null or undefined
            assertParamExists('findOneAudio', 'inferenceId', inferenceId)
            const localVarPath = `/api/v1/music/{inferenceId}`
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
 * GenerateMusicApi - functional programming interface
 * @export
 */
export const GenerateMusicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GenerateMusicApiAxiosParamCreator(configuration)
    return {
        /**
         * Generate music by providing a text description. Generations usually take bettween 1-3 minutes. Total generation time depends on the `duration` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Music Generation Job](https://reference.tryleap.ai/reference/musiccontroller_findoneaudio) endpoint.
         * @summary Generate Music
         * @param {GenerateMusicApiCreateAudioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAudio(requestParameters: GenerateMusicApiCreateAudioRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MusicgenInferenceEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAudio(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all music generation jobs for a workspace.
         * @summary List Music Generation Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllAudio(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MusicgenInferenceEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAllAudio(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a specific music generation job.
         * @summary Get a Music Generation Job
         * @param {GenerateMusicApiFindOneAudioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOneAudio(requestParameters: GenerateMusicApiFindOneAudioRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MusicgenInferenceEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOneAudio(requestParameters.inferenceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GenerateMusicApi - factory interface
 * @export
 */
export const GenerateMusicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GenerateMusicApiFp(configuration)
    return {
        /**
         * Generate music by providing a text description. Generations usually take bettween 1-3 minutes. Total generation time depends on the `duration` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Music Generation Job](https://reference.tryleap.ai/reference/musiccontroller_findoneaudio) endpoint.
         * @summary Generate Music
         * @param {GenerateMusicApiCreateAudioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAudio(requestParameters: GenerateMusicApiCreateAudioRequest, options?: AxiosRequestConfig): AxiosPromise<MusicgenInferenceEntity> {
            return localVarFp.createAudio(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all music generation jobs for a workspace.
         * @summary List Music Generation Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllAudio(options?: AxiosRequestConfig): AxiosPromise<Array<MusicgenInferenceEntity>> {
            return localVarFp.findAllAudio(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a specific music generation job.
         * @summary Get a Music Generation Job
         * @param {GenerateMusicApiFindOneAudioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneAudio(requestParameters: GenerateMusicApiFindOneAudioRequest, options?: AxiosRequestConfig): AxiosPromise<MusicgenInferenceEntity> {
            return localVarFp.findOneAudio(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAudio operation in GenerateMusicApi.
 * @export
 * @interface GenerateMusicApiCreateAudioRequest
 */
export type GenerateMusicApiCreateAudioRequest = {
    
} & CreateMusicgenInferenceDto

/**
 * Request parameters for findOneAudio operation in GenerateMusicApi.
 * @export
 * @interface GenerateMusicApiFindOneAudioRequest
 */
export type GenerateMusicApiFindOneAudioRequest = {
    
    /**
    * The ID of the music generation job to retrieve. This is the same ID returned when you submit a job.
    * @type {string}
    * @memberof GenerateMusicApiFindOneAudio
    */
    readonly inferenceId: string
    
}

/**
 * GenerateMusicApiGenerated - object-oriented interface
 * @export
 * @class GenerateMusicApiGenerated
 * @extends {BaseAPI}
 */
export class GenerateMusicApiGenerated extends BaseAPI {
    /**
     * Generate music by providing a text description. Generations usually take bettween 1-3 minutes. Total generation time depends on the `duration` you select. This endpoint will submit the generation job and return immediately. To retrieve the results you must provide a webhook URL or query/poll the [Get a Music Generation Job](https://reference.tryleap.ai/reference/musiccontroller_findoneaudio) endpoint.
     * @summary Generate Music
     * @param {GenerateMusicApiCreateAudioRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerateMusicApiGenerated
     */
    public createAudio(requestParameters: GenerateMusicApiCreateAudioRequest, options?: AxiosRequestConfig) {
        return GenerateMusicApiFp(this.configuration).createAudio(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all music generation jobs for a workspace.
     * @summary List Music Generation Jobs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerateMusicApiGenerated
     */
    public findAllAudio(options?: AxiosRequestConfig) {
        return GenerateMusicApiFp(this.configuration).findAllAudio(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a specific music generation job.
     * @summary Get a Music Generation Job
     * @param {GenerateMusicApiFindOneAudioRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerateMusicApiGenerated
     */
    public findOneAudio(requestParameters: GenerateMusicApiFindOneAudioRequest, options?: AxiosRequestConfig) {
        return GenerateMusicApiFp(this.configuration).findOneAudio(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}