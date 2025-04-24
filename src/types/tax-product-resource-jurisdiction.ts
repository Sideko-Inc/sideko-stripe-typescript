import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceJurisdiction = {
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * A human-readable name for the jurisdiction imposing the tax.
   */
  displayName: string;
  /**
   * Indicates the level of the jurisdiction imposing the tax.
   */
  level: "city" | "country" | "county" | "district" | "state";
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string | null | undefined;
};

/**
 * @internal
 * TaxProductResourceJurisdiction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceJurisdiction = {
  country: string;
  display_name: string;
  level: "city" | "country" | "county" | "district" | "state";
  state?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceJurisdiction
 */
const SchemaIn$TaxProductResourceJurisdiction: z.ZodType<
  TaxProductResourceJurisdiction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string(),
    display_name: z.string(),
    level: z.enum(["city", "country", "county", "district", "state"]),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      display_name: "displayName",
      level: "level",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceJurisdiction
 */
const SchemaOut$TaxProductResourceJurisdiction: z.ZodType<
  External$TaxProductResourceJurisdiction, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceJurisdiction // the object to be transformed
> = z
  .object({
    country: z.string(),
    displayName: z.string(),
    level: z.enum(["city", "country", "county", "district", "state"]),
    state: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      displayName: "display_name",
      level: "level",
      state: "state",
    });
  });

export const Schemas$TaxProductResourceJurisdiction = {
  in: SchemaIn$TaxProductResourceJurisdiction,
  out: SchemaOut$TaxProductResourceJurisdiction,
};
