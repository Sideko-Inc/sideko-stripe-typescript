import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions,
} from "./setup-intent-confirm-body-payment-method-options-acss-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandateOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandate_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandate_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit // the object to be transformed
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandateOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebitMandateOptions.out.optional(),
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit,
};
