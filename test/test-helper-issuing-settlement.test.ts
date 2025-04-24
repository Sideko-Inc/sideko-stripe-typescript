import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.issuing.settlement.create", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/settlements | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.settlement
          .create({
            bin: "string",
            clearingDate: 123,
            currency: "string",
            netTotalAmount: 123,
          })
          .asResponse(),
        client.testHelper.issuing.settlement.create({
          bin: "string",
          clearingDate: 123,
          currency: "string",
          netTotalAmount: 123,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.settlement.complete", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/settlements/{settlement}/complete | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.settlement
          .complete({ settlement: "string" })
          .asResponse(),
        client.testHelper.issuing.settlement.complete({ settlement: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
