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
exports.instanceOfDomainListDetail = instanceOfDomainListDetail;
exports.DomainListDetailFromJSON = DomainListDetailFromJSON;
exports.DomainListDetailFromJSONTyped = DomainListDetailFromJSONTyped;
exports.DomainListDetailToJSON = DomainListDetailToJSON;
const DomainDetailData_1 = require("./DomainDetailData");
/**
 * Check if a given object implements the DomainListDetail interface.
 */
function instanceOfDomainListDetail(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function DomainListDetailFromJSON(json) {
    return DomainListDetailFromJSONTyped(json, false);
}
function DomainListDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'data': (json['data'].map(DomainDetailData_1.DomainDetailDataFromJSON)),
    };
}
function DomainListDetailToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'data': (value['data'].map(DomainDetailData_1.DomainDetailDataToJSON)),
    };
}
