import {
  AccountUpdateBodyIndividualVerificationAdditionalDocument,
  External$AccountUpdateBodyIndividualVerificationAdditionalDocument,
  Schemas$AccountUpdateBodyIndividualVerificationAdditionalDocument,
} from "./account-update-body-individual-verification-additional-document";
import {
  AccountUpdateBodyIndividualVerificationDocument,
  External$AccountUpdateBodyIndividualVerificationDocument,
  Schemas$AccountUpdateBodyIndividualVerificationDocument,
} from "./account-update-body-individual-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualVerification
 */
export type AccountUpdateBodyIndividualVerification = {
  additionalDocument?:
    | AccountUpdateBodyIndividualVerificationAdditionalDocument
    | undefined;
  document?: AccountUpdateBodyIndividualVerificationDocument | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividualVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualVerification = {
  additional_document?:
    | External$AccountUpdateBodyIndividualVerificationAdditionalDocument
    | undefined;
  document?:
    | External$AccountUpdateBodyIndividualVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualVerification
 */
const SchemaIn$AccountUpdateBodyIndividualVerification: z.ZodType<
  AccountUpdateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountUpdateBodyIndividualVerificationAdditionalDocument.in.optional(),
    document:
      Schemas$AccountUpdateBodyIndividualVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualVerification
 */
const SchemaOut$AccountUpdateBodyIndividualVerification: z.ZodType<
  External$AccountUpdateBodyIndividualVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountUpdateBodyIndividualVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountUpdateBodyIndividualVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountUpdateBodyIndividualVerification = {
  in: SchemaIn$AccountUpdateBodyIndividualVerification,
  out: SchemaOut$AccountUpdateBodyIndividualVerification,
};
