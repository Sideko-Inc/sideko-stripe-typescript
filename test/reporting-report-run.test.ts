import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.reporting.reportRun.list", () => {
  test.concurrent(
    "GET /v1/reporting/report_runs | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.reporting.reportRun.list().asResponse(),
        client.reporting.reportRun.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.reporting.reportRun.get", () => {
  test.concurrent(
    "GET /v1/reporting/report_runs/{report_run} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.reporting.reportRun.get({ reportRun: "string" }).asResponse(),
        client.reporting.reportRun.get({ reportRun: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.reporting.reportRun.create", () => {
  test.concurrent(
    "POST /v1/reporting/report_runs | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.reporting.reportRun
          .create({ reportType: "string" })
          .asResponse(),
        client.reporting.reportRun.create({ reportType: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
