import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billing.creditGrant.list", () => {
  test.concurrent(
    "GET /v1/billing/credit_grants | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant.list().asResponse(),
        client.billing.creditGrant.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditGrant.get", () => {
  test.concurrent(
    "GET /v1/billing/credit_grants/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant.get({ id: "string" }).asResponse(),
        client.billing.creditGrant.get({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditGrant.create", () => {
  test.concurrent(
    "POST /v1/billing/credit_grants | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant
          .create({
            amount: { type: "monetary" },
            applicabilityConfig: { scope: {} },
            category: "paid",
            customer: "string",
          })
          .asResponse(),
        client.billing.creditGrant.create({
          amount: { type: "monetary" },
          applicabilityConfig: { scope: {} },
          category: "paid",
          customer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditGrant.update", () => {
  test.concurrent(
    "POST /v1/billing/credit_grants/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant.update({ id: "string" }).asResponse(),
        client.billing.creditGrant.update({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditGrant.expire", () => {
  test.concurrent(
    "POST /v1/billing/credit_grants/{id}/expire | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant.expire({ id: "string" }).asResponse(),
        client.billing.creditGrant.expire({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditGrant.void_", () => {
  test.concurrent(
    "POST /v1/billing/credit_grants/{id}/void | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditGrant.void_({ id: "string" }).asResponse(),
        client.billing.creditGrant.void_({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
