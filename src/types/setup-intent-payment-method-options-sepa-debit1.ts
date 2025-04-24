import {
  External$SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit,
  Schemas$SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit,
  SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit,
} from "./setup-intent-payment-method-options-mandate-options-sepa-debit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsSepaDebit1 = {
  mandateOptions?:
    | SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit
    | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsSepaDebit1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsSepaDebit1 = {
  mandate_options?:
    | External$SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsSepaDebit1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsSepaDebit1: z.ZodType<
  SetupIntentPaymentMethodOptionsSepaDebit1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsSepaDebit1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsSepaDebit1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsSepaDebit1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsSepaDebit1 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptionsSepaDebit1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsSepaDebit1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsSepaDebit1,
};
