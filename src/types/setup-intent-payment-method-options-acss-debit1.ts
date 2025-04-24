import {
  External$SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit,
  Schemas$SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit,
  SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit,
} from "./setup-intent-payment-method-options-mandate-options-acss-debit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsAcssDebit1 = {
  /**
   * Currency supported by the bank account
   */
  currency?: ("cad" | "usd") | null | undefined;
  mandateOptions?:
    | SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit
    | undefined;
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsAcssDebit1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsAcssDebit1 = {
  currency?: ("cad" | "usd") | null | undefined;
  mandate_options?:
    | External$SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsAcssDebit1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsAcssDebit1: z.ZodType<
  SetupIntentPaymentMethodOptionsAcssDebit1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.enum(["cad", "usd"]).nullable().optional(),
    mandate_options:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsAcssDebit1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsAcssDebit1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsAcssDebit1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsAcssDebit1 // the object to be transformed
> = z
  .object({
    currency: z.enum(["cad", "usd"]).nullable().optional(),
    mandateOptions:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.out.optional(),
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

export const Schemas$SetupIntentPaymentMethodOptionsAcssDebit1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsAcssDebit1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsAcssDebit1,
};
