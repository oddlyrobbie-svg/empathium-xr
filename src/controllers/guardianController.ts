import type { Request, Response } from "express";

/**
 * Minimal Guardian mock controller.
 *
 * Purpose:
 * Provides an early placeholder for the Empathium Guardian response loop.
 * This does not call an AI provider yet and does not require real API keys.
 */
export function postGuardian(req: Request, res: Response): void {
  const userInput = typeof req.body?.message === "string" ? req.body.message : "";

  res.json({
    guardian: {
      mode: "mock",
      response:
        userInput.length > 0
          ? "I received your message. This is a placeholder Guardian response designed for future adaptive support."
          : "This is a placeholder Guardian response. Send a message field to test the future interaction flow.",
      principles: [
        "protect autonomy",
        "stay transparent",
        "support wellbeing",
        "reinforce real human connection"
      ]
    }
  });
}
