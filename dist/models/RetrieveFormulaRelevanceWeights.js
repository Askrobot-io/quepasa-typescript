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
exports.instanceOfRetrieveFormulaRelevanceWeights = instanceOfRetrieveFormulaRelevanceWeights;
exports.RetrieveFormulaRelevanceWeightsFromJSON = RetrieveFormulaRelevanceWeightsFromJSON;
exports.RetrieveFormulaRelevanceWeightsFromJSONTyped = RetrieveFormulaRelevanceWeightsFromJSONTyped;
exports.RetrieveFormulaRelevanceWeightsToJSON = RetrieveFormulaRelevanceWeightsToJSON;
/**
 * Check if a given object implements the RetrieveFormulaRelevanceWeights interface.
 */
function instanceOfRetrieveFormulaRelevanceWeights(value) {
    return true;
}
function RetrieveFormulaRelevanceWeightsFromJSON(json) {
    return RetrieveFormulaRelevanceWeightsFromJSONTyped(json, false);
}
function RetrieveFormulaRelevanceWeightsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'document': json['document'] == null ? undefined : json['document'],
        'chunk': json['chunk'] == null ? undefined : json['chunk'],
    };
}
function RetrieveFormulaRelevanceWeightsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'document': value['document'],
        'chunk': value['chunk'],
    };
}
