import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyVerificationDocument
 */
export type AccountPersonUpdateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyVerificationDocument
 */
const SchemaIn$AccountPersonUpdateBodyVerificationDocument: z.ZodType<
  AccountPersonUpdateBodyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyVerificationDocument
 */
const SchemaOut$AccountPersonUpdateBodyVerificationDocument: z.ZodType<
  External$AccountPersonUpdateBodyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyVerificationDocument // the object to be transformed
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

export const Schemas$AccountPersonUpdateBodyVerificationDocument = {
  in: SchemaIn$AccountPersonUpdateBodyVerificationDocument,
  out: SchemaOut$AccountPersonUpdateBodyVerificationDocument,
};
