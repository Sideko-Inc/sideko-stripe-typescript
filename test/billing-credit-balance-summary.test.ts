import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billing.creditBalanceSummary.get", () => {
  test.concurrent(
    "GET /v1/billing/credit_balance_summary | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditBalanceSummary
          .get({ customer: "string", filter: { type: "applicability_scope" } })
          .asResponse(),
        client.billing.creditBalanceSummary.get({
          customer: "string",
          filter: { type: "applicability_scope" },
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
