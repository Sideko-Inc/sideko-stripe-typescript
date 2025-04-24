import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataKlarnaDob
 */
export type PaymentIntentCreateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataKlarnaDob
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataKlarnaDob // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob,
};
