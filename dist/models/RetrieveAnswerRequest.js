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
exports.instanceOfRetrieveAnswerRequest = instanceOfRetrieveAnswerRequest;
exports.RetrieveAnswerRequestFromJSON = RetrieveAnswerRequestFromJSON;
exports.RetrieveAnswerRequestFromJSONTyped = RetrieveAnswerRequestFromJSONTyped;
exports.RetrieveAnswerRequestToJSON = RetrieveAnswerRequestToJSON;
const RetrieveRequestUserInfo_1 = require("./RetrieveRequestUserInfo");
const RetrieveRelevanceWeights_1 = require("./RetrieveRelevanceWeights");
const RetrieveFormulaRelevanceWeights_1 = require("./RetrieveFormulaRelevanceWeights");
/**
 * Check if a given object implements the RetrieveAnswerRequest interface.
 */
function instanceOfRetrieveAnswerRequest(value) {
    return true;
}
function RetrieveAnswerRequestFromJSON(json) {
    return RetrieveAnswerRequestFromJSONTyped(json, false);
}
function RetrieveAnswerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'question': json['question'],
        'domain': json['domain'] == null ? undefined : json['domain'],
        'llm': json['llm'] == null ? undefined : json['llm'],
        'prompt': json['prompt'] == null ? undefined : json['prompt'],
        'answer_prompt_size': json['answer_prompt_size'] == null ? undefined : json['answer_prompt_size'],
        'prompt_total_size': json['prompt_total_size'] == null ? undefined : json['prompt_total_size'],
        'relevance_weights': json['relevance_weights'] == null ? undefined : (0, RetrieveFormulaRelevanceWeights_1.RetrieveFormulaRelevanceWeightsFromJSON)(json['relevance_weights']),
        'document_relevance_weights': json['document_relevance_weights'] == null ? undefined : (0, RetrieveRelevanceWeights_1.RetrieveRelevanceWeightsFromJSON)(json['document_relevance_weights']),
        'chunk_relevance_weights': json['chunk_relevance_weights'] == null ? undefined : (0, RetrieveRelevanceWeights_1.RetrieveRelevanceWeightsFromJSON)(json['chunk_relevance_weights']),
        'reranker_prompt': json['reranker_prompt'] == null ? undefined : json['reranker_prompt'],
        'document_reranker_prompt': json['document_reranker_prompt'] == null ? undefined : json['document_reranker_prompt'],
        'chunk_reranker_prompt': json['chunk_reranker_prompt'] == null ? undefined : json['chunk_reranker_prompt'],
        'userInfo': json['user_info'] == null ? undefined : (0, RetrieveRequestUserInfo_1.RetrieveRequestUserInfoFromJSON)(json['user_info']),
    };
}
function RetrieveAnswerRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'question': value['question'],
        'domain': value['domain'],
        'llm': value['llm'],
        'prompt': value['prompt'],
        'answer_prompt_size': value['answer_prompt_size'],
        'prompt_total_size': value['prompt_total_size'],
        'relevance_weights': (0, RetrieveFormulaRelevanceWeights_1.RetrieveFormulaRelevanceWeightsToJSON)(value['relevance_weights']),
        'document_relevance_weights': (0, RetrieveRelevanceWeights_1.RetrieveRelevanceWeightsToJSON)(value['document_relevance_weights']),
        'chunk_relevance_weights': (0, RetrieveRelevanceWeights_1.RetrieveRelevanceWeightsToJSON)(value['chunk_relevance_weights']),
        'reranker_prompt': value['reranker_prompt'],
        'document_reranker_prompt': value['document_reranker_prompt'],
        'chunk_reranker_prompt': value['chunk_reranker_prompt'],
        'user_info': (0, RetrieveRequestUserInfo_1.RetrieveRequestUserInfoToJSON)(value['userInfo']),
    };
}
