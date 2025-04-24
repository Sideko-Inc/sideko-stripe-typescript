import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.issuing.personalizationDesign.list", () => {
  test.concurrent(
    "GET /v1/issuing/personalization_designs | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.personalizationDesign.list().asResponse(),
        client.issuing.personalizationDesign.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.personalizationDesign.get", () => {
  test.concurrent(
    "GET /v1/issuing/personalization_designs/{personalization_design} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.personalizationDesign
          .get({ personalizationDesign: "string" })
          .asResponse(),
        client.issuing.personalizationDesign.get({
          personalizationDesign: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.personalizationDesign.create", () => {
  test.concurrent(
    "POST /v1/issuing/personalization_designs | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.personalizationDesign
          .create({ physicalBundle: "string" })
          .asResponse(),
        client.issuing.personalizationDesign.create({
          physicalBundle: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.personalizationDesign.update", () => {
  test.concurrent(
    "POST /v1/issuing/personalization_designs/{personalization_design} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.personalizationDesign
          .update({ personalizationDesign: "string" })
          .asResponse(),
        client.issuing.personalizationDesign.update({
          personalizationDesign: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
