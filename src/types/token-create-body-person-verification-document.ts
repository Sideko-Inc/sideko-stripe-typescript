import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonVerificationDocument
 */
export type TokenCreateBodyPersonVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonVerificationDocument
 */
const SchemaIn$TokenCreateBodyPersonVerificationDocument: z.ZodType<
  TokenCreateBodyPersonVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonVerificationDocument
 */
const SchemaOut$TokenCreateBodyPersonVerificationDocument: z.ZodType<
  External$TokenCreateBodyPersonVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonVerificationDocument // the object to be transformed
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

export const Schemas$TokenCreateBodyPersonVerificationDocument = {
  in: SchemaIn$TokenCreateBodyPersonVerificationDocument,
  out: SchemaOut$TokenCreateBodyPersonVerificationDocument,
};
