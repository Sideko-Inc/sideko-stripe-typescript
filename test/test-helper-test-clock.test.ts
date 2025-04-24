import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.testClock.delete", () => {
  test.concurrent(
    "DELETE /v1/test_helpers/test_clocks/{test_clock} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.testClock
          .delete({ testClock: "string" })
          .asResponse(),
        client.testHelper.testClock.delete({ testClock: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.testClock.list", () => {
  test.concurrent(
    "GET /v1/test_helpers/test_clocks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.testClock.list().asResponse(),
        client.testHelper.testClock.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.testClock.get", () => {
  test.concurrent(
    "GET /v1/test_helpers/test_clocks/{test_clock} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.testClock.get({ testClock: "string" }).asResponse(),
        client.testHelper.testClock.get({ testClock: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.testClock.create", () => {
  test.concurrent(
    "POST /v1/test_helpers/test_clocks | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.testClock.create({ frozenTime: 123 }).asResponse(),
        client.testHelper.testClock.create({ frozenTime: 123 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.testClock.advance", () => {
  test.concurrent(
    "POST /v1/test_helpers/test_clocks/{test_clock}/advance | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.testClock
          .advance({ frozenTime: 123, testClock: "string" })
          .asResponse(),
        client.testHelper.testClock.advance({
          frozenTime: 123,
          testClock: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
