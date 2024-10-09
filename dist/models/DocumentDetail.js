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
exports.instanceOfDocumentDetail = instanceOfDocumentDetail;
exports.DocumentDetailFromJSON = DocumentDetailFromJSON;
exports.DocumentDetailFromJSONTyped = DocumentDetailFromJSONTyped;
exports.DocumentDetailToJSON = DocumentDetailToJSON;
const DocumentDetailData_1 = require("./DocumentDetailData");
/**
 * Check if a given object implements the DocumentDetail interface.
 */
function instanceOfDocumentDetail(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function DocumentDetailFromJSON(json) {
    return DocumentDetailFromJSONTyped(json, false);
}
function DocumentDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': (0, DocumentDetailData_1.DocumentDetailDataFromJSON)(json['data']),
    };
}
function DocumentDetailToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (0, DocumentDetailData_1.DocumentDetailDataToJSON)(value['data']),
    };
}