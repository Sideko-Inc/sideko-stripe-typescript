import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.paymentMethod.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/payment_methods | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.paymentMethod.list({ customer: "string" }).asResponse(),
        client.customer.paymentMethod.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.paymentMethod.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/payment_methods/{payment_method} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.paymentMethod
          .get({ customer: "string", paymentMethod: "string" })
          .asResponse(),
        client.customer.paymentMethod.get({
          customer: "string",
          paymentMethod: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
