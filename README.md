# quepasa-ai

## About

API for RAG retrieval, managing documents, files, and related operations including Telegram integration.

## Installation & Usage

Using npm:
```sh
npm install quepasa-ai
```

Using yarn:
```sh
yarn add quepasa-ai
```

## Getting Started
```typescript
import { DefaultApi, Configuration } from 'quepasa-ai';

const quepasa = new DefaultApi( new Configuration({
    accessToken: "YOUR_ACCESS_TOKEN"
}));
```

## Data API
### Upsert Documents
Insert new documents or update existing ones based on the ID.

```typescript
const domain = "default";
const doc_id = "llm";
let results = await quepasa.upsertDocuments({
    domain: domain,
    documents: [
        {
            // Required fields
            'id': doc_id, // string
            'url': "https://en.wikipedia.org/wiki/Large_language_model",

            'title': "Large language model",
            'language': "en", // two-char language code in lowercase
            'text': `
A large language model (LLM) is a computational model capable of language generation or other natural language processing tasks. As language models, LLMs acquire these abilities by learning statistical relationships from vast amounts of text during a self-supervised and semi-supervised training process.

The largest and most capable LLMs, as of August 2024, are artificial neural networks built with a decoder-only transformer-based architecture, which enables efficient processing and generation of large-scale text data. Modern models can be fine-tuned for specific tasks or can be guided by prompt engineering.
These models acquire predictive power regarding syntax, semantics, and ontologies inherent in human language corpora, but they also inherit inaccuracies and biases present in the data they are trained on.

Some notable LLMs are OpenAI's GPT series of models (e.g., GPT-3.5, GPT-4 and GPT-4o; used in ChatGPT and Microsoft Copilot), Google's Gemini (the latter of which is currently used in the chatbot of the same name), Meta's LLaMA family of models, IBM's Granite models initially released with Watsonx, Anthropic's Claude models, and Mistral AI's models.
            `.trim(),
            // 'html': "", # or send text
            // 'markdown': "", # or send markdown

            // Optional fields:
            // - 'keywords': document keywords, string, by default empty
            // - 'created_at': "2024-05-20T07:26:06Z", // document creation datetime, by default datetime of first creation of this document via API
            // - 'updated_at': "2024-05-20T07:26:06Z", // document last update datetime, by default datetime of last update of this document via API
        },
    ]
});
```

```typescript
const domain = "default";
const doc_id = "llm";
let results = await quepasa.upsertDocuments({
    domain: domain,
    documents: [
        {
            // Required fields
            'id': doc_id, // string
            'url': "https://en.wikipedia.org/wiki/Large_language_model",

            'title': "Large language model",
            'pages': [
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
A large language model (LLM) is a computational model capable of language generation or other natural language processing tasks. As language models, LLMs acquire these abilities by learning statistical relationships from vast amounts of text during a self-supervised and semi-supervised training process.
                    `.trim(),
                },
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
The largest and most capable LLMs, as of August 2024, are artificial neural networks built with a decoder-only transformer-based architecture, which enables efficient processing and generation of large-scale text data. Modern models can be fine-tuned for specific tasks or can be guided by prompt engineering.
These models acquire predictive power regarding syntax, semantics, and ontologies inherent in human language corpora, but they also inherit inaccuracies and biases present in the data they are trained on.
                    `.trim(),
                },
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
Some notable LLMs are OpenAI's GPT series of models (e.g., GPT-3.5, GPT-4 and GPT-4o; used in ChatGPT and Microsoft Copilot), Google's Gemini (the latter of which is currently used in the chatbot of the same name), Meta's LLaMA family of models, IBM's Granite models initially released with Watsonx, Anthropic's Claude models, and Mistral AI's models.
                    `.trim(),
                },
            ],

            // Optional fields:
            // - 'keywords': document keywords, string, by default empty
            // - 'created_at': "2024-05-20T07:26:06Z", // document creation datetime, by default datetime of first creation of this document via API
            // - 'updated_at': "2024-05-20T07:26:06Z", // document last update datetime, by default datetime of last update of this document via API
        },
    ]
});
```

### Replace Documents
Replace all documents in the specified domain with the provided documents.

```typescript
const domain = "default";
const doc_id = "llm";
let results = await quepasa.replaceDocuments({
    domain: domain,
    documents: [
        {
            // Required fields
            'id': doc_id, // string
            'url': "https://en.wikipedia.org/wiki/Large_language_model",

            'title': "Large language model",
            'language': "en", // two-char language code in lowercase
            'text': `
A large language model (LLM) is a computational model capable of language generation or other natural language processing tasks. As language models, LLMs acquire these abilities by learning statistical relationships from vast amounts of text during a self-supervised and semi-supervised training process.

The largest and most capable LLMs, as of August 2024, are artificial neural networks built with a decoder-only transformer-based architecture, which enables efficient processing and generation of large-scale text data. Modern models can be fine-tuned for specific tasks or can be guided by prompt engineering.
These models acquire predictive power regarding syntax, semantics, and ontologies inherent in human language corpora, but they also inherit inaccuracies and biases present in the data they are trained on.

Some notable LLMs are OpenAI's GPT series of models (e.g., GPT-3.5, GPT-4 and GPT-4o; used in ChatGPT and Microsoft Copilot), Google's Gemini (the latter of which is currently used in the chatbot of the same name), Meta's LLaMA family of models, IBM's Granite models initially released with Watsonx, Anthropic's Claude models, and Mistral AI's models.
            `.trim(),
            // 'html': "", # or send text
            // 'markdown': "", # or send markdown

            // Optional fields:
            // - 'keywords': document keywords, string, by default empty
            // - 'created_at': "2024-05-20T07:26:06Z", // document creation datetime, by default datetime of first creation of this document via API
            // - 'updated_at': "2024-05-20T07:26:06Z", // document last update datetime, by default datetime of last update of this document via API
        },
    ],
});
```

```typescript
const domain = "default";
const doc_id = "llm";
let results = await quepasa.replaceDocuments({
    domain: domain,
    documents: [
        {
            // Required fields
            'id': doc_id, // string
            'url': "https://en.wikipedia.org/wiki/Large_language_model",

            'title': "Large language model",
            'pages': [
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
A large language model (LLM) is a computational model capable of language generation or other natural language processing tasks. As language models, LLMs acquire these abilities by learning statistical relationships from vast amounts of text during a self-supervised and semi-supervised training process.
                    `.trim(),
                },
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
The largest and most capable LLMs, as of August 2024, are artificial neural networks built with a decoder-only transformer-based architecture, which enables efficient processing and generation of large-scale text data. Modern models can be fine-tuned for specific tasks or can be guided by prompt engineering.
These models acquire predictive power regarding syntax, semantics, and ontologies inherent in human language corpora, but they also inherit inaccuracies and biases present in the data they are trained on.
                    `.trim(),
                },
                {
                    'language': "en", // two-char language code in lowercase
                    'text': `
Some notable LLMs are OpenAI's GPT series of models (e.g., GPT-3.5, GPT-4 and GPT-4o; used in ChatGPT and Microsoft Copilot), Google's Gemini (the latter of which is currently used in the chatbot of the same name), Meta's LLaMA family of models, IBM's Granite models initially released with Watsonx, Anthropic's Claude models, and Mistral AI's models.
                    `.trim(),
                },
            ],

            // Optional fields:
            // - 'keywords': document keywords, string, by default empty
            // - 'created_at': "2024-05-20T07:26:06Z", // document creation datetime, by default datetime of first creation of this document via API
            // - 'updated_at': "2024-05-20T07:26:06Z", // document last update datetime, by default datetime of last update of this document via API
        },
    ]
});
```

### Upsert file
Upload and upsert file into the document system.

```typescript
const fs = require('fs').promises;
const { File } = require('buffer');

const domain = "default";
const filename = "3M_2015_10K.pdf";

const fileContent = await fs.readFile( "src/" + filename ); // Read the file from the file system
const file = new File([ fileContent ], filename, {type: "application/pdf"}); // Create a Blob from the file content

let results = await quepasa.upsertFile({
    domain: domain,
    file: file,
});
```

### List documents
List all document IDs in the specified domain.

```typescript
const domain = "default";

let results = await quepasa.listDocuments({
    domain: domain,
});
```

### Delete document or file
Remove a specific document by its domain and ID.

```typescript
const domain = "default";
const doc_id = "llm";
const filename = "3M_2015_10K.pdf";

let results = await quepasa.removeDocument({
    domain: domain,
    id: doc_id,
});

let results = await quepasa.removeFile({ // `removeFile` is an alias for `removeDocument`
    domain: domain,
    id: filename,
});
```

### Delete domain
Remove all documents from the specified domain.

```typescript
const domain = "default";

let results = await quepasa.removeDomain({
    domain: domain,
});
```

### Get document
Retrieve details of a document by its domain and ID.

```typescript
const domain = "default";
const doc_id = "llm";

let documentResult = await quepasa.getDocument({
    domain: "default",
    id: doc_id,
});
```

### Batch Operations API
This API allows you to retrieve the status of a batch using its batch ID. Some methods initiate operations without waiting for them to complete, returning a batch ID immediately. You can then check the status of the operation at a later time using the batch ID.

Each of the following methods that return a batch ID has the same parameters as their "wait-for-completion" counterparts:
- upsertDocumentsAsync
- replaceDocumentsAsync
- upsertFileAsync
- listDocumentsAsync
- removeDocumentAsync
- removeDomainAsync

#### Check Batch Status
To check the status of a batch operation, use the following method:
```typescript
const batchId = "1234567890.12345"
let result = await this.getBatchStatus({
    id: batchId
});
```

## Retrieve API
### Retrieve answer
Generate an answer based on your data.

```typescript
let results = await quepasa.retrieveAnswer({
    question: "What is LLM?",

    // [Optional] The name of a group of documents.
    domain: "default", // Or: ["default", "another"],
});
```

```typescript
let results = await quepasa.retrieveAnswer({
    question: "What is LLM?",

    // [Optional] This is the model that will generate answers to questions based on the retrieved search results.
    // Available models:
    // - gpt-3.5-turbo-16k-0613
    // - mistral:mistral-large-2402
    // - anthropic:claude-3-5-sonnet-20240620
    // - replicate:meta-llama-3-70b-instruct
    llm: "mistral:mistral-large-2402",
});
```

```typescript
let results = await quepasa.retrieveAnswer({
    question: "What is LLM?",

    // [Optional]: The prompt used for RAG, with placeholders like {{LANGUAGE}} for the language in which the question was asked, and {{SOURCES}} for listing the relevant chunks.
    prompt: `
You're a bot-assistant that answers the questions.

When answering the question, use the following rules:
- always answer in {{LANGUAGE}} language;
- use ONLY the information from the sources below;
- answer briefly in just a few sentences, strictly in accordance with the sources, and do not make any assumptions;
- reference the source if you use it in the answer, e.g. [#1] or [#2][#4];
- if there is no information on the question in the sources: say that you can't find the answer and ask the user to try to reformulate the question.

Sources:
{{SOURCES}}
    `.trim(),
});
```

```typescript
let results = await quepasa.retrieveAnswer({
    question: "What is LLM?",

    // [Optional] A hybrid ranking formula for documents, balancing two parameters: text for full-text search and semantic for semantic search. The format allows you to adjust the weight of each component.
    document_relevance_weights: {
        text: 1.0,
        semantic: 0.0
    },

    // [Optional] A hybrid ranking formula for document chunks, using the same two parameters as document_relevance_weights: text for full-text search and semantic for semantic search. This adjusts the relevance of different chunks of a document based on these weights.
    chunk_relevance_weights: {
        text: 1.0,
        semantic: 0.0
    },
});
```

### Retrieve chunks
Retrieve search results.

```typescript
let results = await quepasa.retrieveChunks({
    question: "What is LLM?",

    // [Optional] The name of a group of documents.
    domain: "default", // Or: ["default", "another"],
});
```

```typescript
let results = await quepasa.retrieveChunks({
    question: "What is LLM?",

    // [Optional] A hybrid ranking formula for documents, balancing two parameters: text for full-text search and semantic for semantic search. The format allows you to adjust the weight of each component.
    document_relevance_weights: {
        text: 1.0,
        semantic: 0.0
    },

    // [Optional] A hybrid ranking formula for document chunks, using the same two parameters as document_relevance_weights: text for full-text search and semantic for semantic search. This adjusts the relevance of different chunks of a document based on these weights.
    chunk_relevance_weights: {
        text: 1.0,
        semantic: 0.0
    },
});
```
