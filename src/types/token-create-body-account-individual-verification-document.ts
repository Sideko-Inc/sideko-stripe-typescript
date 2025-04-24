import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualVerificationDocument
 */
export type TokenCreateBodyAccountIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualVerificationDocument
 */
const SchemaIn$TokenCreateBodyAccountIndividualVerificationDocument: z.ZodType<
  TokenCreateBodyAccountIndividualVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualVerificationDocument
 */
const SchemaOut$TokenCreateBodyAccountIndividualVerificationDocument: z.ZodType<
  External$TokenCreateBodyAccountIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualVerificationDocument // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountIndividualVerificationDocument = {
  in: SchemaIn$TokenCreateBodyAccountIndividualVerificationDocument,
  out: SchemaOut$TokenCreateBodyAccountIndividualVerificationDocument,
};
