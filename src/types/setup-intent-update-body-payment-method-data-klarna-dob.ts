import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
export type SetupIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataKlarnaDob // the object to be transformed
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataKlarnaDob,
};
