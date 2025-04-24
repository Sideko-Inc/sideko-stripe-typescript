import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.outboundTransfer.list", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_transfers | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.list({ financialAccount: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundTransfer.get", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_transfers/{outbound_transfer} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .get({ outboundTransfer: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.get({ outboundTransfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundTransfer.create", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_transfers | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
          })
          .asResponse(),
        client.treasury.outboundTransfer.create({
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

describe("tests client.treasury.outboundTransfer.cancel", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .cancel({ outboundTransfer: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.cancel({ outboundTransfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
