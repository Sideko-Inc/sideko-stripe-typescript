import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions,
} from "./setup-intent-update-body-payment-method-options-acss-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandateOptions?:
    | SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandate_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandate_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      mandate_options: "mandateOptions",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit // the object to be transformed
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandateOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebitMandateOptions.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      mandateOptions: "mandate_options",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit,
};
