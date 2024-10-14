"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreatedBatchStatusData = instanceOfCreatedBatchStatusData;
exports.CreatedBatchStatusDataFromJSON = CreatedBatchStatusDataFromJSON;
exports.CreatedBatchStatusDataFromJSONTyped = CreatedBatchStatusDataFromJSONTyped;
exports.CreatedBatchStatusDataToJSON = CreatedBatchStatusDataToJSON;
/**
 * Check if a given object implements the CreatedBatchStatusData interface.
 */
function instanceOfCreatedBatchStatusData(value) {
    return true;
}
function CreatedBatchStatusDataFromJSON(json) {
    return CreatedBatchStatusDataFromJSONTyped(json, false);
}
function CreatedBatchStatusDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'batchId': json['batch_id'],
        'processedIds': json['processed_ids'] == null ? undefined : json['processed_ids'],
    };
}
function CreatedBatchStatusDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'batch_id': value['batchId'],
        'processed_ids': value['processedIds'],
    };
}
