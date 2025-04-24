import {
  External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
  Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
} from "./invoice-payment-method-options-us-bank-account-linked-account-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsUsBankAccount = {
  financialConnections?:
    | InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions
    | undefined;
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsUsBankAccount = {
  financial_connections?:
    | External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsUsBankAccount
 */
const SchemaIn$InvoicePaymentMethodOptionsUsBankAccount: z.ZodType<
  InvoicePaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsUsBankAccount
 */
const SchemaOut$InvoicePaymentMethodOptionsUsBankAccount: z.ZodType<
  External$InvoicePaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions.out.optional(),
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

export const Schemas$InvoicePaymentMethodOptionsUsBankAccount = {
  in: SchemaIn$InvoicePaymentMethodOptionsUsBankAccount,
  out: SchemaOut$InvoicePaymentMethodOptionsUsBankAccount,
};
