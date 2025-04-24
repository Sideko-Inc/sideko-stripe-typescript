import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billingPortal.configuration.list", () => {
  test.concurrent(
    "GET /v1/billing_portal/configurations | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billingPortal.configuration.list().asResponse(),
        client.billingPortal.configuration.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billingPortal.configuration.get", () => {
  test.concurrent(
    "GET /v1/billing_portal/configurations/{configuration} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billingPortal.configuration
          .get({ configuration: "string" })
          .asResponse(),
        client.billingPortal.configuration.get({ configuration: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billingPortal.configuration.create", () => {
  test.concurrent(
    "POST /v1/billing_portal/configurations | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billingPortal.configuration
          .create({ features: {} })
          .asResponse(),
        client.billingPortal.configuration.create({ features: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billingPortal.configuration.update", () => {
  test.concurrent(
    "POST /v1/billing_portal/configurations/{configuration} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billingPortal.configuration
          .update({ configuration: "string" })
          .asResponse(),
        client.billingPortal.configuration.update({ configuration: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
