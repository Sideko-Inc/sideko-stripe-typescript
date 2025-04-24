import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InternalCard = {
  /**
   * Brand of the card used in the transaction
   */
  brand?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country of the card
   */
  country?: string | null | undefined;
  /**
   * Two digit number representing the card's expiration month
   */
  expMonth?: number | null | undefined;
  /**
   * Two digit number representing the card's expiration year
   */
  expYear?: number | null | undefined;
  /**
   * The last 4 digits of the card
   */
  last4?: string | null | undefined;
};

/**
 * @internal
 * InternalCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InternalCard = {
  brand?: string | null | undefined;
  country?: string | null | undefined;
  exp_month?: number | null | undefined;
  exp_year?: number | null | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InternalCard
 */
const SchemaIn$InternalCard: z.ZodType<
  InternalCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    exp_month: z.number().int().nullable().optional(),
    exp_year: z.number().int().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      country: "country",
      exp_month: "expMonth",
      exp_year: "expYear",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InternalCard
 */
const SchemaOut$InternalCard: z.ZodType<
  External$InternalCard, // output type of this zod object
  z.ZodTypeDef,
  InternalCard // the object to be transformed
> = z
  .object({
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    expMonth: z.number().int().nullable().optional(),
    expYear: z.number().int().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      country: "country",
      expMonth: "exp_month",
      expYear: "exp_year",
      last4: "last4",
    });
  });

export const Schemas$InternalCard = {
  in: SchemaIn$InternalCard,
  out: SchemaOut$InternalCard,
};
