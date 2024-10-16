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
 *
 * @export
 * @interface CreatedBatchStatusData
 */
export interface CreatedBatchStatusData {
    /**
     * Batch ID
     * @type {string}
     * @memberof CreatedBatchStatusData
     */
    batchId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CreatedBatchStatusData
     */
    processedIds?: Array<string>;
}

/**
 * Check if a given object implements the CreatedBatchStatusData interface.
 */
export function instanceOfCreatedBatchStatusData(value: object): value is CreatedBatchStatusData {
    return true;
}

export function CreatedBatchStatusDataFromJSON(json: any): CreatedBatchStatusData {
    return CreatedBatchStatusDataFromJSONTyped(json, false);
}

export function CreatedBatchStatusDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedBatchStatusData {
    if (json == null) {
        return json;
    }
    return {

        'batchId': json['batch_id'],
        'processedIds': json['processed_ids'] == null ? undefined : json['processed_ids'],
    };
}

export function CreatedBatchStatusDataToJSON(value?: CreatedBatchStatusData | null): any {
    if (value == null) {
        return value;
    }
    return {

        'batch_id': value['batchId'],
        'processed_ids': value['processedIds'],
    };
}
