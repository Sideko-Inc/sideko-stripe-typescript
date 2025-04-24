import {
  External$LegalEntityPersonVerificationDocument,
  LegalEntityPersonVerificationDocument,
  Schemas$LegalEntityPersonVerificationDocument,
} from "./legal-entity-person-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityPersonVerification = {
  additionalDocument?: LegalEntityPersonVerificationDocument | undefined;
  /**
   * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
   */
  details?: string | null | undefined;
  /**
   * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
   */
  detailsCode?: string | null | undefined;
  document?: LegalEntityPersonVerificationDocument | undefined;
  /**
   * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.
   */
  status: string;
};

/**
 * @internal
 * LegalEntityPersonVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityPersonVerification = {
  additional_document?:
    | External$LegalEntityPersonVerificationDocument
    | undefined;
  details?: string | null | undefined;
  details_code?: string | null | undefined;
  document?: External$LegalEntityPersonVerificationDocument | undefined;
  status: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityPersonVerification
 */
const SchemaIn$LegalEntityPersonVerification: z.ZodType<
  LegalEntityPersonVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_document: z.lazy(() =>
      Schemas$LegalEntityPersonVerificationDocument.in.optional(),
    ),
    details: z.string().nullable().optional(),
    details_code: z.string().nullable().optional(),
    document: z.lazy(() =>
      Schemas$LegalEntityPersonVerificationDocument.in.optional(),
    ),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_document: "additionalDocument",
      details: "details",
      details_code: "detailsCode",
      document: "document",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityPersonVerification
 */
const SchemaOut$LegalEntityPersonVerification: z.ZodType<
  External$LegalEntityPersonVerification, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityPersonVerification // the object to be transformed
> = z
  .object({
    additionalDocument: z.lazy(() =>
      Schemas$LegalEntityPersonVerificationDocument.out.optional(),
    ),
    details: z.string().nullable().optional(),
    detailsCode: z.string().nullable().optional(),
    document: z.lazy(() =>
      Schemas$LegalEntityPersonVerificationDocument.out.optional(),
    ),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalDocument: "additional_document",
      details: "details",
      detailsCode: "details_code",
      document: "document",
      status: "status",
    });
  });

export const Schemas$LegalEntityPersonVerification = {
  in: SchemaIn$LegalEntityPersonVerification,
  out: SchemaOut$LegalEntityPersonVerification,
};
