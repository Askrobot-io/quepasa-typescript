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
 * @interface DomainDetailData
 */
export interface DomainDetailData {
    /**
     * The name of a group of documents.
     * @type {string}
     * @memberof DomainDetailData
     */
    domain: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainDetailData
     */
    processedIds: Array<string>;
}

/**
 * Check if a given object implements the DomainDetailData interface.
 */
export function instanceOfDomainDetailData(value: object): value is DomainDetailData {
    if (!('domain' in value) || value['domain'] === undefined) return false;
    if (!('processedIds' in value) || value['processedIds'] === undefined) return false;
    return true;
}

export function DomainDetailDataFromJSON(json: any): DomainDetailData {
    return DomainDetailDataFromJSONTyped(json, false);
}

export function DomainDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDetailData {
    if (json == null) {
        return json;
    }
    return {

        'domain': json['domain'],
        'processedIds': json['processed_ids'],
    };
}

export function DomainDetailDataToJSON(value?: DomainDetailData | null): any {
    if (value == null) {
        return value;
    }
    return {

        'domain': value['domain'],
        'processed_ids': value['processedIds'],
    };
}