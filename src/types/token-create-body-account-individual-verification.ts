import {
  External$TokenCreateBodyAccountIndividualVerificationAdditionalDocument,
  Schemas$TokenCreateBodyAccountIndividualVerificationAdditionalDocument,
  TokenCreateBodyAccountIndividualVerificationAdditionalDocument,
} from "./token-create-body-account-individual-verification-additional-document";
import {
  External$TokenCreateBodyAccountIndividualVerificationDocument,
  Schemas$TokenCreateBodyAccountIndividualVerificationDocument,
  TokenCreateBodyAccountIndividualVerificationDocument,
} from "./token-create-body-account-individual-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualVerification
 */
export type TokenCreateBodyAccountIndividualVerification = {
  additionalDocument?:
    | TokenCreateBodyAccountIndividualVerificationAdditionalDocument
    | undefined;
  document?: TokenCreateBodyAccountIndividualVerificationDocument | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualVerification = {
  additional_document?:
    | External$TokenCreateBodyAccountIndividualVerificationAdditionalDocument
    | undefined;
  document?:
    | External$TokenCreateBodyAccountIndividualVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualVerification
 */
const SchemaIn$TokenCreateBodyAccountIndividualVerification: z.ZodType<
  TokenCreateBodyAccountIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$TokenCreateBodyAccountIndividualVerificationAdditionalDocument.in.optional(),
    document:
      Schemas$TokenCreateBodyAccountIndividualVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualVerification
 */
const SchemaOut$TokenCreateBodyAccountIndividualVerification: z.ZodType<
  External$TokenCreateBodyAccountIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$TokenCreateBodyAccountIndividualVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$TokenCreateBodyAccountIndividualVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$TokenCreateBodyAccountIndividualVerification = {
  in: SchemaIn$TokenCreateBodyAccountIndividualVerification,
  out: SchemaOut$TokenCreateBodyAccountIndividualVerification,
};
