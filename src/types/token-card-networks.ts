import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TokenCardNetworks = {
  /**
   * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
   */
  preferred?: string | null | undefined;
};

/**
 * @internal
 * TokenCardNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCardNetworks = {
  preferred?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCardNetworks
 */
const SchemaIn$TokenCardNetworks: z.ZodType<
  TokenCardNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCardNetworks
 */
const SchemaOut$TokenCardNetworks: z.ZodType<
  External$TokenCardNetworks, // output type of this zod object
  z.ZodTypeDef,
  TokenCardNetworks // the object to be transformed
> = z
  .object({
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

export const Schemas$TokenCardNetworks = {
  in: SchemaIn$TokenCardNetworks,
  out: SchemaOut$TokenCardNetworks,
};
