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
exports.instanceOfCreatedBatchStatus = instanceOfCreatedBatchStatus;
exports.CreatedBatchStatusFromJSON = CreatedBatchStatusFromJSON;
exports.CreatedBatchStatusFromJSONTyped = CreatedBatchStatusFromJSONTyped;
exports.CreatedBatchStatusToJSON = CreatedBatchStatusToJSON;
const CreatedBatchStatusData_1 = require("./CreatedBatchStatusData");
/**
 * Check if a given object implements the CreatedBatchStatus interface.
 */
function instanceOfCreatedBatchStatus(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function CreatedBatchStatusFromJSON(json) {
    return CreatedBatchStatusFromJSONTyped(json, false);
}
function CreatedBatchStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': (0, CreatedBatchStatusData_1.CreatedBatchStatusDataFromJSON)(json['data']),
    };
}
function CreatedBatchStatusToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, CreatedBatchStatusData_1.CreatedBatchStatusDataToJSON)(value['data']),
    };
}
