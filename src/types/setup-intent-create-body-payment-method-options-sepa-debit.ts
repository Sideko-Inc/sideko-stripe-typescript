import {
  External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
} from "./setup-intent-create-body-payment-method-options-sepa-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsSepaDebit
 */
export type SetupIntentCreateBodyPaymentMethodOptionsSepaDebit = {
  mandateOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit = {
  mandate_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit,
};
