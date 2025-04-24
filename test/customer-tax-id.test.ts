import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.taxId.delete", () => {
  test.concurrent(
    "DELETE /v1/customers/{customer}/tax_ids/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.taxId
          .delete({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.taxId.delete({ customer: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.taxId.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/tax_ids | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.taxId.list({ customer: "string" }).asResponse(),
        client.customer.taxId.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.taxId.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/tax_ids/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.taxId
          .get({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.taxId.get({ customer: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.taxId.create", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/tax_ids | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.taxId
          .create({ type: "ad_nrt", value: "string", customer: "string" })
          .asResponse(),
        client.customer.taxId.create({
          type: "ad_nrt",
          value: "string",
          customer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
