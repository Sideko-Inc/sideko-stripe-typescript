import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.paymentMethodDomain.list", () => {
  test.concurrent(
    "GET /v1/payment_method_domains | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain.list().asResponse(),
        client.paymentMethodDomain.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.get", () => {
  test.concurrent(
    "GET /v1/payment_method_domains/{payment_method_domain} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .get({ paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.get({ paymentMethodDomain: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.create", () => {
  test.concurrent(
    "POST /v1/payment_method_domains | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .create({ domainName: "string" })
          .asResponse(),
        client.paymentMethodDomain.create({ domainName: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.update", () => {
  test.concurrent(
    "POST /v1/payment_method_domains/{payment_method_domain} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .update({ paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.update({ paymentMethodDomain: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.validate", () => {
  test.concurrent(
    "POST /v1/payment_method_domains/{payment_method_domain}/validate | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .validate({ paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.validate({ paymentMethodDomain: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
