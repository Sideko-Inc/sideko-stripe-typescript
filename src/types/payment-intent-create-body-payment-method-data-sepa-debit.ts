import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataSepaDebit
 */
export type PaymentIntentCreateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataSepaDebit = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataSepaDebit,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataSepaDebit,
};
