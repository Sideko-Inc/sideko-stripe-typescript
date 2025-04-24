import {
  External$IssuingCardholderCreateBodyIndividualVerificationDocument,
  IssuingCardholderCreateBodyIndividualVerificationDocument,
  Schemas$IssuingCardholderCreateBodyIndividualVerificationDocument,
} from "./issuing-cardholder-create-body-individual-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderCreateBodyIndividualVerification
 */
export type IssuingCardholderCreateBodyIndividualVerification = {
  document?:
    | IssuingCardholderCreateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBodyIndividualVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyIndividualVerification = {
  document?:
    | External$IssuingCardholderCreateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyIndividualVerification
 */
const SchemaIn$IssuingCardholderCreateBodyIndividualVerification: z.ZodType<
  IssuingCardholderCreateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document:
      Schemas$IssuingCardholderCreateBodyIndividualVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyIndividualVerification
 */
const SchemaOut$IssuingCardholderCreateBodyIndividualVerification: z.ZodType<
  External$IssuingCardholderCreateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyIndividualVerification // the object to be transformed
> = z
  .object({
    document:
      Schemas$IssuingCardholderCreateBodyIndividualVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$IssuingCardholderCreateBodyIndividualVerification = {
  in: SchemaIn$IssuingCardholderCreateBodyIndividualVerification,
  out: SchemaOut$IssuingCardholderCreateBodyIndividualVerification,
};
