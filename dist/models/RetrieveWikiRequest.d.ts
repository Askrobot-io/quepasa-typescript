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
import type { RetrieveRequestUserInfo } from './RetrieveRequestUserInfo';
/**
 *
 * @export
 * @interface RetrieveWikiRequest
 */
export interface RetrieveWikiRequest {
    /**
     * Entity type.
     * @type {string}
     * @memberof RetrieveWikiRequest
     */
    type?: string;
    /**
     * Entity value.
     * @type {string}
     * @memberof RetrieveWikiRequest
     */
    value?: string;
    /**
     * The name of a group of documents.
     * @type {string}
     * @memberof RetrieveWikiRequest
     */
    domain?: string;
    /**
     * This is the model that will generate answers to questions based on the retrieved search results.
     * Options:
     * - gpt-3.5-turbo-16k-0613
     * - mistral:mistral-large-2402
     * - anthropic:claude-3-5-sonnet-20240620
     * - replicate:meta-llama-3-70b-instruct
     *
     * @type {string}
     * @memberof RetrieveWikiRequest
     */
    llm?: string;
    /**
     * The prompt used for RAG, with placeholders like {{LANGUAGE}} for the language in which the question was asked, and {{SOURCES}} for listing the relevant chunks.
     *
     * @type {string}
     * @memberof RetrieveWikiRequest
     */
    prompt?: string;
    /**
     * The length of the response in tokens. This parameter defines the maximum number of tokens that the model can use to generate its answer.
     * @type {number}
     * @memberof RetrieveWikiRequest
     */
    answerPromptSize?: number;
    /**
     * The maximum length of the prompt in tokens. This sets the upper limit for how many tokens can be used for the combined input to the model, including the user's query and the retrieved document context.
     * @type {number}
     * @memberof RetrieveWikiRequest
     */
    promptTotalSize?: number;
    /**
     *
     * @type {RetrieveRequestUserInfo}
     * @memberof RetrieveWikiRequest
     */
    userInfo?: RetrieveRequestUserInfo;
}
/**
 * Check if a given object implements the RetrieveWikiRequest interface.
 */
export declare function instanceOfRetrieveWikiRequest(value: object): value is RetrieveWikiRequest;
export declare function RetrieveWikiRequestFromJSON(json: any): RetrieveWikiRequest;
export declare function RetrieveWikiRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveWikiRequest;
export declare function RetrieveWikiRequestToJSON(value?: RetrieveWikiRequest | null): any;
