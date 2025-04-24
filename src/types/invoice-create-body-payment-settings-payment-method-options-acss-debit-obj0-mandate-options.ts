import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    transaction_type: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
