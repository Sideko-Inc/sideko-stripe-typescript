import {
  External$IssuingCardholderUpdateBodyIndividualVerificationDocument,
  IssuingCardholderUpdateBodyIndividualVerificationDocument,
  Schemas$IssuingCardholderUpdateBodyIndividualVerificationDocument,
} from "./issuing-cardholder-update-body-individual-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBodyIndividualVerification
 */
export type IssuingCardholderUpdateBodyIndividualVerification = {
  document?:
    | IssuingCardholderUpdateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyIndividualVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyIndividualVerification = {
  document?:
    | External$IssuingCardholderUpdateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyIndividualVerification
 */
const SchemaIn$IssuingCardholderUpdateBodyIndividualVerification: z.ZodType<
  IssuingCardholderUpdateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document:
      Schemas$IssuingCardholderUpdateBodyIndividualVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyIndividualVerification
 */
const SchemaOut$IssuingCardholderUpdateBodyIndividualVerification: z.ZodType<
  External$IssuingCardholderUpdateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyIndividualVerification // the object to be transformed
> = z
  .object({
    document:
      Schemas$IssuingCardholderUpdateBodyIndividualVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyIndividualVerification = {
  in: SchemaIn$IssuingCardholderUpdateBodyIndividualVerification,
  out: SchemaOut$IssuingCardholderUpdateBodyIndividualVerification,
};
