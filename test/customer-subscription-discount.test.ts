import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.subscription.discount.delete", () => {
  test.concurrent(
    "DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription.discount
          .delete({ customer: "string", subscriptionExposedId: "string" })
          .asResponse(),
        client.customer.subscription.discount.delete({
          customer: "string",
          subscriptionExposedId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.subscription.discount.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription.discount
          .list({ customer: "string", subscriptionExposedId: "string" })
          .asResponse(),
        client.customer.subscription.discount.list({
          customer: "string",
          subscriptionExposedId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
