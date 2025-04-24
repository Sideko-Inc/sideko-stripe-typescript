import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.issuing.authorization.create", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .create({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.create({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.authorization.capture", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations/{authorization}/capture | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .capture({ authorization: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.capture({
          authorization: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.authorization.expire", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations/{authorization}/expire | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .expire({ authorization: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.expire({
          authorization: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.authorization.finalizeAmount", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .finalizeAmount({ finalAmount: 123, authorization: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.finalizeAmount({
          finalAmount: 123,
          authorization: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.authorization.increment", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations/{authorization}/increment | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .increment({ incrementAmount: 123, authorization: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.increment({
          incrementAmount: 123,
          authorization: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.authorization.reverse", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.authorization
          .reverse({ authorization: "string" })
          .asResponse(),
        client.testHelper.issuing.authorization.reverse({
          authorization: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
