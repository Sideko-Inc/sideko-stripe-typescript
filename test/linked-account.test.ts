import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.linkedAccount.list", () => {
  test.concurrent(
    "GET /v1/linked_accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkedAccount.list().asResponse(),
        client.linkedAccount.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.linkedAccount.get", () => {
  test.concurrent(
    "GET /v1/linked_accounts/{account} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkedAccount.get({ account: "string" }).asResponse(),
        client.linkedAccount.get({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.linkedAccount.disconnect", () => {
  test.concurrent(
    "POST /v1/linked_accounts/{account}/disconnect | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkedAccount.disconnect({ account: "string" }).asResponse(),
        client.linkedAccount.disconnect({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.linkedAccount.refresh", () => {
  test.concurrent(
    "POST /v1/linked_accounts/{account}/refresh | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkedAccount
          .refresh({ features: ["balance"], account: "string" })
          .asResponse(),
        client.linkedAccount.refresh({
          features: ["balance"],
          account: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
