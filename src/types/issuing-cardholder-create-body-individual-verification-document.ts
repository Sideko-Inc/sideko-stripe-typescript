import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderCreateBodyIndividualVerificationDocument
 */
export type IssuingCardholderCreateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBodyIndividualVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyIndividualVerificationDocument =
  {
    back?: string | undefined;
    front?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyIndividualVerificationDocument
 */
const SchemaIn$IssuingCardholderCreateBodyIndividualVerificationDocument: z.ZodType<
  IssuingCardholderCreateBodyIndividualVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyIndividualVerificationDocument
 */
const SchemaOut$IssuingCardholderCreateBodyIndividualVerificationDocument: z.ZodType<
  External$IssuingCardholderCreateBodyIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyIndividualVerificationDocument // the object to be transformed
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

export const Schemas$IssuingCardholderCreateBodyIndividualVerificationDocument =
  {
    in: SchemaIn$IssuingCardholderCreateBodyIndividualVerificationDocument,
    out: SchemaOut$IssuingCardholderCreateBodyIndividualVerificationDocument,
  };
