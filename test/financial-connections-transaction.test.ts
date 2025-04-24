import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.financialConnections.transaction.list", () => {
  test.concurrent(
    "GET /v1/financial_connections/transactions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.transaction
          .list({ account: "string" })
          .asResponse(),
        client.financialConnections.transaction.list({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.transaction.get", () => {
  test.concurrent(
    "GET /v1/financial_connections/transactions/{transaction} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.transaction
          .get({ transaction: "string" })
          .asResponse(),
        client.financialConnections.transaction.get({ transaction: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
