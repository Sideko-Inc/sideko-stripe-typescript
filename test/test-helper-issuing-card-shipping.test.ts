import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.issuing.card.shipping.deliver", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.card.shipping
          .deliver({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.card.shipping.deliver({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.card.shipping.fail", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/cards/{card}/shipping/fail | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.card.shipping
          .fail({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.card.shipping.fail({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.card.shipping.returned", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/cards/{card}/shipping/return | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.card.shipping
          .returned({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.card.shipping.returned({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.card.shipping.ship", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/cards/{card}/shipping/ship | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.card.shipping
          .ship({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.card.shipping.ship({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.card.shipping.submit", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/cards/{card}/shipping/submit | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.card.shipping
          .submit({ card: "string" })
          .asResponse(),
        client.testHelper.issuing.card.shipping.submit({ card: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
