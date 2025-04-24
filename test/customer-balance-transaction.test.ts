import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.balanceTransaction.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/balance_transactions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.balanceTransaction
          .list({ customer: "string" })
          .asResponse(),
        client.customer.balanceTransaction.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.balanceTransaction.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/balance_transactions/{transaction} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.balanceTransaction
          .get({ customer: "string", transaction: "string" })
          .asResponse(),
        client.customer.balanceTransaction.get({
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

describe("tests client.customer.balanceTransaction.create", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/balance_transactions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.balanceTransaction
          .create({ amount: 123, currency: "string", customer: "string" })
          .asResponse(),
        client.customer.balanceTransaction.create({
          amount: 123,
          currency: "string",
          customer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.balanceTransaction.update", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/balance_transactions/{transaction} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.balanceTransaction
          .update({ customer: "string", transaction: "string" })
          .asResponse(),
        client.customer.balanceTransaction.update({
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
