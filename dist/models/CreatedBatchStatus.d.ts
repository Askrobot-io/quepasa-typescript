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
import type { CreatedBatchStatusData } from './CreatedBatchStatusData';
/**
 *
 * @export
 * @interface CreatedBatchStatus
 */
export interface CreatedBatchStatus {
    /**
     * Status of the batch (e.g., "uploaded", "backlog", "in_progress", "done").
     * @type {string}
     * @memberof CreatedBatchStatus
     */
    status: string;
    /**
     *
     * @type {CreatedBatchStatusData}
     * @memberof CreatedBatchStatus
     */
    data: CreatedBatchStatusData;
}
/**
 * Check if a given object implements the CreatedBatchStatus interface.
 */
export declare function instanceOfCreatedBatchStatus(value: object): value is CreatedBatchStatus;
export declare function CreatedBatchStatusFromJSON(json: any): CreatedBatchStatus;
export declare function CreatedBatchStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedBatchStatus;
export declare function CreatedBatchStatusToJSON(value?: CreatedBatchStatus | null): any;
