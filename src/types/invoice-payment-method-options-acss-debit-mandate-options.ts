import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsAcssDebitMandateOptions = {
  /**
   * Transaction type of the mandate.
   */
  transactionType?: ("business" | "personal") | null | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsAcssDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsAcssDebitMandateOptions = {
  transaction_type?: ("business" | "personal") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsAcssDebitMandateOptions
 */
const SchemaIn$InvoicePaymentMethodOptionsAcssDebitMandateOptions: z.ZodType<
  InvoicePaymentMethodOptionsAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    transaction_type: z.enum(["business", "personal"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsAcssDebitMandateOptions
 */
const SchemaOut$InvoicePaymentMethodOptionsAcssDebitMandateOptions: z.ZodType<
  External$InvoicePaymentMethodOptionsAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsAcssDebitMandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsAcssDebitMandateOptions = {
  in: SchemaIn$InvoicePaymentMethodOptionsAcssDebitMandateOptions,
  out: SchemaOut$InvoicePaymentMethodOptionsAcssDebitMandateOptions,
};
