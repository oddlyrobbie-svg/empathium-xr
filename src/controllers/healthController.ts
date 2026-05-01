import type { Request, Response } from "express";

/**
 * Health endpoint controller.
 *
 * Purpose:
 * Confirms that the backend process is running and reachable.
 */
export function getHealth(_req: Request, res: Response): void {
  res.json({ status: "ok" });
}
