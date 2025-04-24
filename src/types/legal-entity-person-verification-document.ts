import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityPersonVerificationDocument = {
  /**
   * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  back?: (string | File) | undefined;
  /**
   * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
   */
  details?: string | null | undefined;
  /**
   * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
   */
  detailsCode?: string | null | undefined;
  /**
   * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  front?: (string | File) | undefined;
};

/**
 * @internal
 * LegalEntityPersonVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityPersonVerificationDocument = {
  back?: (string | External$File) | undefined;
  details?: string | null | undefined;
  details_code?: string | null | undefined;
  front?: (string | External$File) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityPersonVerificationDocument
 */
const SchemaIn$LegalEntityPersonVerificationDocument: z.ZodType<
  LegalEntityPersonVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    back: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    details: z.string().nullable().optional(),
    details_code: z.string().nullable().optional(),
    front: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      details: "details",
      details_code: "detailsCode",
      front: "front",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityPersonVerificationDocument
 */
const SchemaOut$LegalEntityPersonVerificationDocument: z.ZodType<
  External$LegalEntityPersonVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityPersonVerificationDocument // the object to be transformed
> = z
  .object({
    back: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    details: z.string().nullable().optional(),
    detailsCode: z.string().nullable().optional(),
    front: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      details: "details",
      detailsCode: "details_code",
      front: "front",
    });
  });

export const Schemas$LegalEntityPersonVerificationDocument = {
  in: SchemaIn$LegalEntityPersonVerificationDocument,
  out: SchemaOut$LegalEntityPersonVerificationDocument,
};
