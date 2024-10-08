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
exports.instanceOfDocument = instanceOfDocument;
exports.DocumentFromJSON = DocumentFromJSON;
exports.DocumentFromJSONTyped = DocumentFromJSONTyped;
exports.DocumentToJSON = DocumentToJSON;
const DocumentPagesInner_1 = require("./DocumentPagesInner");
/**
 * Check if a given object implements the Document interface.
 */
function instanceOfDocument(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('url' in value) || value['url'] === undefined)
        return false;
    return true;
}
function DocumentFromJSON(json) {
    return DocumentFromJSONTyped(json, false);
}
function DocumentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'url': json['url'],
        'text': json['text'] == null ? undefined : json['text'],
        'html': json['html'] == null ? undefined : json['html'],
        'markdown': json['markdown'] == null ? undefined : json['markdown'],
        'pages': json['pages'] == null ? undefined : (json['pages'].map(DocumentPagesInner_1.DocumentPagesInnerFromJSON)),
        'language': json['language'] == null ? undefined : json['language'],
        'title': json['title'] == null ? undefined : json['title'],
        'keywords': json['keywords'] == null ? undefined : json['keywords'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}
function DocumentToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'url': value['url'],
        'text': value['text'],
        'html': value['html'],
        'markdown': value['markdown'],
        'pages': value['pages'] == null ? undefined : (value['pages'].map(DocumentPagesInner_1.DocumentPagesInnerToJSON)),
        'language': value['language'],
        'title': value['title'],
        'keywords': value['keywords'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}
