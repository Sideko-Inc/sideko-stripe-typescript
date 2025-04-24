import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.receivedDebit.list", () => {
  test.concurrent(
    "GET /v1/treasury/received_debits | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.receivedDebit
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.receivedDebit.list({ financialAccount: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.receivedDebit.get", () => {
  test.concurrent(
    "GET /v1/treasury/received_debits/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.receivedDebit.get({ id: "string" }).asResponse(),
        client.treasury.receivedDebit.get({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
