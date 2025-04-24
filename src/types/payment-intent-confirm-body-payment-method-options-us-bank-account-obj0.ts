import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./payment-intent-confirm-body-payment-method-options-us-bank-account-obj0-financial-connections";
import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions,
} from "./payment-intent-confirm-body-payment-method-options-us-bank-account-obj0-mandate-options";
import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks,
} from "./payment-intent-confirm-body-payment-method-options-us-bank-account-obj0-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0 = {
  financialConnections?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
    | undefined;
  mandateOptions?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
    | undefined;
  networks?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks
    | undefined;
  preferredSettlementSpeed?: ("fastest" | "standard") | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    mandate_options?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions
      | undefined;
    networks?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks
      | undefined;
    preferred_settlement_speed?: ("fastest" | "standard") | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
    mandate_options:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.in.optional(),
    networks:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
    mandateOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0MandateOptions.out.optional(),
    networks:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks.out.optional(),
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0,
  };
