import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.externalAccount.create", () => {
  test.concurrent(
    "POST /v1/external_accounts/{id} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.externalAccount.create({ id: "string" }).asResponse(),
        client.externalAccount.create({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
