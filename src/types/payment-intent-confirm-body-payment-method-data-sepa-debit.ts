import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataSepaDebit
 */
export type PaymentIntentConfirmBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit,
};
