import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonVerificationAdditionalDocument
 */
export type TokenCreateBodyPersonVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonVerificationAdditionalDocument
 */
const SchemaIn$TokenCreateBodyPersonVerificationAdditionalDocument: z.ZodType<
  TokenCreateBodyPersonVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonVerificationAdditionalDocument
 */
const SchemaOut$TokenCreateBodyPersonVerificationAdditionalDocument: z.ZodType<
  External$TokenCreateBodyPersonVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$TokenCreateBodyPersonVerificationAdditionalDocument = {
  in: SchemaIn$TokenCreateBodyPersonVerificationAdditionalDocument,
  out: SchemaOut$TokenCreateBodyPersonVerificationAdditionalDocument,
};
