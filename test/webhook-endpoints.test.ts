import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.webhookEndpoints.delete", () => {
  test.concurrent(
    "DELETE /v1/webhook_endpoints/{webhook_endpoint} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.webhookEndpoints
          .delete({ webhookEndpoint: "string" })
          .asResponse(),
        client.webhookEndpoints.delete({ webhookEndpoint: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.webhookEndpoints.list", () => {
  test.concurrent(
    "GET /v1/webhook_endpoints | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.webhookEndpoints.list().asResponse(),
        client.webhookEndpoints.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.webhookEndpoints.get", () => {
  test.concurrent(
    "GET /v1/webhook_endpoints/{webhook_endpoint} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.webhookEndpoints.get({ webhookEndpoint: "string" }).asResponse(),
        client.webhookEndpoints.get({ webhookEndpoint: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.webhookEndpoints.create", () => {
  test.concurrent(
    "POST /v1/webhook_endpoints | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.webhookEndpoints
          .create({ enabledEvents: ["*"], url: "string" })
          .asResponse(),
        client.webhookEndpoints.create({ enabledEvents: ["*"], url: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.webhookEndpoints.update", () => {
  test.concurrent(
    "POST /v1/webhook_endpoints/{webhook_endpoint} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.webhookEndpoints
          .update({ webhookEndpoint: "string" })
          .asResponse(),
        client.webhookEndpoints.update({ webhookEndpoint: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
