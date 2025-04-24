import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityJapanAddress = {
  /**
   * City/Ward.
   */
  city?: string | null | undefined;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | null | undefined;
  /**
   * Block/Building number.
   */
  line1?: string | null | undefined;
  /**
   * Building details.
   */
  line2?: string | null | undefined;
  /**
   * ZIP or postal code.
   */
  postalCode?: string | null | undefined;
  /**
   * Prefecture.
   */
  state?: string | null | undefined;
  /**
   * Town/cho-me.
   */
  town?: string | null | undefined;
};

/**
 * @internal
 * LegalEntityJapanAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityJapanAddress = {
  city?: string | null | undefined;
  country?: string | null | undefined;
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  postal_code?: string | null | undefined;
  state?: string | null | undefined;
  town?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityJapanAddress
 */
const SchemaIn$LegalEntityJapanAddress: z.ZodType<
  LegalEntityJapanAddress, // output type of this zod object
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
    town: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postal_code: "postalCode",
      state: "state",
      town: "town",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityJapanAddress
 */
const SchemaOut$LegalEntityJapanAddress: z.ZodType<
  External$LegalEntityJapanAddress, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityJapanAddress // the object to be transformed
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    line1: z.string().nullable().optional(),
    line2: z.string().nullable().optional(),
    postalCode: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    town: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postalCode: "postal_code",
      state: "state",
      town: "town",
    });
  });

export const Schemas$LegalEntityJapanAddress = {
  in: SchemaIn$LegalEntityJapanAddress,
  out: SchemaOut$LegalEntityJapanAddress,
};
