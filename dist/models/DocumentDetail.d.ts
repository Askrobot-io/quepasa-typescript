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
import type { DocumentDetailData } from './DocumentDetailData';
/**
 *
 * @export
 * @interface DocumentDetail
 */
export interface DocumentDetail {
    /**
     * Status.
     * @type {string}
     * @memberof DocumentDetail
     */
    status: string;
    /**
     *
     * @type {DocumentDetailData}
     * @memberof DocumentDetail
     */
    data: DocumentDetailData;
}
/**
 * Check if a given object implements the DocumentDetail interface.
 */
export declare function instanceOfDocumentDetail(value: object): value is DocumentDetail;
export declare function DocumentDetailFromJSON(json: any): DocumentDetail;
export declare function DocumentDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentDetail;
export declare function DocumentDetailToJSON(value?: DocumentDetail | null): any;
