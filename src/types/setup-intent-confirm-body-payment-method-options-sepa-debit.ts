import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions,
} from "./setup-intent-confirm-body-payment-method-options-sepa-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit = {
  mandateOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit = {
  mandate_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit,
};
