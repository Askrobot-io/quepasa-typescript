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
import type { RetrieveRequestUserInfo } from './RetrieveRequestUserInfo';
import type { RetrieveRelevanceWeights } from './RetrieveRelevanceWeights';
import type { RetrieveFormulaRelevanceWeights } from './RetrieveFormulaRelevanceWeights';
/**
 *
 * @export
 * @interface RetrieveAnswerRequest
 */
export interface RetrieveAnswerRequest {
    /**
     * Natural language query to retrieve or answer.
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    question: string;
    /**
     * The name of a group of documents.
     * @type {string|Array<string>}
     * @memberof RetrieveAnswerRequest
     */
    domain?: string | Array<string>;
    /**
     * This is the model that will generate answers to questions based on the retrieved search results.
     * Options:
     * - gpt-3.5-turbo-16k-0613
     * - mistral:mistral-large-2402
     * - anthropic:claude-3-5-sonnet-20240620
     * - replicate:meta-llama-3-70b-instruct
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    llm?: string;
    /**
     * The prompt used for RAG, with placeholders like {{LANGUAGE}} for the language in which the question was asked, and {{SOURCES}} for listing the relevant chunks.
     * For example
     * ```plaintext
     * You're a bot-assistant that answers the questions.
     *
     * When answering the question, use the following rules:
     * - always answer in {{LANGUAGE}} language;
     * - use ONLY the information from the sources below;
     * - answer briefly in just a few sentences, strictly in accordance with the sources, and do not make any assumptions;
     * - reference the source if you use it in the answer, e.g. [#1] or [#2][#4];
     * - if there is no information on the question in the sources: say that you can't find the answer and ask the user to try to reformulate the question.
     *
     * Sources:
     * {{SOURCES}}
     * ```
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    prompt?: string;
    /**
     * The length of the response in tokens. This parameter defines the maximum number of tokens that the model can use to generate its answer.
     * @type {number}
     * @memberof RetrieveAnswerRequest
     */
    answer_prompt_size?: number;
    /**
     * The maximum length of the prompt in tokens. This sets the upper limit for how many tokens can be used for the combined input to the model, including the user's query and the retrieved document context.
     * Default: 8110
     * @type {number}
     * @memberof RetrieveAnswerRequest
     */
    prompt_total_size?: number;
    /**
     * A hybrid ranking formula for documents, balancing two parameters: text for full-text search and semantic for semantic search. The format allows you to adjust the weight of each component.
     *
     * @type {RetrieveFormulaRelevanceWeights}
     * @memberof RetrieveAnswerRequest
     */
    relevance_weights?: RetrieveFormulaRelevanceWeights;
    /**
     *
     * @type {RetrieveRelevanceWeights}
     * @memberof RetrieveAnswerRequest
     */
    document_relevance_weights?: RetrieveRelevanceWeights;
    /**
     *
     * @type {RetrieveRelevanceWeights}
     * @memberof RetrieveAnswerRequest
     */
    chunk_relevance_weights?: RetrieveRelevanceWeights;
    /**
     * A prompt template used by the reranking model to prioritize and reorder both documents and chunks based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    reranker_prompt?: string;
    /**
     * A prompt template used by the reranking model to prioritize and reorder documents based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    document_reranker_prompt?: string;
    /**
     * A prompt template used by the reranking model to prioritize and reorder chunks based on their relevance to a query.
     * This prompt guides the model in assessing the importance of each document and refining the ranking output.
     *
     * @type {string}
     * @memberof RetrieveAnswerRequest
     */
    chunk_reranker_prompt?: string;
    /**
     * User info to track requests.
     * @type {RetrieveRequestUserInfo}
     * @memberof RetrieveAnswerRequest
     */
    userInfo?: RetrieveRequestUserInfo;
}
/**
 * Check if a given object implements the RetrieveAnswerRequest interface.
 */
export declare function instanceOfRetrieveAnswerRequest(value: object): value is RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestFromJSON(json: any): RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveAnswerRequest;
export declare function RetrieveAnswerRequestToJSON(value?: RetrieveAnswerRequest | null): any;
