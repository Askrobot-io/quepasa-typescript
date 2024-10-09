/**
 * QuePasa RAG SaaS API
 * API for RAG retrieval, managing documents, files, and related operations including Telegram integration.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RetrieveAnswerRequestUserInfo } from './RetrieveAnswerRequestUserInfo';
/**
 *
 * @export
 * @interface RetrieveAnswerRequest
 */
export interface RetrieveAnswerRequest {
    /**
     * Natural language query to retrieve or answer.
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    question?: string;
    /**
     *
     * @type {RetrieveAnswerRequestUserInfo}
     * @memberof RetrieveAnswerRequest
     */
    userInfo?: RetrieveAnswerRequestUserInfo;
}
/**
 * Check if a given object implements the RetrieveAnswerRequest interface.
 */
export declare function instanceOfRetrieveAnswerRequest(value: object): value is RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestFromJSON(json: any): RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestToJSON(value?: RetrieveAnswerRequest | null): any;
