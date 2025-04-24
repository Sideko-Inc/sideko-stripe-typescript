import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.tax.transaction.lineItems.list", () => {
  test.concurrent(
    "GET /v1/tax/transactions/{transaction}/line_items | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.transaction.lineItems
          .list({ transaction: "string" })
          .asResponse(),
        client.tax.transaction.lineItems.list({ transaction: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
