import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.accountLink.create", () => {
  test.concurrent(
    "POST /v1/account_links | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.accountLink
          .create({ account: "string", type: "account_onboarding" })
          .asResponse(),
        client.accountLink.create({
          account: "string",
          type: "account_onboarding",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
