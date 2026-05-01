import type { Request, Response } from "express";
import { retrieveMemory } from "../services/memoryService";

/**
 * Minimal Guardian mock controller.
 *
 * Phase 1 boundary rule:
 * - Accept user input.
 * - Retrieve request-scoped context through memoryService.
 * - Do not persist data.
 * - Do not call an AI provider.
 */
export async function postGuardian(req: Request, res: Response): Promise<void> {
  const userInput = typeof req.body?.message === "string" ? req.body.message : "";
  const context = await retrieveMemory(userInput);

  res.json({
    guardian: {
      mode: "mock",
      state: "stateless",
      input: userInput,
      response:
        userInput.length > 0
          ? "I received your message. This Phase 1 mock response is stateless."
          : "Send a message field to test the Phase 1 mock Guardian flow.",
      context,
      persistence: {
        persisted: false,
        reason: "No persistence occurs in Phase 1 mock mode."
      },
      principles: [
        "protect autonomy",
        "stay transparent",
        "support wellbeing",
        "reinforce real human connection"
      ]
    }
  });
}
