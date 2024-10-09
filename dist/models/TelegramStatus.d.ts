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
/**
 *
 * @export
 * @interface TelegramStatus
 */
export interface TelegramStatus {
    /**
     * Status of the operation.
     * @type {string}
     * @memberof TelegramStatus
     */
    status: string;
}
/**
 * Check if a given object implements the TelegramStatus interface.
 */
export declare function instanceOfTelegramStatus(value: object): value is TelegramStatus;
export declare function TelegramStatusFromJSON(json: any): TelegramStatus;
export declare function TelegramStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramStatus;
export declare function TelegramStatusToJSON(value?: TelegramStatus | null): any;