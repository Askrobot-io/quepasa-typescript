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

### Upsert Documents
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

### Replace Documents
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

### Upsert file
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
```typescript
const domain = "default";

let results = await quepasa.listDocuments({
    domain: domain,
});
```

### Delete document or file
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
```typescript
const domain = "default";

let results = await quepasa.removeDomain({
    domain: domain,
});
```

### Get document
```typescript
const domain = "default";
const doc_id = "llm";

let documentResult = await quepasa.getDocument({
    domain: "default",
    id: doc_id,
});
```

### Retrieve answer
```typescript
let results = await quepasa.retrieveAnswer({
    question: "What is LLM?",
    // domain: domain, // [Optional]
});
```

### Retrieve chunks
```typescript
let results = await quepasa.retrieveChunks({
    question: "What is LLM?",
    // domain: domain, // [Optional]
});
```
