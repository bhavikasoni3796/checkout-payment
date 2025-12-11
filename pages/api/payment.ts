import { sanitize } from "@/lib/sanitize";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = sanitize(req.body);
  await new Promise((r) => setTimeout(r, 1500));
  return res.status(200).json({ status: "success" });
}
