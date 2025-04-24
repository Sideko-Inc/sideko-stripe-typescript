import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
export type PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().int(),
    month: z.number().int(),
    year: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob // the object to be transformed
> = z
  .object({
    day: z.number().int(),
    month: z.number().int(),
    year: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob,
};
