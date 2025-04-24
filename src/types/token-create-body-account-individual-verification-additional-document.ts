import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualVerificationAdditionalDocument
 */
export type TokenCreateBodyAccountIndividualVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualVerificationAdditionalDocument =
  {
    back?: string | undefined;
    front?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualVerificationAdditionalDocument
 */
const SchemaIn$TokenCreateBodyAccountIndividualVerificationAdditionalDocument: z.ZodType<
  TokenCreateBodyAccountIndividualVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualVerificationAdditionalDocument
 */
const SchemaOut$TokenCreateBodyAccountIndividualVerificationAdditionalDocument: z.ZodType<
  External$TokenCreateBodyAccountIndividualVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountIndividualVerificationAdditionalDocument =
  {
    in: SchemaIn$TokenCreateBodyAccountIndividualVerificationAdditionalDocument,
    out: SchemaOut$TokenCreateBodyAccountIndividualVerificationAdditionalDocument,
  };
