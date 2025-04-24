import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.invoiceRenderingTemplate.list", () => {
  test.concurrent(
    "GET /v1/invoice_rendering_templates | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoiceRenderingTemplate.list().asResponse(),
        client.invoiceRenderingTemplate.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoiceRenderingTemplate.get", () => {
  test.concurrent(
    "GET /v1/invoice_rendering_templates/{template} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoiceRenderingTemplate
          .get({ template: "string" })
          .asResponse(),
        client.invoiceRenderingTemplate.get({ template: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoiceRenderingTemplate.archive", () => {
  test.concurrent(
    "POST /v1/invoice_rendering_templates/{template}/archive | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoiceRenderingTemplate
          .archive({ template: "string" })
          .asResponse(),
        client.invoiceRenderingTemplate.archive({ template: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoiceRenderingTemplate.unarchive", () => {
  test.concurrent(
    "POST /v1/invoice_rendering_templates/{template}/unarchive | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoiceRenderingTemplate
          .unarchive({ template: "string" })
          .asResponse(),
        client.invoiceRenderingTemplate.unarchive({ template: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
