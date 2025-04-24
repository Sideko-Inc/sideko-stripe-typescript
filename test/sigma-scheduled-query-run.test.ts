import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.sigma.scheduledQueryRun.list", () => {
  test.concurrent(
    "GET /v1/sigma/scheduled_query_runs | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.sigma.scheduledQueryRun.list().asResponse(),
        client.sigma.scheduledQueryRun.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.sigma.scheduledQueryRun.get", () => {
  test.concurrent(
    "GET /v1/sigma/scheduled_query_runs/{scheduled_query_run} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.sigma.scheduledQueryRun
          .get({ scheduledQueryRun: "string" })
          .asResponse(),
        client.sigma.scheduledQueryRun.get({ scheduledQueryRun: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
