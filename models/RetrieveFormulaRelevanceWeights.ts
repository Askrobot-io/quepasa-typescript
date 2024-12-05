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
/**
 * Optional user info to track requests.
 * @export
 * @interface RetrieveFormulaRelevanceWeights
 */
export interface RetrieveFormulaRelevanceWeights {
    /**
     * The ranking weight assigned to the entire document. Adjust this value to influence the importance of document-level factors in the ranking.
     * @type {number}
     * @memberof RetrieveFormulaRelevanceWeights
     */
    document: number;
    /**
     * The ranking weight assigned to individual chunks of a document. Adjust this value to influence the importance of chunk-level factors in the ranking.
     * @type {number}
     * @memberof RetrieveFormulaRelevanceWeights
     */
    chunk: number;
}

/**
 * Check if a given object implements the RetrieveFormulaRelevanceWeights interface.
 */
export function instanceOfRetrieveFormulaRelevanceWeights(value: object): value is RetrieveFormulaRelevanceWeights {
    return true;
}

export function RetrieveFormulaRelevanceWeightsFromJSON(json: any): RetrieveFormulaRelevanceWeights {
    return RetrieveFormulaRelevanceWeightsFromJSONTyped(json, false);
}

export function RetrieveFormulaRelevanceWeightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveFormulaRelevanceWeights {
    if (json == null) {
        return json;
    }
    return {

        'text': json['text'] == null ? undefined : json['text'],
        'semantic': json['semantic'] == null ? undefined : json['semantic'],
    };
}

export function RetrieveFormulaRelevanceWeightsToJSON(value?: RetrieveFormulaRelevanceWeights | null): any {
    if (value == null) {
        return value;
    }
    return {

        'text': value['text'],
        'semantic': value['semantic'],
    };
}