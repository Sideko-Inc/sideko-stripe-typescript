import {
  AccountCreateBodyIndividualVerificationAdditionalDocument,
  External$AccountCreateBodyIndividualVerificationAdditionalDocument,
  Schemas$AccountCreateBodyIndividualVerificationAdditionalDocument,
} from "./account-create-body-individual-verification-additional-document";
import {
  AccountCreateBodyIndividualVerificationDocument,
  External$AccountCreateBodyIndividualVerificationDocument,
  Schemas$AccountCreateBodyIndividualVerificationDocument,
} from "./account-create-body-individual-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyIndividualVerification
 */
export type AccountCreateBodyIndividualVerification = {
  additionalDocument?:
    | AccountCreateBodyIndividualVerificationAdditionalDocument
    | undefined;
  document?: AccountCreateBodyIndividualVerificationDocument | undefined;
};

/**
 * @internal
 * AccountCreateBodyIndividualVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividualVerification = {
  additional_document?:
    | External$AccountCreateBodyIndividualVerificationAdditionalDocument
    | undefined;
  document?:
    | External$AccountCreateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividualVerification
 */
const SchemaIn$AccountCreateBodyIndividualVerification: z.ZodType<
  AccountCreateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountCreateBodyIndividualVerificationAdditionalDocument.in.optional(),
    document:
      Schemas$AccountCreateBodyIndividualVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividualVerification
 */
const SchemaOut$AccountCreateBodyIndividualVerification: z.ZodType<
  External$AccountCreateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividualVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountCreateBodyIndividualVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountCreateBodyIndividualVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountCreateBodyIndividualVerification = {
  in: SchemaIn$AccountCreateBodyIndividualVerification,
  out: SchemaOut$AccountCreateBodyIndividualVerification,
};
