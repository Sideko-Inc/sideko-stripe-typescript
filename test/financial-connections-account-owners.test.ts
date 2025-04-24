import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.financialConnections.account.owners.list", () => {
  test.concurrent(
    "GET /v1/financial_connections/accounts/{account}/owners | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account.owners
          .list({ account: "string", ownership: "string" })
          .asResponse(),
        client.financialConnections.account.owners.list({
          account: "string",
          ownership: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
