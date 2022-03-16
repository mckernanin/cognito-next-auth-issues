import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.redirect(
    `${process.env.COGNITO_HOSTED_URL}/logout?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.NEXTAUTH_URL}`
  );
}
