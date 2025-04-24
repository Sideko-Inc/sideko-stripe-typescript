import {
  AccountPersonCreateBodyVerificationAdditionalDocument,
  External$AccountPersonCreateBodyVerificationAdditionalDocument,
  Schemas$AccountPersonCreateBodyVerificationAdditionalDocument,
} from "./account-person-create-body-verification-additional-document";
import {
  AccountPersonCreateBodyVerificationDocument,
  External$AccountPersonCreateBodyVerificationDocument,
  Schemas$AccountPersonCreateBodyVerificationDocument,
} from "./account-person-create-body-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The person's verification status.
 */
export type AccountPersonCreateBodyVerification = {
  additionalDocument?:
    | AccountPersonCreateBodyVerificationAdditionalDocument
    | undefined;
  document?: AccountPersonCreateBodyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyVerification = {
  additional_document?:
    | External$AccountPersonCreateBodyVerificationAdditionalDocument
    | undefined;
  document?: External$AccountPersonCreateBodyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyVerification
 */
const SchemaIn$AccountPersonCreateBodyVerification: z.ZodType<
  AccountPersonCreateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountPersonCreateBodyVerificationAdditionalDocument.in.optional(),
    document: Schemas$AccountPersonCreateBodyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyVerification
 */
const SchemaOut$AccountPersonCreateBodyVerification: z.ZodType<
  External$AccountPersonCreateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountPersonCreateBodyVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountPersonCreateBodyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountPersonCreateBodyVerification = {
  in: SchemaIn$AccountPersonCreateBodyVerification,
  out: SchemaOut$AccountPersonCreateBodyVerification,
};
