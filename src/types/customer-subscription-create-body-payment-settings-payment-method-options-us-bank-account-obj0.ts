import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financialConnections?:
      | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
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

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  };
