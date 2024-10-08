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
 * Telegram /start command.
 * @export
 * @interface SetupTelegramRequestCommandsStart
 */
export interface SetupTelegramRequestCommandsStart {
    /**
     * Menu label.
     * @type {string}
     * @memberof SetupTelegramRequestCommandsStart
     */
    name?: string;
    /**
     * Message details.
     * @type {string}
     * @memberof SetupTelegramRequestCommandsStart
     */
    message?: string;
}

/**
 * Check if a given object implements the SetupTelegramRequestCommandsStart interface.
 */
export function instanceOfSetupTelegramRequestCommandsStart(value: object): value is SetupTelegramRequestCommandsStart {
    return true;
}

export function SetupTelegramRequestCommandsStartFromJSON(json: any): SetupTelegramRequestCommandsStart {
    return SetupTelegramRequestCommandsStartFromJSONTyped(json, false);
}

export function SetupTelegramRequestCommandsStartFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetupTelegramRequestCommandsStart {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function SetupTelegramRequestCommandsStartToJSON(value?: SetupTelegramRequestCommandsStart | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'message': value['message'],
    };
}
