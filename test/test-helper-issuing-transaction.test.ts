import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.issuing.transaction.createForceCapture", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/transactions/create_force_capture | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.transaction
          .createForceCapture({ amount: 123, card: "string" })
          .asResponse(),
        client.testHelper.issuing.transaction.createForceCapture({
          amount: 123,
          card: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.transaction.createUnlinkedRefund", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/transactions/create_unlinked_refund | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.transaction
          .createUnlinkedRefund({ amount: 123, card: "string" })
          .asResponse(),
        client.testHelper.issuing.transaction.createUnlinkedRefund({
          amount: 123,
          card: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.transaction.refund", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/transactions/{transaction}/refund | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.transaction
          .refund({ transaction: "string" })
          .asResponse(),
        client.testHelper.issuing.transaction.refund({ transaction: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
