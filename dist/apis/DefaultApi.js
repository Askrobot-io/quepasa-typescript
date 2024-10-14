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
exports.DefaultApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class DefaultApi extends runtime.BaseAPI {
    /**
     * Retrieve the status of a batch using its batch ID.
     * Get batch status
     */
    async getBatchStatusRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getBatchStatus().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/batches/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BatchStatusFromJSON)(jsonValue));
    }
    /**
     * Retrieve the status of a batch using its batch ID.
     * Get batch status
     */
    async getBatchStatus(requestParameters, initOverrides) {
        const response = await this.getBatchStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Wait for status of a batch
     */
    async waitForBatch(createdBatchStatus, intervalValue = 10000, timeoutValue = 600000) {
        return new Promise((resolve, reject) => {
            let interval = setInterval(async () => {
                try {
                    let result = await this.getBatchStatus({ id: createdBatchStatus.data.batchId + "" });
                    if (result.status === "Batch state: done") {
                        clearTimeout(timeout);
                        clearInterval(interval);
                        resolve(result); // Resolve the promise with the result when batch is done
                    }
                }
                catch (error) {
                    clearTimeout(timeout);
                    clearInterval(interval);
                    reject({
                        error: error
                    }); // Reject the promise if an error occurs
                }
            }, intervalValue);
            let timeout = setTimeout(async () => {
                clearTimeout(timeout);
                clearInterval(interval);
                reject({
                    error: "waitForBatch timeout",
                    batchId: createdBatchStatus.data.batchId + "",
                });
            }, timeoutValue);
        });
    }
    /**
     * Retrieve details of a document by its domain and ID.
     * Get document details
     */
    async getDocumentRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling getDocument().');
        }
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getDocument().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}/{id}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.DocumentDetailFromJSON)(jsonValue));
    }
    /**
     * Retrieve details of a document by its domain and ID.
     * Get document details
     */
    async getDocument(requestParameters, initOverrides) {
        const response = await this.getDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * List all document IDs in the specified domain.
     * List documents
     */
    async listDocumentsRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling listDocuments().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * List all document IDs in the specified domain.
     * List documents, returns batch id to track operation status.
     */
    async listDocumentsAsync(requestParameters, initOverrides) {
        const response = await this.listDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * List all document IDs in the specified domain.
     * List documents, returns list of document ids for requested domain.
     */
    async listDocumentsAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.listDocumentsAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * List all document IDs in the specified domain.
     * List documents, returns list of document ids for requested domain.
     * (alias to listDocumentsAndWait)
     */
    async listDocuments(requestParameters, initOverrides) {
        return await this.listDocumentsAndWait(requestParameters, initOverrides);
    }
    /**
     * Remove a specific document by its domain and ID.
     * Remove document
     */
    async removeDocumentRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling removeDocument().');
        }
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling removeDocument().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}/{id}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns batch id to track operation status.
     */
    async removeDocumentAsync(requestParameters, initOverrides) {
        const response = await this.removeDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns list of removed document ids for requested domain.
     */
    async removeDocumentAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.removeDocumentAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * Remove a specific document by its domain and ID.
     * Remove document, returns list of removed document ids for requested domain.
     * (alias to removeDocumentAndWait)
     */
    async removeDocument(requestParameters, initOverrides) {
        return await this.removeDocumentAndWait(requestParameters, initOverrides);
    }
    /**
     * Remove a specific file by its domain and ID.
     * Remove file, returns list of removed document ids for requested domain.
     * (alias to removeDocument)
     */
    async removeFile(requestParameters, initOverrides) {
        return await this.removeDocument(requestParameters, initOverrides);
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents
     */
    async replaceDocumentsRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling replaceDocuments().');
        }
        if (requestParameters['documents'] == null) {
            throw new runtime.RequiredError('documents', 'Required parameter "document" was null or undefined when calling replaceDocuments().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['documents'].map(index_1.DocumentToJSON),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns batch id to track operation status.
     */
    async replaceDocumentsAsync(requestParameters, initOverrides) {
        const response = await this.replaceDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns list of replaced document ids for requested domain.
     */
    async replaceDocumentsAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.replaceDocumentsAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents, returns list of replaced document ids for requested domain.
     * (alias to replaceDocumentsAndWait)
     */
    async replaceDocuments(requestParameters, initOverrides) {
        return await this.replaceDocumentsAndWait(requestParameters, initOverrides);
    }
    /**
     * Remove all documents from the specified domain.
     * Remove domain
     */
    async removeDomainRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling removeDomain().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns batch id to track operation status.
     */
    async removeDomainAsync(requestParameters, initOverrides) {
        const response = await this.removeDomainRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns list of removed document ids for requested domain.
     */
    async removeDomainAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.removeDomainAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * Remove all documents from the specified domain.
     * Remove domain, returns list of removed document ids for requested domain.
     * (alias to removeDomainAndWait)
     */
    async removeDomain(requestParameters, initOverrides) {
        return await this.removeDomainAndWait(requestParameters, initOverrides);
    }
    /**
     * This endpoint allows you to generate an answer based on your data.
     * Retrieve answers or search data
     */
    async retrieveAnswerRaw(requestParameters, initOverrides) {
        if (requestParameters['retrieveAnswerRequest'] == null) {
            throw new runtime.RequiredError('retrieveAnswerRequest', 'Required parameter "retrieveAnswerRequest" was null or undefined when calling retrieveAnswer().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/retrieve/answer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.RetrieveAnswerRequestToJSON)(requestParameters['retrieveAnswerRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AnswerDetailFromJSON)(jsonValue));
    }
    /**
     * This endpoint allows you to generate an answer based on your data.
     * Retrieve answers or search data
     */
    async retrieveAnswer(requestParameters, initOverrides) {
        const response = await this.retrieveAnswerRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * This endpoint allows you to perform a search on your data.
     * Retrieve answers or search data
     */
    async retrieveChunksRaw(requestParameters, initOverrides) {
        if (requestParameters['retrieveAnswerRequest'] == null) {
            throw new runtime.RequiredError('retrieveAnswerRequest', 'Required parameter "retrieveAnswerRequest" was null or undefined when calling retrieveChunks().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/retrieve/chunks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.RetrieveAnswerRequestToJSON)(requestParameters['retrieveAnswerRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChunksDetailFromJSON)(jsonValue));
    }
    /**
     * This endpoint allows you to perform a search on your data.
     * Retrieve answers or search data
     */
    async retrieveChunks(requestParameters, initOverrides) {
        const response = await this.retrieveChunksRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Configure Telegram for notifications or integrations.
     * Setup Telegram integration
     */
    async setupTelegramRaw(requestParameters, initOverrides) {
        if (requestParameters['setupTelegramRequest'] == null) {
            throw new runtime.RequiredError('setupTelegramRequest', 'Required parameter "setupTelegramRequest" was null or undefined when calling setupTelegram().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/telegram`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.SetupTelegramRequestToJSON)(requestParameters['setupTelegramRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TelegramStatusFromJSON)(jsonValue));
    }
    /**
     * Configure Telegram for notifications or integrations.
     * Setup Telegram integration
     */
    async setupTelegram(requestParameters, initOverrides) {
        const response = await this.setupTelegramRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents
     */
    async upsertDocumentsRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling upsertDocuments().');
        }
        if (requestParameters['documents'] == null) {
            throw new runtime.RequiredError('documents', 'Required parameter "document" was null or undefined when calling upsertDocuments().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/upload/data/documents/{domain}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['documents'].map(index_1.DocumentToJSON),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns batch id to track operation status.
     */
    async upsertDocumentsAsync(requestParameters, initOverrides) {
        const response = await this.upsertDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns list of upserted document ids for requested domain.
     */
    async upsertDocumentsAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.upsertDocumentsAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents, returns list of upserted document ids for requested domain.
     * (alias to upsertDocumentsAndWait)
     */
    async upsertDocuments(requestParameters, initOverrides) {
        return await this.upsertDocumentsAndWait(requestParameters, initOverrides);
    }
    /**
     * Upload and upsert file into the document system.
     * Upsert file
     */
    async upsertFileRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling upsertFiles().');
        }
        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError('file', 'Required parameter "file" was null or undefined when calling upsertFiles().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);
        let formParams;
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new URLSearchParams();
        }
        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file']);
        }
        if (requestParameters['language'] != null) {
            formParams.append('language', requestParameters['language']);
        }
        const response = await this.request({
            path: `/upload/data/files/{domain}`.replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters['domain']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns batch id to track operation status.
     */
    async upsertFileAsync(requestParameters, initOverrides) {
        const response = await this.upsertFileRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns list of upserted file ids for requested domain.
     */
    async upsertFileAndWait(requestParameters, initOverrides) {
        const createdBatchStatus = await this.upsertFileAsync(requestParameters, initOverrides);
        const batchStatus = await this.waitForBatch(createdBatchStatus);
        if (batchStatus['data'] == null) {
            throw new Error('Response returned an "data" that was null or undefined.');
        }
        return batchStatus['data'];
    }
    /**
     * Upload and upsert file into the document system.
     * Upsert file, returns list of upserted file ids for requested domain.
     * (alias to upsertFileAndWait)
     */
    async upsertFile(requestParameters, initOverrides) {
        return await this.upsertFileAndWait(requestParameters, initOverrides);
    }
}
exports.DefaultApi = DefaultApi;
