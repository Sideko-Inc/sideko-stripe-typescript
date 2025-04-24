import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billing.meterEventAdjustment.create", () => {
  test.concurrent(
    "POST /v1/billing/meter_event_adjustments | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.meterEventAdjustment
          .create({ eventName: "string", type: "cancel" })
          .asResponse(),
        client.billing.meterEventAdjustment.create({
          eventName: "string",
          type: "cancel",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
