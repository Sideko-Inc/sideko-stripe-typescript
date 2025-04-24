import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.customer.fundingInstruction.create", () => {
  test.concurrent(
    "POST /v1/customers/{customer}/funding_instructions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.customer.fundingInstruction
          .create({
            bankTransfer: { type: "eu_bank_transfer" },
            currency: "string",
            fundingType: "bank_transfer",
            customer: "string",
          })
          .asResponse(),
        client.customer.fundingInstruction.create({
          bankTransfer: { type: "eu_bank_transfer" },
          currency: "string",
          fundingType: "bank_transfer",
          customer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
