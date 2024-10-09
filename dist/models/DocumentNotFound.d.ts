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
/**
 *
 * @export
 * @interface DocumentNotFound
 */
export interface DocumentNotFound {
    /**
     * Status.
     * @type {string}
     * @memberof DocumentNotFound
     */
    status: string;
}
/**
 * Check if a given object implements the DocumentNotFound interface.
 */
export declare function instanceOfDocumentNotFound(value: object): value is DocumentNotFound;
export declare function DocumentNotFoundFromJSON(json: any): DocumentNotFound;
export declare function DocumentNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentNotFound;
export declare function DocumentNotFoundToJSON(value?: DocumentNotFound | null): any;