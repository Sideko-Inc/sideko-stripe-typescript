import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBodyIndividualVerificationDocument
 */
export type IssuingCardholderUpdateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyIndividualVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyIndividualVerificationDocument =
  {
    back?: string | undefined;
    front?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyIndividualVerificationDocument
 */
const SchemaIn$IssuingCardholderUpdateBodyIndividualVerificationDocument: z.ZodType<
  IssuingCardholderUpdateBodyIndividualVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyIndividualVerificationDocument
 */
const SchemaOut$IssuingCardholderUpdateBodyIndividualVerificationDocument: z.ZodType<
  External$IssuingCardholderUpdateBodyIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyIndividualVerificationDocument // the object to be transformed
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

export const Schemas$IssuingCardholderUpdateBodyIndividualVerificationDocument =
  {
    in: SchemaIn$IssuingCardholderUpdateBodyIndividualVerificationDocument,
    out: SchemaOut$IssuingCardholderUpdateBodyIndividualVerificationDocument,
  };
