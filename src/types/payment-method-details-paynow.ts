import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsPaynow = {
  /**
   * Reference number associated with this PayNow payment
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsPaynow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsPaynow = {
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsPaynow
 */
const SchemaIn$PaymentMethodDetailsPaynow: z.ZodType<
  PaymentMethodDetailsPaynow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsPaynow
 */
const SchemaOut$PaymentMethodDetailsPaynow: z.ZodType<
  External$PaymentMethodDetailsPaynow, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsPaynow // the object to be transformed
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

export const Schemas$PaymentMethodDetailsPaynow = {
  in: SchemaIn$PaymentMethodDetailsPaynow,
  out: SchemaOut$PaymentMethodDetailsPaynow,
};
