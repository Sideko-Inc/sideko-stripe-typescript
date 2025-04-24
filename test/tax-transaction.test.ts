import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.tax.transaction.get", () => {
  test.concurrent(
    "GET /v1/tax/transactions/{transaction} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.transaction.get({ transaction: "string" }).asResponse(),
        client.tax.transaction.get({ transaction: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.tax.transaction.createFromCalculation", () => {
  test.concurrent(
    "POST /v1/tax/transactions/create_from_calculation | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.transaction
          .createFromCalculation({ calculation: "string", reference: "string" })
          .asResponse(),
        client.tax.transaction.createFromCalculation({
          calculation: "string",
          reference: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.tax.transaction.createReversal", () => {
  test.concurrent(
    "POST /v1/tax/transactions/create_reversal | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.transaction
          .createReversal({
            mode: "full",
            originalTransaction: "string",
            reference: "string",
          })
          .asResponse(),
        client.tax.transaction.createReversal({
          mode: "full",
          originalTransaction: "string",
          reference: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
