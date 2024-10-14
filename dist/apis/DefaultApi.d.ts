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
import * as runtime from '../runtime';
import type { AnswerDetail, BatchStatus, BatchStatusData, ChunksDetail, CreatedBatchStatus, Document, DocumentDetail, RetrieveAnswerRequest, SetupTelegramRequest, TelegramStatus } from '../models/index';
export interface GetBatchStatusRequest {
    id: string;
}
export interface GetDocumentRequest {
    domain: string;
    id: string;
}
export interface ListDocumentsRequest {
    domain: string;
}
export interface RemoveDocumentRequest {
    domain: string;
    id: string;
}
export interface ReplaceDocumentsRequest {
    domain: string;
    documents: Array<Document>;
}
export interface RemoveDomain {
    domain: string;
}
export interface RetrieveAnswerOperationRequest {
    retrieveAnswerRequest: RetrieveAnswerRequest;
}
export interface RetrieveChunksRequest {
    retrieveAnswerRequest: RetrieveAnswerRequest;
}
export interface SetupTelegramOperationRequest {
    setupTelegramRequest: SetupTelegramRequest;
}
export interface UpsertDocumentsRequest {
    domain: string;
    documents: Array<Document>;
}
export interface UpsertFileRequest {
    domain: string;
    file: Blob;
    language?: string;
}
/**
 *
 */
export declare class DefaultApi extends runtime.BaseAPI {
    /**
     * Retrieve the status of a batch using its batch ID.
     * Get batch status
     */
    getBatchStatusRaw(requestParameters: GetBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchStatus>>;
    /**
     * Retrieve the status of a batch using its batch ID.
     * Get batch status
     */
    getBatchStatus(requestParameters: GetBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatus>;
    /**
     * Wait for status of a batch
     */
    waitForBatch(createdBatchStatus: CreatedBatchStatus, intervalValue?: number, timeoutValue?: number): Promise<BatchStatus>;
    /**
     * Retrieve details of a document by its domain and ID.
     * Get document details
     */
    getDocumentRaw(requestParameters: GetDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentDetail>>;
    /**
     * Retrieve details of a document by its domain and ID.
     * Get document details
     */
    getDocument(requestParameters: GetDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentDetail>;
    /**
     * List all document IDs in the specified domain.
     * List documents
     */
    listDocumentsRaw(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * List all document IDs in the specified domain.
     * List documents, returns batch id to track operation status.
     */
    listDocumentsAsync(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * List all document IDs in the specified domain.
     * List documents, returns list of document ids for requested domain.
     */
    listDocumentsAndWait(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * List all document IDs in the specified domain.
     * List documents, returns list of document ids for requested domain.
     * (alias to listDocumentsAndWait)
     */
    listDocuments(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Remove a specific document by its domain and ID.
     * Remove document
     */
    removeDocumentRaw(requestParameters: RemoveDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns batch id to track operation status.
     */
    removeDocumentAsync(requestParameters: RemoveDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns list of removed document ids for requested domain.
     */
    removeDocumentAndWait(requestParameters: RemoveDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns list of removed document ids for requested domain.
     * (alias to removeDocumentAndWait)
     */
    removeDocument(requestParameters: RemoveDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Remove a specific file by its domain and ID.
     * Remove file, returns list of removed document ids for requested domain.
     * (alias to removeDocument)
     */
    removeFile(requestParameters: RemoveDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents
     */
    replaceDocumentsRaw(requestParameters: ReplaceDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns batch id to track operation status.
     */
    replaceDocumentsAsync(requestParameters: ReplaceDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns list of replaced document ids for requested domain.
     */
    replaceDocumentsAndWait(requestParameters: ReplaceDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns list of replaced document ids for requested domain.
     * (alias to replaceDocumentsAndWait)
     */
    replaceDocuments(requestParameters: ReplaceDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Remove all documents from the specified domain.
     * Remove domain
     */
    removeDomainRaw(requestParameters: RemoveDomain, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns batch id to track operation status.
     */
    removeDomainAsync(requestParameters: RemoveDomain, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns list of removed document ids for requested domain.
     */
    removeDomainAndWait(requestParameters: RemoveDomain, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns list of removed document ids for requested domain.
     * (alias to removeDomainAndWait)
     */
    removeDomain(requestParameters: RemoveDomain, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * This endpoint allows you to generate an answer based on your data.
     * Retrieve answers or search data
     */
    retrieveAnswerRaw(requestParameters: RetrieveAnswerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerDetail>>;
    /**
     * This endpoint allows you to generate an answer based on your data.
     * Retrieve answers or search data
     */
    retrieveAnswer(requestParameters: RetrieveAnswerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerDetail>;
    /**
     * This endpoint allows you to perform a search on your data.
     * Retrieve answers or search data
     */
    retrieveChunksRaw(requestParameters: RetrieveChunksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChunksDetail>>;
    /**
     * This endpoint allows you to perform a search on your data.
     * Retrieve answers or search data
     */
    retrieveChunks(requestParameters: RetrieveChunksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChunksDetail>;
    /**
     * Configure Telegram for notifications or integrations.
     * Setup Telegram integration
     */
    setupTelegramRaw(requestParameters: SetupTelegramOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TelegramStatus>>;
    /**
     * Configure Telegram for notifications or integrations.
     * Setup Telegram integration
     */
    setupTelegram(requestParameters: SetupTelegramOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TelegramStatus>;
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents
     */
    upsertDocumentsRaw(requestParameters: UpsertDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns batch id to track operation status.
     */
    upsertDocumentsAsync(requestParameters: UpsertDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns list of upserted document ids for requested domain.
     */
    upsertDocumentsAndWait(requestParameters: UpsertDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns list of upserted document ids for requested domain.
     * (alias to upsertDocumentsAndWait)
     */
    upsertDocuments(requestParameters: UpsertDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Upload and upsert file into the document system.
     * Upsert file
     */
    upsertFileRaw(requestParameters: UpsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedBatchStatus>>;
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns batch id to track operation status.
     */
    upsertFileAsync(requestParameters: UpsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedBatchStatus>;
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns list of upserted file ids for requested domain.
     */
    upsertFileAndWait(requestParameters: UpsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns list of upserted file ids for requested domain.
     * (alias to upsertFileAndWait)
     */
    upsertFile(requestParameters: UpsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchStatusData>;
}
