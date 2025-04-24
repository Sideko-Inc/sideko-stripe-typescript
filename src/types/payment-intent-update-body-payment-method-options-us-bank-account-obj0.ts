import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./payment-intent-update-body-payment-method-options-us-bank-account-obj0-financial-connections";
import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
} from "./payment-intent-update-body-payment-method-options-us-bank-account-obj0-mandate-options";
import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
} from "./payment-intent-update-body-payment-method-options-us-bank-account-obj0-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0 = {
  financialConnections?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
    | undefined;
  mandateOptions?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
    | undefined;
  networks?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks
    | undefined;
  preferredSettlementSpeed?: ("fastest" | "standard") | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    mandate_options?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
      | undefined;
    networks?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks
      | undefined;
    preferred_settlement_speed?: ("fastest" | "standard") | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
    mandate_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.in.optional(),
    networks:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
    mandateOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.out.optional(),
    networks:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0,
  };
