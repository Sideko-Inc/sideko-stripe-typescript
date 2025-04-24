import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billing.creditBalanceTransaction.list", () => {
  test.concurrent(
    "GET /v1/billing/credit_balance_transactions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditBalanceTransaction
          .list({ customer: "string" })
          .asResponse(),
        client.billing.creditBalanceTransaction.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditBalanceTransaction.get", () => {
  test.concurrent(
    "GET /v1/billing/credit_balance_transactions/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditBalanceTransaction
          .get({ id: "string" })
          .asResponse(),
        client.billing.creditBalanceTransaction.get({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
