import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions,
} from "./setup-intent-update-body-payment-method-options-bacs-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit = {
  mandateOptions?:
    | SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit = {
  mandate_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit,
};
