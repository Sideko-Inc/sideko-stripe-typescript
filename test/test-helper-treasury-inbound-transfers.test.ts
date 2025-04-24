import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.treasury.inboundTransfers.fail", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.inboundTransfers
          .fail({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.inboundTransfers.fail({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.inboundTransfers.returned", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/inbound_transfers/{id}/return | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.inboundTransfers
          .returned({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.inboundTransfers.returned({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.inboundTransfers.succeed", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.inboundTransfers
          .succeed({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.inboundTransfers.succeed({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
