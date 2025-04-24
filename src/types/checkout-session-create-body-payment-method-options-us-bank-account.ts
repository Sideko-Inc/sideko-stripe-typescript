import {
  CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
} from "./checkout-session-create-body-payment-method-options-us-bank-account-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount = {
  financialConnections?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount =
  {
    financial_connections?:
      | External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
    verification_method?: ("automatic" | "instant") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
    verification_method: z.enum(["automatic", "instant"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z.enum(["automatic", "instant"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccount,
  };
