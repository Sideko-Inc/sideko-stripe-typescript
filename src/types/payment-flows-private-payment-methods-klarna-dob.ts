import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsKlarnaDob = {
  /**
   * The day of birth, between 1 and 31.
   */
  day?: number | null | undefined;
  /**
   * The month of birth, between 1 and 12.
   */
  month?: number | null | undefined;
  /**
   * The four-digit year of birth.
   */
  year?: number | null | undefined;
};

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsKlarnaDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsKlarnaDob = {
  day?: number | null | undefined;
  month?: number | null | undefined;
  year?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsKlarnaDob
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsKlarnaDob: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsKlarnaDob
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsKlarnaDob: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsKlarnaDob, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsKlarnaDob // the object to be transformed
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsKlarnaDob = {
  in: SchemaIn$PaymentFlowsPrivatePaymentMethodsKlarnaDob,
  out: SchemaOut$PaymentFlowsPrivatePaymentMethodsKlarnaDob,
};
