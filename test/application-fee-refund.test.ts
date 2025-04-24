import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.applicationFee.refund.get", () => {
  test.concurrent(
    "GET /v1/application_fees/{fee}/refunds/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund
          .get({ fee: "string", id: "string" })
          .asResponse(),
        client.applicationFee.refund.get({ fee: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.list", () => {
  test.concurrent(
    "GET /v1/application_fees/{id}/refunds | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund.list({ id: "string" }).asResponse(),
        client.applicationFee.refund.list({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.update", () => {
  test.concurrent(
    "POST /v1/application_fees/{fee}/refunds/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund
          .update({ fee: "string", id: "string" })
          .asResponse(),
        client.applicationFee.refund.update({ fee: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.create", () => {
  test.concurrent(
    "POST /v1/application_fees/{id}/refund | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund.create({ id: "string" }).asResponse(),
        client.applicationFee.refund.create({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.createMany", () => {
  test.concurrent(
    "POST /v1/application_fees/{id}/refunds | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund.createMany({ id: "string" }).asResponse(),
        client.applicationFee.refund.createMany({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
