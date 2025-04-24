import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBodyKlarnaDob
 */
export type PaymentMethodCreateBodyKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * PaymentMethodCreateBodyKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyKlarnaDob
 */
const SchemaIn$PaymentMethodCreateBodyKlarnaDob: z.ZodType<
  PaymentMethodCreateBodyKlarnaDob, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyKlarnaDob
 */
const SchemaOut$PaymentMethodCreateBodyKlarnaDob: z.ZodType<
  External$PaymentMethodCreateBodyKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyKlarnaDob // the object to be transformed
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

export const Schemas$PaymentMethodCreateBodyKlarnaDob = {
  in: SchemaIn$PaymentMethodCreateBodyKlarnaDob,
  out: SchemaOut$PaymentMethodCreateBodyKlarnaDob,
};
