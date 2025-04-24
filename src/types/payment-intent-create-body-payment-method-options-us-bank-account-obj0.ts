import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./payment-intent-create-body-payment-method-options-us-bank-account-obj0-financial-connections";
import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
} from "./payment-intent-create-body-payment-method-options-us-bank-account-obj0-mandate-options";
import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
} from "./payment-intent-create-body-payment-method-options-us-bank-account-obj0-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0 = {
  financialConnections?:
    | PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
    | undefined;
  mandateOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
    | undefined;
  networks?:
    | PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks
    | undefined;
  preferredSettlementSpeed?: ("fastest" | "standard") | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    mandate_options?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
      | undefined;
    networks?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks
      | undefined;
    preferred_settlement_speed?: ("fastest" | "standard") | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
    mandate_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.in.optional(),
    networks:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks.in.optional(),
    preferred_settlement_speed: z.enum(["fastest", "standard"]).optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      mandate_options: "mandateOptions",
      networks: "networks",
      preferred_settlement_speed: "preferredSettlementSpeed",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
    mandateOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.out.optional(),
    networks:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks.out.optional(),
    preferredSettlementSpeed: z.enum(["fastest", "standard"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      mandateOptions: "mandate_options",
      networks: "networks",
      preferredSettlementSpeed: "preferred_settlement_speed",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0,
  };
