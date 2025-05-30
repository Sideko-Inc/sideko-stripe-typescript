import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.cashBalanceTransaction.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/cash_balance_transactions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.cashBalanceTransaction
          .list({ customer: "string" })
          .asResponse(),
        client.customer.cashBalanceTransaction.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.cashBalanceTransaction.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/cash_balance_transactions/{transaction} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.cashBalanceTransaction
          .get({ customer: "string", transaction: "string" })
          .asResponse(),
        client.customer.cashBalanceTransaction.get({
          customer: "string",
          transaction: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
