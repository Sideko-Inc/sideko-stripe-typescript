import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.transfers.reversal.list", () => {
  test.concurrent(
    "GET /v1/transfers/{id}/reversals | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.transfers.reversal.list({ id: "string" }).asResponse(),
        client.transfers.reversal.list({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.transfers.reversal.get", () => {
  test.concurrent(
    "GET /v1/transfers/{transfer}/reversals/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.transfers.reversal
          .get({ id: "string", transfer: "string" })
          .asResponse(),
        client.transfers.reversal.get({ id: "string", transfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.transfers.reversal.create", () => {
  test.concurrent(
    "POST /v1/transfers/{id}/reversals | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.transfers.reversal.create({ id: "string" }).asResponse(),
        client.transfers.reversal.create({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.transfers.reversal.update", () => {
  test.concurrent(
    "POST /v1/transfers/{transfer}/reversals/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.transfers.reversal
          .update({ id: "string", transfer: "string" })
          .asResponse(),
        client.transfers.reversal.update({ id: "string", transfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
