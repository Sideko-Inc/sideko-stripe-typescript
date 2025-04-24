import {
  AccountPeopleUpdateBodyVerificationAdditionalDocument,
  External$AccountPeopleUpdateBodyVerificationAdditionalDocument,
  Schemas$AccountPeopleUpdateBodyVerificationAdditionalDocument,
} from "./account-people-update-body-verification-additional-document";
import {
  AccountPeopleUpdateBodyVerificationDocument,
  External$AccountPeopleUpdateBodyVerificationDocument,
  Schemas$AccountPeopleUpdateBodyVerificationDocument,
} from "./account-people-update-body-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The person's verification status.
 */
export type AccountPeopleUpdateBodyVerification = {
  additionalDocument?:
    | AccountPeopleUpdateBodyVerificationAdditionalDocument
    | undefined;
  document?: AccountPeopleUpdateBodyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyVerification = {
  additional_document?:
    | External$AccountPeopleUpdateBodyVerificationAdditionalDocument
    | undefined;
  document?: External$AccountPeopleUpdateBodyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyVerification
 */
const SchemaIn$AccountPeopleUpdateBodyVerification: z.ZodType<
  AccountPeopleUpdateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountPeopleUpdateBodyVerificationAdditionalDocument.in.optional(),
    document: Schemas$AccountPeopleUpdateBodyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyVerification
 */
const SchemaOut$AccountPeopleUpdateBodyVerification: z.ZodType<
  External$AccountPeopleUpdateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountPeopleUpdateBodyVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountPeopleUpdateBodyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountPeopleUpdateBodyVerification = {
  in: SchemaIn$AccountPeopleUpdateBodyVerification,
  out: SchemaOut$AccountPeopleUpdateBodyVerification,
};
