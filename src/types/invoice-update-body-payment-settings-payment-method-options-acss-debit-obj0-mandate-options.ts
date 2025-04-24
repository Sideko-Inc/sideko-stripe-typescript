import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
