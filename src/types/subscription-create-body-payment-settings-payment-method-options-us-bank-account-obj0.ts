import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./subscription-create-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financialConnections?:
      | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  };
