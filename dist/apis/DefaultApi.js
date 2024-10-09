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
     * List documents
     */
    async listDocuments(requestParameters, initOverrides) {
        const response = await this.listDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
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
     * Remove document
     */
    async removeDocument(requestParameters, initOverrides) {
        const response = await this.removeDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents
     */
    async replaceDocumentsRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling replaceDocuments().');
        }
        if (requestParameters['document'] == null) {
            throw new runtime.RequiredError('document', 'Required parameter "document" was null or undefined when calling replaceDocuments().');
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
            body: requestParameters['document'].map(index_1.DocumentToJSON),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Replace all documents in the specified domain with the provided documents.
     * Replace documents
     */
    async replaceDocuments(requestParameters, initOverrides) {
        const response = await this.replaceDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Remove all documents from the specified domain.
     * Reset documents
     */
    async resetDocumentsRaw(requestParameters, initOverrides) {
        if (requestParameters['domain'] == null) {
            throw new runtime.RequiredError('domain', 'Required parameter "domain" was null or undefined when calling resetDocuments().');
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
     * Reset documents
     */
    async resetDocuments(requestParameters, initOverrides) {
        const response = await this.resetDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
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
        if (requestParameters['document'] == null) {
            throw new runtime.RequiredError('document', 'Required parameter "document" was null or undefined when calling upsertDocuments().');
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
            body: requestParameters['document'].map(index_1.DocumentToJSON),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreatedBatchStatusFromJSON)(jsonValue));
    }
    /**
     * Insert new documents or update existing ones based on the ID.
     * Upsert documents
     */
    async upsertDocuments(requestParameters, initOverrides) {
        const response = await this.upsertDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Upload and upsert files into the document system.
     * Upsert files
     */
    async upsertFilesRaw(requestParameters, initOverrides) {
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
     * Upload and upsert files into the document system.
     * Upsert files
     */
    async upsertFiles(requestParameters, initOverrides) {
        const response = await this.upsertFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.DefaultApi = DefaultApi;