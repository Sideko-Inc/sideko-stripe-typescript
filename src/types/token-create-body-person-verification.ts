import {
  External$TokenCreateBodyPersonVerificationAdditionalDocument,
  Schemas$TokenCreateBodyPersonVerificationAdditionalDocument,
  TokenCreateBodyPersonVerificationAdditionalDocument,
} from "./token-create-body-person-verification-additional-document";
import {
  External$TokenCreateBodyPersonVerificationDocument,
  Schemas$TokenCreateBodyPersonVerificationDocument,
  TokenCreateBodyPersonVerificationDocument,
} from "./token-create-body-person-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonVerification
 */
export type TokenCreateBodyPersonVerification = {
  additionalDocument?:
    | TokenCreateBodyPersonVerificationAdditionalDocument
    | undefined;
  document?: TokenCreateBodyPersonVerificationDocument | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonVerification = {
  additional_document?:
    | External$TokenCreateBodyPersonVerificationAdditionalDocument
    | undefined;
  document?: External$TokenCreateBodyPersonVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonVerification
 */
const SchemaIn$TokenCreateBodyPersonVerification: z.ZodType<
  TokenCreateBodyPersonVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document:
      Schemas$TokenCreateBodyPersonVerificationAdditionalDocument.in.optional(),
    document: Schemas$TokenCreateBodyPersonVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonVerification
 */
const SchemaOut$TokenCreateBodyPersonVerification: z.ZodType<
  External$TokenCreateBodyPersonVerification, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonVerification // the object to be transformed
> = z
  .object({
    additionalDocument:
      Schemas$TokenCreateBodyPersonVerificationAdditionalDocument.out.optional(),
    document: Schemas$TokenCreateBodyPersonVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      document: "document",
    });
  });

export const Schemas$TokenCreateBodyPersonVerification = {
  in: SchemaIn$TokenCreateBodyPersonVerification,
  out: SchemaOut$TokenCreateBodyPersonVerification,
};
