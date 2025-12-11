import type { NextApiRequest, NextApiResponse } from "next";
import { validateServer } from "../../lib/validateServer";
import { sanitize } from "../../lib/sanitize";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = sanitize(req.body);

  const errors = validateServer(data);
  if (errors.length) {
    return res.status(400).json({ error: errors });
  }

  await new Promise((r) => setTimeout(r, 1500));

  return res.status(200).json({ status: "success" });
}
