import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.issuing.personalizationDesign.activate", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.personalizationDesign
          .activate({ personalizationDesign: "string" })
          .asResponse(),
        client.testHelper.issuing.personalizationDesign.activate({
          personalizationDesign: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.personalizationDesign.deactivate", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.personalizationDesign
          .deactivate({ personalizationDesign: "string" })
          .asResponse(),
        client.testHelper.issuing.personalizationDesign.deactivate({
          personalizationDesign: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.testHelper.issuing.personalizationDesign.reject", () => {
  test.concurrent(
    "POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.issuing.personalizationDesign
          .reject({ rejectionReasons: {}, personalizationDesign: "string" })
          .asResponse(),
        client.testHelper.issuing.personalizationDesign.reject({
          rejectionReasons: {},
          personalizationDesign: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
