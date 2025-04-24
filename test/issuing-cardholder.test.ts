import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.issuing.cardholder.list", () => {
  test.concurrent(
    "GET /v1/issuing/cardholders | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.cardholder.list().asResponse(),
        client.issuing.cardholder.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.cardholder.get", () => {
  test.concurrent(
    "GET /v1/issuing/cardholders/{cardholder} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.cardholder.get({ cardholder: "string" }).asResponse(),
        client.issuing.cardholder.get({ cardholder: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.cardholder.create", () => {
  test.concurrent(
    "POST /v1/issuing/cardholders | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.cardholder
          .create({
            billing: {
              address: {
                city: "string",
                country: "string",
                line1: "string",
                postalCode: "string",
              },
            },
            name: "string",
          })
          .asResponse(),
        client.issuing.cardholder.create({
          billing: {
            address: {
              city: "string",
              country: "string",
              line1: "string",
              postalCode: "string",
            },
          },
          name: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.cardholder.update", () => {
  test.concurrent(
    "POST /v1/issuing/cardholders/{cardholder} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.cardholder.update({ cardholder: "string" }).asResponse(),
        client.issuing.cardholder.update({ cardholder: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
