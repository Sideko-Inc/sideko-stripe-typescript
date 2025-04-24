import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.treasury.outboundTransfer.update", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundTransfer
          .update({
            trackingDetails: { type: "ach" },
            outboundTransfer: "string",
          })
          .asResponse(),
        client.testHelper.treasury.outboundTransfer.update({
          trackingDetails: { type: "ach" },
          outboundTransfer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundTransfer.fail", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundTransfer
          .fail({ outboundTransfer: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundTransfer.fail({
          outboundTransfer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundTransfer.post", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundTransfer
          .post({ outboundTransfer: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundTransfer.post({
          outboundTransfer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundTransfer.returned", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundTransfer
          .returned({ outboundTransfer: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundTransfer.returned({
          outboundTransfer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
