import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.account.externalAccount.delete", () => {
  test.concurrent(
    "DELETE /v1/accounts/{account}/external_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.externalAccount
          .delete({ account: "string", id: "string" })
          .asResponse(),
        client.account.externalAccount.delete({
          account: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.externalAccount.list", () => {
  test.concurrent(
    "GET /v1/accounts/{account}/external_accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.externalAccount.list({ account: "string" }).asResponse(),
        client.account.externalAccount.list({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.externalAccount.get", () => {
  test.concurrent(
    "GET /v1/accounts/{account}/external_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.externalAccount
          .get({ account: "string", id: "string" })
          .asResponse(),
        client.account.externalAccount.get({ account: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.externalAccount.create", () => {
  test.concurrent(
    "POST /v1/accounts/{account}/external_accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.externalAccount
          .create({ account: "string" })
          .asResponse(),
        client.account.externalAccount.create({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.externalAccount.update", () => {
  test.concurrent(
    "POST /v1/accounts/{account}/external_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.externalAccount
          .update({ account: "string", id: "string" })
          .asResponse(),
        client.account.externalAccount.update({
          account: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
