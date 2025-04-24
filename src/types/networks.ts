import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Networks = {
  /**
   * All networks available for selection via [payment_method_options.card.network](/api/payment_intents/confirm#confirm_payment_intent-payment_method_options-card-network).
   */
  available: string[];
  /**
   * The preferred network for co-branded cards. Can be `cartes_bancaires`, `mastercard`, `visa` or `invalid_preference` if requested network is not valid for the card.
   */
  preferred?: string | null | undefined;
};

/**
 * @internal
 * Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Networks = {
  available: string[];
  preferred?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Networks
 */
const SchemaIn$Networks: z.ZodType<
  Networks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: z.array(z.string()),
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Networks
 */
const SchemaOut$Networks: z.ZodType<
  External$Networks, // output type of this zod object
  z.ZodTypeDef,
  Networks // the object to be transformed
> = z
  .object({
    available: z.array(z.string()),
    preferred: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      preferred: "preferred",
    });
  });

export const Schemas$Networks = {
  in: SchemaIn$Networks,
  out: SchemaOut$Networks,
};
