import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyVerificationAdditionalDocument
 */
export type AccountPersonCreateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyVerificationAdditionalDocument
 */
const SchemaIn$AccountPersonCreateBodyVerificationAdditionalDocument: z.ZodType<
  AccountPersonCreateBodyVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyVerificationAdditionalDocument
 */
const SchemaOut$AccountPersonCreateBodyVerificationAdditionalDocument: z.ZodType<
  External$AccountPersonCreateBodyVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$AccountPersonCreateBodyVerificationAdditionalDocument = {
  in: SchemaIn$AccountPersonCreateBodyVerificationAdditionalDocument,
  out: SchemaOut$AccountPersonCreateBodyVerificationAdditionalDocument,
};
