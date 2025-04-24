import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.apps.secret.list", () => {
  test.concurrent(
    "GET /v1/apps/secrets | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.apps.secret.list({ scope: { type: "account" } }).asResponse(),
        client.apps.secret.list({ scope: { type: "account" } }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.apps.secret.find", () => {
  test.concurrent(
    "GET /v1/apps/secrets/find | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.apps.secret
          .find({ name: "string", scope: { type: "account" } })
          .asResponse(),
        client.apps.secret.find({ name: "string", scope: { type: "account" } }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.apps.secret.create", () => {
  test.concurrent(
    "POST /v1/apps/secrets | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.apps.secret
          .create({
            name: "string",
            payload: "string",
            scope: { type: "account" },
          })
          .asResponse(),
        client.apps.secret.create({
          name: "string",
          payload: "string",
          scope: { type: "account" },
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.apps.secret.delete", () => {
  test.concurrent(
    "POST /v1/apps/secrets/delete | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.apps.secret
          .delete({ name: "string", scope: { type: "account" } })
          .asResponse(),
        client.apps.secret.delete({
          name: "string",
          scope: { type: "account" },
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
