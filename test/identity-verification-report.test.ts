import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.identity.verificationReport.list", () => {
  test.concurrent(
    "GET /v1/identity/verification_reports | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.identity.verificationReport.list().asResponse(),
        client.identity.verificationReport.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.identity.verificationReport.get", () => {
  test.concurrent(
    "GET /v1/identity/verification_reports/{report} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.identity.verificationReport
          .get({ report: "string" })
          .asResponse(),
        client.identity.verificationReport.get({ report: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
