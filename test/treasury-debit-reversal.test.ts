import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.debitReversal.list", () => {
  test.concurrent(
    "GET /v1/treasury/debit_reversals | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.debitReversal
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.debitReversal.list({ financialAccount: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.debitReversal.get", () => {
  test.concurrent(
    "GET /v1/treasury/debit_reversals/{debit_reversal} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.debitReversal
          .get({ debitReversal: "string" })
          .asResponse(),
        client.treasury.debitReversal.get({ debitReversal: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.debitReversal.create", () => {
  test.concurrent(
    "POST /v1/treasury/debit_reversals | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.debitReversal
          .create({ receivedDebit: "string" })
          .asResponse(),
        client.treasury.debitReversal.create({ receivedDebit: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
