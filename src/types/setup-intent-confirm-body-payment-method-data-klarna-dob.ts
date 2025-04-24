import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataKlarnaDob
 */
export type SetupIntentConfirmBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataKlarnaDob
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataKlarnaDob, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataKlarnaDob // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataKlarnaDob,
};
