import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.treasury.receivedDebit.create", () => {
  test.concurrent(
    "POST /v1/test_helpers/treasury/received_debits | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.treasury.receivedDebit
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
            network: "ach",
          })
          .asResponse(),
        client.testHelper.treasury.receivedDebit.create({
          amount: 123,
          currency: "string",
          financialAccount: "string",
          network: "ach",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
