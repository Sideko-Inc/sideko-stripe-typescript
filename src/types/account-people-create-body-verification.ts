import {
  AccountPeopleCreateBodyVerificationAdditionalDocument,
  External$AccountPeopleCreateBodyVerificationAdditionalDocument,
  Schemas$AccountPeopleCreateBodyVerificationAdditionalDocument,
} from "./account-people-create-body-verification-additional-document";
import {
  AccountPeopleCreateBodyVerificationDocument,
  External$AccountPeopleCreateBodyVerificationDocument,
  Schemas$AccountPeopleCreateBodyVerificationDocument,
} from "./account-people-create-body-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The person's verification status.
 */
export type AccountPeopleCreateBodyVerification = {
  additionalDocument?:
    | AccountPeopleCreateBodyVerificationAdditionalDocument
    | undefined;
  document?: AccountPeopleCreateBodyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyVerification = {
  additional_document?:
    | External$AccountPeopleCreateBodyVerificationAdditionalDocument
    | undefined;
  document?: External$AccountPeopleCreateBodyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyVerification
 */
const SchemaIn$AccountPeopleCreateBodyVerification: z.ZodType<
  AccountPeopleCreateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$AccountPeopleCreateBodyVerificationAdditionalDocument.in.optional(),
    document: Schemas$AccountPeopleCreateBodyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyVerification
 */
const SchemaOut$AccountPeopleCreateBodyVerification: z.ZodType<
  External$AccountPeopleCreateBodyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$AccountPeopleCreateBodyVerificationAdditionalDocument.out.optional(),
    document:
      Schemas$AccountPeopleCreateBodyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$AccountPeopleCreateBodyVerification = {
  in: SchemaIn$AccountPeopleCreateBodyVerification,
  out: SchemaOut$AccountPeopleCreateBodyVerification,
};
