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
exports.instanceOfDocumentPagesInner = instanceOfDocumentPagesInner;
exports.DocumentPagesInnerFromJSON = DocumentPagesInnerFromJSON;
exports.DocumentPagesInnerFromJSONTyped = DocumentPagesInnerFromJSONTyped;
exports.DocumentPagesInnerToJSON = DocumentPagesInnerToJSON;
/**
 * Check if a given object implements the DocumentPagesInner interface.
 */
function instanceOfDocumentPagesInner(value) {
    if (!('text' in value) || value['text'] === undefined)
        return false;
    if (!('language' in value) || value['language'] === undefined)
        return false;
    return true;
}
function DocumentPagesInnerFromJSON(json) {
    return DocumentPagesInnerFromJSONTyped(json, false);
}
function DocumentPagesInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'text': json['text'],
        'language': json['language'],
    };
}
function DocumentPagesInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'text': value['text'],
        'language': value['language'],
    };
}