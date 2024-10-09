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
import type { ChunksDetailDataInner } from './ChunksDetailDataInner';
/**
 *
 * @export
 * @interface ChunksDetail
 */
export interface ChunksDetail {
    /**
     * Status.
     * @type {string}
     * @memberof ChunksDetail
     */
    status?: string;
    /**
     *
     * @type {Array<ChunksDetailDataInner>}
     * @memberof ChunksDetail
     */
    data?: Array<ChunksDetailDataInner>;
}
/**
 * Check if a given object implements the ChunksDetail interface.
 */
export declare function instanceOfChunksDetail(value: object): value is ChunksDetail;
export declare function ChunksDetailFromJSON(json: any): ChunksDetail;
export declare function ChunksDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunksDetail;
export declare function ChunksDetailToJSON(value?: ChunksDetail | null): any;