import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions,
} from "./setup-intent-confirm-body-payment-method-options-bacs-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit = {
  mandateOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit = {
  mandate_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit,
};
