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
import type { AnswerDetailDataLabeledLinksValue } from './AnswerDetailDataLabeledLinksValue';
import type { AnswerDetailDataLinksValue } from './AnswerDetailDataLinksValue';
/**
 *
 * @export
 * @interface AnswerDetailData
 */
export interface AnswerDetailData {
    /**
     * The answer generated in response to the query.
     * @type {string}
     * @memberof AnswerDetailData
     */
    answer?: string;
    /**
     * A list of references used in the generated answer.
     * @type {{ [key: string]: AnswerDetailDataLinksValue; }}
     * @memberof AnswerDetailData
     */
    links?: {
        [key: string]: AnswerDetailDataLinksValue;
    };
    /**
     * Answer formatted in Markdown, with links.
     * @type {string}
     * @memberof AnswerDetailData
     */
    markdown?: string;
    /**
     * References in Markdown format.
     * @type {{ [key: string]: AnswerDetailDataLabeledLinksValue; }}
     * @memberof AnswerDetailData
     */
    labeledLinks?: {
        [key: string]: AnswerDetailDataLabeledLinksValue;
    };
}
/**
 * Check if a given object implements the AnswerDetailData interface.
 */
export declare function instanceOfAnswerDetailData(value: object): value is AnswerDetailData;
export declare function AnswerDetailDataFromJSON(json: any): AnswerDetailData;
export declare function AnswerDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerDetailData;
export declare function AnswerDetailDataToJSON(value?: AnswerDetailData | null): any;