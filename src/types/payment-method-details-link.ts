import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsLink = {
  /**
   * Two-letter ISO code representing the funding source country beneath the Link payment.
   * You could use this attribute to get a sense of international fees.
   */
  country?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsLink = {
  country?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsLink
 */
const SchemaIn$PaymentMethodDetailsLink: z.ZodType<
  PaymentMethodDetailsLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsLink
 */
const SchemaOut$PaymentMethodDetailsLink: z.ZodType<
  External$PaymentMethodDetailsLink, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsLink // the object to be transformed
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentMethodDetailsLink = {
  in: SchemaIn$PaymentMethodDetailsLink,
  out: SchemaOut$PaymentMethodDetailsLink,
};
