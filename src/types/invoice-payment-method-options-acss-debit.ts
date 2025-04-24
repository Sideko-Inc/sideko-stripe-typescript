import {
  External$InvoicePaymentMethodOptionsAcssDebitMandateOptions,
  InvoicePaymentMethodOptionsAcssDebitMandateOptions,
  Schemas$InvoicePaymentMethodOptionsAcssDebitMandateOptions,
} from "./invoice-payment-method-options-acss-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsAcssDebit = {
  mandateOptions?:
    | InvoicePaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsAcssDebit = {
  mandate_options?:
    | External$InvoicePaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsAcssDebit
 */
const SchemaIn$InvoicePaymentMethodOptionsAcssDebit: z.ZodType<
  InvoicePaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$InvoicePaymentMethodOptionsAcssDebitMandateOptions.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsAcssDebit
 */
const SchemaOut$InvoicePaymentMethodOptionsAcssDebit: z.ZodType<
  External$InvoicePaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsAcssDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$InvoicePaymentMethodOptionsAcssDebitMandateOptions.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsAcssDebit = {
  in: SchemaIn$InvoicePaymentMethodOptionsAcssDebit,
  out: SchemaOut$InvoicePaymentMethodOptionsAcssDebit,
};
