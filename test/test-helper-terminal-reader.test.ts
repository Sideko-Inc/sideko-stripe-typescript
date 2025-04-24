import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.terminal.reader.presentPaymentMethod", () => {
  test.concurrent(
    "POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.terminal.reader
          .presentPaymentMethod({ reader: "string" })
          .asResponse(),
        client.testHelper.terminal.reader.presentPaymentMethod({
          reader: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
