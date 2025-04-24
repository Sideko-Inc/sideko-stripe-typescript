import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.financialAccounts.feature.list", () => {
  test.concurrent(
    "GET /v1/treasury/financial_accounts/{financial_account}/features | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.financialAccounts.feature
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.financialAccounts.feature.list({
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.financialAccounts.feature.create", () => {
  test.concurrent(
    "POST /v1/treasury/financial_accounts/{financial_account}/features | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.financialAccounts.feature
          .create({ financialAccount: "string" })
          .asResponse(),
        client.treasury.financialAccounts.feature.create({
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
