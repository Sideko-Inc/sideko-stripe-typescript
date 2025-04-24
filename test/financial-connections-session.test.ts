import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.financialConnections.session.get", () => {
  test.concurrent(
    "GET /v1/financial_connections/sessions/{session} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.session
          .get({ session: "string" })
          .asResponse(),
        client.financialConnections.session.get({ session: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.session.create", () => {
  test.concurrent(
    "POST /v1/financial_connections/sessions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.session
          .create({
            accountHolder: { type: "account" },
            permissions: ["balances"],
          })
          .asResponse(),
        client.financialConnections.session.create({
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
