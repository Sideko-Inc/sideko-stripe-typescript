import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.charge.refund.list", () => {
  test.concurrent(
    "GET /v1/charges/{charge}/refunds | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.charge.refund.list({ charge: "string" }).asResponse(),
        client.charge.refund.list({ charge: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.charge.refund.get", () => {
  test.concurrent(
    "GET /v1/charges/{charge}/refunds/{refund} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.charge.refund
          .get({ charge: "string", refund: "string" })
          .asResponse(),
        client.charge.refund.get({ charge: "string", refund: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.charge.refund.create", () => {
  test.concurrent(
    "POST /v1/charges/{charge}/refund | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.charge.refund.create({ charge: "string" }).asResponse(),
        client.charge.refund.create({ charge: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.charge.refund.create1", () => {
  test.concurrent(
    "POST /v1/charges/{charge}/refunds | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.charge.refund.create1({ charge: "string" }).asResponse(),
        client.charge.refund.create1({ charge: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.charge.refund.update", () => {
  test.concurrent(
    "POST /v1/charges/{charge}/refunds/{refund} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.charge.refund
          .update({ charge: "string", refund: "string" })
          .asResponse(),
        client.charge.refund.update({ charge: "string", refund: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
