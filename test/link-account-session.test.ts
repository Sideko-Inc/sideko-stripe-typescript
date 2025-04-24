import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.linkAccountSession.get", () => {
  test.concurrent(
    "GET /v1/link_account_sessions/{session} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkAccountSession.get({ session: "string" }).asResponse(),
        client.linkAccountSession.get({ session: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.linkAccountSession.create", () => {
  test.concurrent(
    "POST /v1/link_account_sessions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkAccountSession
          .create({
            accountHolder: { type: "account" },
            permissions: ["balances"],
          })
          .asResponse(),
        client.linkAccountSession.create({
          accountHolder: { type: "account" },
          permissions: ["balances"],
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
