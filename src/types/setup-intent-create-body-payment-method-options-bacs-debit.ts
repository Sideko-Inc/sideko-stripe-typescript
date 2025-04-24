import {
  External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
} from "./setup-intent-create-body-payment-method-options-bacs-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsBacsDebit
 */
export type SetupIntentCreateBodyPaymentMethodOptionsBacsDebit = {
  mandateOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit = {
  mandate_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit,
};
