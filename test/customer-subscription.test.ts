import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.subscription.delete", () => {
  test.concurrent(
    "DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription
          .delete({ customer: "string", subscriptionExposedId: "string" })
          .asResponse(),
        client.customer.subscription.delete({
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

describe("tests client.customer.subscription.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/subscriptions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription.list({ customer: "string" }).asResponse(),
        client.customer.subscription.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.subscription.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription
          .get({ customer: "string", subscriptionExposedId: "string" })
          .asResponse(),
        client.customer.subscription.get({
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

describe("tests client.customer.subscription.create", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/subscriptions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription
          .create({ customer: "string" })
          .asResponse(),
        client.customer.subscription.create({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.subscription.modify", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/subscriptions/{subscription_exposed_id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.subscription
          .modify({ customer: "string", subscriptionExposedId: "string" })
          .asResponse(),
        client.customer.subscription.modify({
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
