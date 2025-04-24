import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
} from "./invoice-update-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financialConnections?:
      | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    financial_connections?:
      | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections.out.optional(),
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

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  };
