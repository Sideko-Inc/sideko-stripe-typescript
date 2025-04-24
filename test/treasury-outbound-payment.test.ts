import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.outboundPayment.list", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_payments | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.outboundPayment.list({ financialAccount: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.get", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_payments/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment.get({ id: "string" }).asResponse(),
        client.treasury.outboundPayment.get({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.create", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_payments | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
          })
          .asResponse(),
        client.treasury.outboundPayment.create({
          amount: 123,
          currency: "string",
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.cancel", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_payments/{id}/cancel | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment.cancel({ id: "string" }).asResponse(),
        client.treasury.outboundPayment.cancel({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
