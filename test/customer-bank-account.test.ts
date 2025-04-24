import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.bankAccount.delete", () => {
  test.concurrent(
    "DELETE /v1/customers/{customer}/bank_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount
          .delete({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.bankAccount.delete({
          customer: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.bankAccount.list", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/bank_accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount.list({ customer: "string" }).asResponse(),
        client.customer.bankAccount.list({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.bankAccount.get", () => {
  test.concurrent(
    "GET /v1/customers/{customer}/bank_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount
          .get({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.bankAccount.get({ customer: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.bankAccount.create", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/bank_accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount.create({ customer: "string" }).asResponse(),
        client.customer.bankAccount.create({ customer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.bankAccount.update", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/bank_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount
          .update({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.bankAccount.update({
          customer: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.customer.bankAccount.verify", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/bank_accounts/{id}/verify | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.bankAccount
          .verify({ customer: "string", id: "string" })
          .asResponse(),
        client.customer.bankAccount.verify({
          customer: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
