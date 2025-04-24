import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The updated CVC value this token represents.
 */
export type TokenCreateBodyCvcUpdate = {
  cvc: string;
};

/**
 * @internal
 * TokenCreateBodyCvcUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyCvcUpdate = {
  cvc: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyCvcUpdate
 */
const SchemaIn$TokenCreateBodyCvcUpdate: z.ZodType<
  TokenCreateBodyCvcUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cvc: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvc: "cvc",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyCvcUpdate
 */
const SchemaOut$TokenCreateBodyCvcUpdate: z.ZodType<
  External$TokenCreateBodyCvcUpdate, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyCvcUpdate // the object to be transformed
> = z
  .object({
    cvc: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvc: "cvc",
    });
  });

export const Schemas$TokenCreateBodyCvcUpdate = {
  in: SchemaIn$TokenCreateBodyCvcUpdate,
  out: SchemaOut$TokenCreateBodyCvcUpdate,
};
