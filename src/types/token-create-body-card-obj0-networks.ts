import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyCardObj0Networks
 */
export type TokenCreateBodyCardObj0Networks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * @internal
 * TokenCreateBodyCardObj0Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyCardObj0Networks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyCardObj0Networks
 */
const SchemaIn$TokenCreateBodyCardObj0Networks: z.ZodType<
  TokenCreateBodyCardObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyCardObj0Networks
 */
const SchemaOut$TokenCreateBodyCardObj0Networks: z.ZodType<
  External$TokenCreateBodyCardObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyCardObj0Networks // the object to be transformed
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

export const Schemas$TokenCreateBodyCardObj0Networks = {
  in: SchemaIn$TokenCreateBodyCardObj0Networks,
  out: SchemaOut$TokenCreateBodyCardObj0Networks,
};
