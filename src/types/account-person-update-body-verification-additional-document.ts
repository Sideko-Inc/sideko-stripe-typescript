import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyVerificationAdditionalDocument
 */
export type AccountPersonUpdateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyVerificationAdditionalDocument
 */
const SchemaIn$AccountPersonUpdateBodyVerificationAdditionalDocument: z.ZodType<
  AccountPersonUpdateBodyVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyVerificationAdditionalDocument
 */
const SchemaOut$AccountPersonUpdateBodyVerificationAdditionalDocument: z.ZodType<
  External$AccountPersonUpdateBodyVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$AccountPersonUpdateBodyVerificationAdditionalDocument = {
  in: SchemaIn$AccountPersonUpdateBodyVerificationAdditionalDocument,
  out: SchemaOut$AccountPersonUpdateBodyVerificationAdditionalDocument,
};
