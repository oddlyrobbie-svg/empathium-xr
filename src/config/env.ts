/**
 * Safe environment configuration for Empathium XR.
 *
 * This module reads from process.env only.
 * It does not contain real API keys, secrets, or production defaults.
 *
 * Local development should use a private .env file copied from .env.example.
 * The real .env file must never be committed.
 */

export const env = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  aiProvider: process.env.AI_PROVIDER,
  aiApiKey: process.env.AI_API_KEY
};

/**
 * Helper for future required environment checks.
 *
 * For now this is intentionally lightweight because the backend is still
 * in early architecture/prototype mode.
 */
export function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}
