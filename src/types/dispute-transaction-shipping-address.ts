import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeTransactionShippingAddress = {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string | null | undefined;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | null | undefined;
  /**
   * Address line 1 (e.g., street, PO Box, or company name).
   */
  line1?: string | null | undefined;
  /**
   * Address line 2 (e.g., apartment, suite, unit, or building).
   */
  line2?: string | null | undefined;
  /**
   * ZIP or postal code.
   */
  postalCode?: string | null | undefined;
  /**
   * State, county, province, or region.
   */
  state?: string | null | undefined;
};

/**
 * @internal
 * DisputeTransactionShippingAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeTransactionShippingAddress = {
  city?: string | null | undefined;
  country?: string | null | undefined;
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  postal_code?: string | null | undefined;
  state?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeTransactionShippingAddress
 */
const SchemaIn$DisputeTransactionShippingAddress: z.ZodType<
  DisputeTransactionShippingAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    line1: z.string().nullable().optional(),
    line2: z.string().nullable().optional(),
    postal_code: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postal_code: "postalCode",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeTransactionShippingAddress
 */
const SchemaOut$DisputeTransactionShippingAddress: z.ZodType<
  External$DisputeTransactionShippingAddress, // output type of this zod object
  z.ZodTypeDef,
  DisputeTransactionShippingAddress // the object to be transformed
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    line1: z.string().nullable().optional(),
    line2: z.string().nullable().optional(),
    postalCode: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postalCode: "postal_code",
      state: "state",
    });
  });

export const Schemas$DisputeTransactionShippingAddress = {
  in: SchemaIn$DisputeTransactionShippingAddress,
  out: SchemaOut$DisputeTransactionShippingAddress,
};
