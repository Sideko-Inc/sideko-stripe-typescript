import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.financialConnections.account.list", () => {
  test.concurrent(
    "GET /v1/financial_connections/accounts | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account.list().asResponse(),
        client.financialConnections.account.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.account.get", () => {
  test.concurrent(
    "GET /v1/financial_connections/accounts/{account} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account
          .get({ account: "string" })
          .asResponse(),
        client.financialConnections.account.get({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.account.disconnect", () => {
  test.concurrent(
    "POST /v1/financial_connections/accounts/{account}/disconnect | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account
          .disconnect({ account: "string" })
          .asResponse(),
        client.financialConnections.account.disconnect({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.account.refresh", () => {
  test.concurrent(
    "POST /v1/financial_connections/accounts/{account}/refresh | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account
          .refresh({ features: ["balance"], account: "string" })
          .asResponse(),
        client.financialConnections.account.refresh({
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

describe("tests client.financialConnections.account.subscribe", () => {
  test.concurrent(
    "POST /v1/financial_connections/accounts/{account}/subscribe | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account
          .subscribe({ features: ["transactions"], account: "string" })
          .asResponse(),
        client.financialConnections.account.subscribe({
          features: ["transactions"],
          account: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.financialConnections.account.unsubscribe", () => {
  test.concurrent(
    "POST /v1/financial_connections/accounts/{account}/unsubscribe | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.financialConnections.account
          .unsubscribe({ features: ["transactions"], account: "string" })
          .asResponse(),
        client.financialConnections.account.unsubscribe({
          features: ["transactions"],
          account: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
