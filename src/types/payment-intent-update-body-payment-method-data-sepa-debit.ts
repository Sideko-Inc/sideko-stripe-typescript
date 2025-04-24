import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataSepaDebit
 */
export type PaymentIntentUpdateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit = {
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataSepaDebit
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataSepaDebit, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataSepaDebit // the object to be transformed
> = z
  .object({
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      iban: "iban",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit,
};
