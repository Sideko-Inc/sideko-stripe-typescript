import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The PII this token represents.
 */
export type TokenCreateBodyPii = {
  idNumber?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyPii without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPii = {
  id_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPii
 */
const SchemaIn$TokenCreateBodyPii: z.ZodType<
  TokenCreateBodyPii, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id_number: "idNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPii
 */
const SchemaOut$TokenCreateBodyPii: z.ZodType<
  External$TokenCreateBodyPii, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPii // the object to be transformed
> = z
  .object({
    idNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      idNumber: "id_number",
    });
  });

export const Schemas$TokenCreateBodyPii = {
  in: SchemaIn$TokenCreateBodyPii,
  out: SchemaOut$TokenCreateBodyPii,
};
