import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./invoice-create-body-payment-settings-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandateOptions?:
      | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
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

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  };
