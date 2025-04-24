import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.issuing.physicalBundle.list", () => {
  test.concurrent(
    "GET /v1/issuing/physical_bundles | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.physicalBundle.list().asResponse(),
        client.issuing.physicalBundle.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.physicalBundle.get", () => {
  test.concurrent(
    "GET /v1/issuing/physical_bundles/{physical_bundle} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.physicalBundle
          .get({ physicalBundle: "string" })
          .asResponse(),
        client.issuing.physicalBundle.get({ physicalBundle: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
