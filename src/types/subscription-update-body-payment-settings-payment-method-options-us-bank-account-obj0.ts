import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./subscription-update-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financialConnections?:
      | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
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

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  };
