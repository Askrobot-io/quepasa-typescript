/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';

import type { RetrieveRequestUserInfo } from './RetrieveRequestUserInfo';
import {
    RetrieveRequestUserInfoFromJSON,
    RetrieveRequestUserInfoFromJSONTyped,
    RetrieveRequestUserInfoToJSON,
} from './RetrieveRequestUserInfo';

import type { RetrieveRelevanceWeights } from './RetrieveRelevanceWeights';
import {
    RetrieveRelevanceWeightsFromJSON,
    RetrieveRelevanceWeightsFromJSONTyped,
    RetrieveRelevanceWeightsToJSON,
} from './RetrieveRelevanceWeights';

import type { RetrieveFormulaRelevanceWeights } from './RetrieveFormulaRelevanceWeights';
import {
    RetrieveFormulaRelevanceWeightsFromJSON,
    RetrieveFormulaRelevanceWeightsFromJSONTyped,
    RetrieveFormulaRelevanceWeightsToJSON,
} from './RetrieveFormulaRelevanceWeights';

/**
 *
 * @export
 * @interface RetrieveChunksRequest
 */
export interface RetrieveChunksRequest {
    /**
     * Natural language query to retrieve or answer.
     * @type {string}
     * @memberof RetrieveChunksRequest
     */
    question: string;

    /**
     * The name of a group of documents.
     * @type {string|Array<string>}
     * @memberof RetrieveChunksRequest
     */
    domain?: string | Array<string>;

    /**
     * (Experimental) Specifies the type of chunk. Can be "text" for raw text chunks, "summary" for chunks that are summaries of raw text, or "all" to include both types.
     * @type {string}
     * @memberof RetrieveChunksRequest
     */
    kind?: string;

    /**
     * A hybrid ranking formula for documents, balancing two parameters: text for full-text search and semantic for semantic search. The format allows you to adjust the weight of each component.
     *
     * @type {RetrieveFormulaRelevanceWeights}
     * @memberof RetrieveChunksRequest
     */
    relevance_weights?: RetrieveFormulaRelevanceWeights;
    /**
     *
     * @type {RetrieveRelevanceWeights}
     * @memberof RetrieveChunksRequest
     */
    document_relevance_weights?: RetrieveRelevanceWeights;
    /**
     *
     * @type {RetrieveRelevanceWeights}
     * @memberof RetrieveChunksRequest
     */
    chunk_relevance_weights?: RetrieveRelevanceWeights;

    /**
     * A prompt template used by the reranking model to prioritize and reorder both documents and chunks based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    reranker_prompt?: string;
    /**
     * A prompt template used by the reranking model to prioritize and reorder documents based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    document_reranker_prompt?: string;
    /**
     * A prompt template used by the reranking model to prioritize and reorder chunks based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    chunk_reranker_prompt?: string;

    /**
     * User info to track requests.
     * @type {RetrieveRequestUserInfo}
     * @memberof RetrieveAnswerRequest
     */
    userInfo?: RetrieveRequestUserInfo;
}

/**
 * Check if a given object implements the RetrieveChunksRequest interface.
 */
export function instanceOfRetrieveChunksRequest(value: object): value is RetrieveChunksRequest {
    return true;
}

export function RetrieveChunksRequestFromJSON(json: any): RetrieveChunksRequest {
    return RetrieveChunksRequestFromJSONTyped(json, false);
}

export function RetrieveChunksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveChunksRequest {
    if (json == null) {
        return json;
    }
    return {
        'question': json['question'],
        'domain': json['domain'] == null ? undefined : json['domain'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'relevance_weights': json['relevance_weights'] == null ? undefined : RetrieveFormulaRelevanceWeightsFromJSON(json['relevance_weights']),
        'document_relevance_weights': json['document_relevance_weights'] == null ? undefined : RetrieveRelevanceWeightsFromJSON(json['document_relevance_weights']),
        'chunk_relevance_weights': json['chunk_relevance_weights'] == null ? undefined : RetrieveRelevanceWeightsFromJSON(json['chunk_relevance_weights']),
        'reranker_prompt': json['reranker_prompt'] == null ? undefined : json['reranker_prompt'],
        'document_reranker_prompt': json['document_reranker_prompt'] == null ? undefined : json['document_reranker_prompt'],
        'chunk_reranker_prompt': json['chunk_reranker_prompt'] == null ? undefined : json['chunk_reranker_prompt'],
        'userInfo': json['user_info'] == null ? undefined : RetrieveRequestUserInfoFromJSON(json['user_info']),
    };
}

export function RetrieveChunksRequestToJSON(value?: RetrieveChunksRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        'question': value['question'],
        'domain': value['domain'],
        'kind': value['kind'],
        'relevance_weights': RetrieveFormulaRelevanceWeightsToJSON(value['relevance_weights']),
        'document_relevance_weights': RetrieveRelevanceWeightsToJSON(value['document_relevance_weights']),
        'chunk_relevance_weights': RetrieveRelevanceWeightsToJSON(value['chunk_relevance_weights']),
        'reranker_prompt': value['reranker_prompt'],
        'document_reranker_prompt': value['document_reranker_prompt'],
        'chunk_reranker_prompt': value['chunk_reranker_prompt'],
        'user_info': RetrieveRequestUserInfoToJSON(value['userInfo']),
    };
}
