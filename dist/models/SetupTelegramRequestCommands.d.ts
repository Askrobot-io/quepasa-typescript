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
import type { SetupTelegramRequestCommandsStart } from './SetupTelegramRequestCommandsStart';
import type { SetupTelegramRequestCommandsAsk } from './SetupTelegramRequestCommandsAsk';
/**
 * Telegram bot commands.
 * @export
 * @interface SetupTelegramRequestCommands
 */
export interface SetupTelegramRequestCommands {
    /**
     *
     * @type {SetupTelegramRequestCommandsStart}
     * @memberof SetupTelegramRequestCommands
     */
    start?: SetupTelegramRequestCommandsStart;
    /**
     *
     * @type {SetupTelegramRequestCommandsAsk}
     * @memberof SetupTelegramRequestCommands
     */
    ask?: SetupTelegramRequestCommandsAsk;
}
/**
 * Check if a given object implements the SetupTelegramRequestCommands interface.
 */
export declare function instanceOfSetupTelegramRequestCommands(value: object): value is SetupTelegramRequestCommands;
export declare function SetupTelegramRequestCommandsFromJSON(json: any): SetupTelegramRequestCommands;
export declare function SetupTelegramRequestCommandsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetupTelegramRequestCommands;
export declare function SetupTelegramRequestCommandsToJSON(value?: SetupTelegramRequestCommands | null): any;
