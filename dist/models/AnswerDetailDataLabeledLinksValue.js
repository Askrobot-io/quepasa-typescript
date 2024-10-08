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
exports.instanceOfAnswerDetailDataLabeledLinksValue = instanceOfAnswerDetailDataLabeledLinksValue;
exports.AnswerDetailDataLabeledLinksValueFromJSON = AnswerDetailDataLabeledLinksValueFromJSON;
exports.AnswerDetailDataLabeledLinksValueFromJSONTyped = AnswerDetailDataLabeledLinksValueFromJSONTyped;
exports.AnswerDetailDataLabeledLinksValueToJSON = AnswerDetailDataLabeledLinksValueToJSON;
/**
 * Check if a given object implements the AnswerDetailDataLabeledLinksValue interface.
 */
function instanceOfAnswerDetailDataLabeledLinksValue(value) {
    return true;
}
function AnswerDetailDataLabeledLinksValueFromJSON(json) {
    return AnswerDetailDataLabeledLinksValueFromJSONTyped(json, false);
}
function AnswerDetailDataLabeledLinksValueFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'label': json['label'] == null ? undefined : json['label'],
    };
}
function AnswerDetailDataLabeledLinksValueToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'label': value['label'],
    };
}
