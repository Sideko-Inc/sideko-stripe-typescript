import {
  External$SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit,
  Schemas$SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit,
  SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit,
} from "./setup-intent-payment-method-options-mandate-options-bacs-debit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsBacsDebit1 = {
  mandateOptions?:
    | SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit
    | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsBacsDebit1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsBacsDebit1 = {
  mandate_options?:
    | External$SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsBacsDebit1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsBacsDebit1: z.ZodType<
  SetupIntentPaymentMethodOptionsBacsDebit1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsBacsDebit1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsBacsDebit1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsBacsDebit1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsBacsDebit1 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptionsBacsDebit1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsBacsDebit1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsBacsDebit1,
};
