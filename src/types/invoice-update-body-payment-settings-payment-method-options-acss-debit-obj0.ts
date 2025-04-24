import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./invoice-update-body-payment-settings-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandateOptions?:
      | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
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

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  };
