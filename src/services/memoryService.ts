import { QdrantClient } from "@qdrant/js-client-rest";

export type MemoryContext = {
  retrieved: boolean;
  memorySource: "mock" | "qdrant" | null;
  memoryPreview?: string;
  configured: boolean;
  collection?: string;
};

const qdrantUrl = process.env.QDRANT_URL;
const qdrantCollection = process.env.QDRANT_COLLECTION;
const qdrantApiKey = process.env.QDRANT_API_KEY;

const isQdrantConfigured = Boolean(qdrantUrl && qdrantCollection);

const qdrantClient = isQdrantConfigured
  ? new QdrantClient({
      url: qdrantUrl,
      apiKey: qdrantApiKey || undefined
    })
  : null;

export async function retrieveMemory(userInput: string): Promise<MemoryContext> {
  if (userInput.length === 0) {
    return {
      retrieved: false,
      memorySource: null,
      configured: isQdrantConfigured
    };
  }

  if (!qdrantClient || !qdrantCollection) {
    return {
      retrieved: true,
      memorySource: "mock",
      memoryPreview: `Simulated relevant context for: ${userInput}`,
      configured: false
    };
  }

  return {
    retrieved: true,
    memorySource: "qdrant",
    memoryPreview: `Qdrant is configured for future retrieval: ${userInput}`,
    configured: true,
    collection: qdrantCollection
  };
}
