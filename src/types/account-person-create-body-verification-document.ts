import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyVerificationDocument
 */
export type AccountPersonCreateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyVerificationDocument
 */
const SchemaIn$AccountPersonCreateBodyVerificationDocument: z.ZodType<
  AccountPersonCreateBodyVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyVerificationDocument
 */
const SchemaOut$AccountPersonCreateBodyVerificationDocument: z.ZodType<
  External$AccountPersonCreateBodyVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyVerificationDocument // the object to be transformed
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

export const Schemas$AccountPersonCreateBodyVerificationDocument = {
  in: SchemaIn$AccountPersonCreateBodyVerificationDocument,
  out: SchemaOut$AccountPersonCreateBodyVerificationDocument,
};
