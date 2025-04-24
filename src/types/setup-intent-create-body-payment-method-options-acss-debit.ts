import {
  External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
} from "./setup-intent-create-body-payment-method-options-acss-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsAcssDebit
 */
export type SetupIntentCreateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandateOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandate_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandate_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebit // the object to be transformed
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandateOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions.out.optional(),
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

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit,
};
