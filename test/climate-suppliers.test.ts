import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.climate.suppliers.get", () => {
  test.concurrent(
    "GET /v1/climate/suppliers/{supplier} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.climate.suppliers.get({ supplier: "string" }).asResponse(),
        client.climate.suppliers.get({ supplier: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
