import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financialConnections?:
      | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
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

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  };
