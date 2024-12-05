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
import type { DomainDetailData } from './DomainDetailData';
import {
    DomainDetailDataFromJSON,
    DomainDetailDataFromJSONTyped,
    DomainDetailDataToJSON,
} from './DomainDetailData';

/**
 * 
 * @export
 * @interface DomainListDetail
 */
export interface DomainListDetail {
    /**
     * Status.
     * @type {string}
     * @memberof DomainListDetail
     */
    status: string;
    /**
     * 
     * @type {Array<DomainDetailData>}
     * @memberof DomainListDetail
     */
    data: Array<DomainDetailData>;
}

/**
 * Check if a given object implements the DomainListDetail interface.
 */
export function instanceOfDomainListDetail(value: object): value is DomainListDetail {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DomainListDetailFromJSON(json: any): DomainListDetail {
    return DomainListDetailFromJSONTyped(json, false);
}

export function DomainListDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainListDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': ((json['data'] as Array<any>).map(DomainDetailDataFromJSON)),
    };
}

export function DomainListDetailToJSON(value?: DomainListDetail | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'data': ((value['data'] as Array<any>).map(DomainDetailDataToJSON)),
    };
}
