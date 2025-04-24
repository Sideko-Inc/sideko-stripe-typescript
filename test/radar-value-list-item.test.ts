import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.radar.valueListItem.delete", () => {
  test.concurrent(
    "DELETE /v1/radar/value_list_items/{item} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.valueListItem.delete({ item: "string" }).asResponse(),
        client.radar.valueListItem.delete({ item: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.radar.valueListItem.list", () => {
  test.concurrent(
    "GET /v1/radar/value_list_items | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.valueListItem.list({ valueList: "string" }).asResponse(),
        client.radar.valueListItem.list({ valueList: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.radar.valueListItem.get", () => {
  test.concurrent(
    "GET /v1/radar/value_list_items/{item} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.valueListItem.get({ item: "string" }).asResponse(),
        client.radar.valueListItem.get({ item: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.radar.valueListItem.create", () => {
  test.concurrent(
    "POST /v1/radar/value_list_items | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.valueListItem
          .create({ value: "string", valueList: "string" })
          .asResponse(),
        client.radar.valueListItem.create({
          value: "string",
          valueList: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
