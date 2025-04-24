import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.treasury.outboundPayment.update", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_payments/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundPayment
          .update({ trackingDetails: { type: "ach" }, id: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundPayment.update({
          trackingDetails: { type: "ach" },
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundPayment.fail", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_payments/{id}/fail | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundPayment
          .fail({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundPayment.fail({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundPayment.post", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_payments/{id}/post | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundPayment
          .post({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundPayment.post({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.treasury.outboundPayment.returned", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/outbound_payments/{id}/return | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.outboundPayment
          .returned({ id: "string" })
          .asResponse(),
        client.testHelper.treasury.outboundPayment.returned({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
