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
import type { SetupTelegramRequestCommands } from './SetupTelegramRequestCommands';
/**
 *
 * @export
 * @interface SetupTelegramRequest
 */
export interface SetupTelegramRequest {
    /**
     * Telegram bot token.
     * @type {string}
     * @memberof SetupTelegramRequest
     */
    token?: string;
    /**
     *
     * @type {SetupTelegramRequestCommands}
     * @memberof SetupTelegramRequest
     */
    commands?: SetupTelegramRequestCommands;
}
/**
 * Check if a given object implements the SetupTelegramRequest interface.
 */
export declare function instanceOfSetupTelegramRequest(value: object): value is SetupTelegramRequest;
export declare function SetupTelegramRequestFromJSON(json: any): SetupTelegramRequest;
export declare function SetupTelegramRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetupTelegramRequest;
export declare function SetupTelegramRequestToJSON(value?: SetupTelegramRequest | null): any;