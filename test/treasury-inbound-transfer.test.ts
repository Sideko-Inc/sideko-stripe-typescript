import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.inboundTransfer.list", () => {
  test.concurrent(
    "GET /v1/treasury/inbound_transfers | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.inboundTransfer
          .list({ financialAccount: "string" })
          .asResponse(),
        client.treasury.inboundTransfer.list({ financialAccount: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.inboundTransfer.get", () => {
  test.concurrent(
    "GET /v1/treasury/inbound_transfers/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.inboundTransfer.get({ id: "string" }).asResponse(),
        client.treasury.inboundTransfer.get({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.inboundTransfer.create", () => {
  test.concurrent(
    "POST /v1/treasury/inbound_transfers | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.inboundTransfer
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
            originPaymentMethod: "string",
          })
          .asResponse(),
        client.treasury.inboundTransfer.create({
          amount: 123,
          currency: "string",
          financialAccount: "string",
          originPaymentMethod: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.inboundTransfer.cance", () => {
  test.concurrent(
    "POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.inboundTransfer
          .cance({ inboundTransfer: "string" })
          .asResponse(),
        client.treasury.inboundTransfer.cance({ inboundTransfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
