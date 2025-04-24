import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataKlarnaDob
 */
export type SetupIntentCreateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataKlarnaDob
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataKlarnaDob
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataKlarnaDob // the object to be transformed
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

export const Schemas$SetupIntentCreateBodyPaymentMethodDataKlarnaDob = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataKlarnaDob,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataKlarnaDob,
};
