import {
  AccountPersonUpdateBodyVerificationAdditionalDocument,
  External$AccountPersonUpdateBodyVerificationAdditionalDocument,
  Schemas$AccountPersonUpdateBodyVerificationAdditionalDocument,
} from "./account-person-update-body-verification-additional-document";
import {
  AccountPersonUpdateBodyVerificationDocument,
  External$AccountPersonUpdateBodyVerificationDocument,
  Schemas$AccountPersonUpdateBodyVerificationDocument,
} from "./account-person-update-body-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The person's verification status.
 */
export type AccountPersonUpdateBodyVerification = {
  additionalDocument?:
    | AccountPersonUpdateBodyVerificationAdditionalDocument
    | undefined;
  document?: AccountPersonUpdateBodyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyVerification = {
  additional_document?:
    | External$AccountPersonUpdateBodyVerificationAdditionalDocument
    | undefined;
  document?: External$AccountPersonUpdateBodyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyVerification
 */
const SchemaIn$AccountPersonUpdateBodyVerification: z.ZodType<
  AccountPersonUpdateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountPersonUpdateBodyVerificationAdditionalDocument.in.optional(),
    document: Schemas$AccountPersonUpdateBodyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyVerification
 */
const SchemaOut$AccountPersonUpdateBodyVerification: z.ZodType<
  External$AccountPersonUpdateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountPersonUpdateBodyVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountPersonUpdateBodyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountPersonUpdateBodyVerification = {
  in: SchemaIn$AccountPersonUpdateBodyVerification,
  out: SchemaOut$AccountPersonUpdateBodyVerification,
};
