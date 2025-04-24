import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.terminal.reader.delete", () => {
  test.concurrent(
    "DELETE /v1/terminal/readers/{reader} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.delete({ reader: "string" }).asResponse(),
        client.terminal.reader.delete({ reader: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.list", () => {
  test.concurrent(
    "GET /v1/terminal/readers | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.list().asResponse(),
        client.terminal.reader.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.get", () => {
  test.concurrent(
    "GET /v1/terminal/readers/{reader} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.get({ reader: "string" }).asResponse(),
        client.terminal.reader.get({ reader: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.create", () => {
  test.concurrent(
    "POST /v1/terminal/readers | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader
          .create({ registrationCode: "string" })
          .asResponse(),
        client.terminal.reader.create({ registrationCode: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.update", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.update({ reader: "string" }).asResponse(),
        client.terminal.reader.update({ reader: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.cancelAction", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader}/cancel_action | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.cancelAction({ reader: "string" }).asResponse(),
        client.terminal.reader.cancelAction({ reader: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.processPaymentIntent", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader}/process_payment_intent | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader
          .processPaymentIntent({ paymentIntent: "string", reader: "string" })
          .asResponse(),
        client.terminal.reader.processPaymentIntent({
          paymentIntent: "string",
          reader: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.processSetupIntent", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader}/process_setup_intent | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader
          .processSetupIntent({
            allowRedisplay: "always",
            setupIntent: "string",
            reader: "string",
          })
          .asResponse(),
        client.terminal.reader.processSetupIntent({
          allowRedisplay: "always",
          setupIntent: "string",
          reader: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.refundPayment", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader}/refund_payment | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader.refundPayment({ reader: "string" }).asResponse(),
        client.terminal.reader.refundPayment({ reader: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.terminal.reader.setReaderDisplay", () => {
  test.concurrent(
    "POST /v1/terminal/readers/{reader}/set_reader_display | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.terminal.reader
          .setReaderDisplay({ type: "cart", reader: "string" })
          .asResponse(),
        client.terminal.reader.setReaderDisplay({
          type: "cart",
          reader: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
