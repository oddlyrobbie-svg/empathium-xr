import type { Request, Response } from "express";

/**
 * Minimal Guardian controller.
 *
 * Flow:
 * 1. Accept user input.
 * 2. Simulate request-scoped memory retrieval.
 * 3. Return only request-scoped data.
 * 4. Persist nothing.
 * 5. Mark the response as stateless.
 *
 * No database or AI provider is used yet.
 */
export function postGuardian(req: Request, res: Response): void {
  const userInput = typeof req.body?.message === "string" ? req.body.message : "";

  const retrievedMemory = {
    source: "placeholder",
    scope: "request-only",
    items: [] as string[]
  };

  res.json({
    stateless: true,
    persisted: false,
    guardian: {
      mode: "placeholder",
      response:
        userInput.length > 0
          ? "I received your message. This response used only request-scoped placeholder context."
          : "Send a message field to test the stateless Guardian flow."
    },
    request: {
      userInput
    },
    memory: retrievedMemory
  });
}
