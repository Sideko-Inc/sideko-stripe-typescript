import {
  External$IdentityVerificationSessionCreateBodyOptionsDocumentObj0,
  IdentityVerificationSessionCreateBodyOptionsDocumentObj0,
  Schemas$IdentityVerificationSessionCreateBodyOptionsDocumentObj0,
} from "./identity-verification-session-create-body-options-document-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A set of options for the session’s verification checks.
 */
export type IdentityVerificationSessionCreateBodyOptions = {
  document?:
    | (IdentityVerificationSessionCreateBodyOptionsDocumentObj0 | string)
    | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionCreateBodyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionCreateBodyOptions = {
  document?:
    | (
        | External$IdentityVerificationSessionCreateBodyOptionsDocumentObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionCreateBodyOptions
 */
const SchemaIn$IdentityVerificationSessionCreateBodyOptions: z.ZodType<
  IdentityVerificationSessionCreateBodyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: z
      .union([
        Schemas$IdentityVerificationSessionCreateBodyOptionsDocumentObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionCreateBodyOptions
 */
const SchemaOut$IdentityVerificationSessionCreateBodyOptions: z.ZodType<
  External$IdentityVerificationSessionCreateBodyOptions, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionCreateBodyOptions // the object to be transformed
> = z
  .object({
    document: z
      .union([
        Schemas$IdentityVerificationSessionCreateBodyOptionsDocumentObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$IdentityVerificationSessionCreateBodyOptions = {
  in: SchemaIn$IdentityVerificationSessionCreateBodyOptions,
  out: SchemaOut$IdentityVerificationSessionCreateBodyOptions,
};
