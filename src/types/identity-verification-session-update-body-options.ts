import {
  External$IdentityVerificationSessionUpdateBodyOptionsDocumentObj0,
  IdentityVerificationSessionUpdateBodyOptionsDocumentObj0,
  Schemas$IdentityVerificationSessionUpdateBodyOptionsDocumentObj0,
} from "./identity-verification-session-update-body-options-document-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A set of options for the session’s verification checks.
 */
export type IdentityVerificationSessionUpdateBodyOptions = {
  document?:
    | (IdentityVerificationSessionUpdateBodyOptionsDocumentObj0 | string)
    | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionUpdateBodyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionUpdateBodyOptions = {
  document?:
    | (
        | External$IdentityVerificationSessionUpdateBodyOptionsDocumentObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionUpdateBodyOptions
 */
const SchemaIn$IdentityVerificationSessionUpdateBodyOptions: z.ZodType<
  IdentityVerificationSessionUpdateBodyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: z
      .union([
        Schemas$IdentityVerificationSessionUpdateBodyOptionsDocumentObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionUpdateBodyOptions
 */
const SchemaOut$IdentityVerificationSessionUpdateBodyOptions: z.ZodType<
  External$IdentityVerificationSessionUpdateBodyOptions, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionUpdateBodyOptions // the object to be transformed
> = z
  .object({
    document: z
      .union([
        Schemas$IdentityVerificationSessionUpdateBodyOptionsDocumentObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$IdentityVerificationSessionUpdateBodyOptions = {
  in: SchemaIn$IdentityVerificationSessionUpdateBodyOptions,
  out: SchemaOut$IdentityVerificationSessionUpdateBodyOptions,
};
