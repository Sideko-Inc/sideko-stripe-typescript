import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions,
} from "./setup-intent-update-body-payment-method-options-sepa-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit = {
  mandateOptions?:
    | SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit = {
  mandate_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit,
};
