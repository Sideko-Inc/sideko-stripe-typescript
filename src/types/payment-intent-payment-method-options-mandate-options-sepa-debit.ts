import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit = {
  /**
   * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
   */
  referencePrefix?: string | undefined;
};

/**
 * @internal
 * PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit =
  {
    reference_prefix?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit
 */
const SchemaIn$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit: z.ZodType<
  PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference_prefix: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference_prefix: "referencePrefix",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit
 */
const SchemaOut$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit: z.ZodType<
  External$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit // the object to be transformed
> = z
  .object({
    referencePrefix: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit =
  {
    in: SchemaIn$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit,
    out: SchemaOut$PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit,
  };
