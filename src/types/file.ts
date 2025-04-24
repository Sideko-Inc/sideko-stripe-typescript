import { External$FileLinks, FileLinks, Schemas$FileLinks } from "./file-links";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This object represents files hosted on Stripe's servers. You can upload
 * files with the [create file](https://stripe.com/docs/api#create_file) request
 * (for example, when uploading dispute evidence). Stripe also
 * creates files independently (for example, the results of a [Sigma scheduled
 * query](#scheduled_queries)).
 *
 * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
 */
export type File = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The file expires and isn't available at this time in epoch seconds.
   */
  expiresAt?: number | null | undefined;
  /**
   * The suitable name for saving the file to a filesystem.
   */
  filename?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
   */
  links?: FileLinks | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "file";
  /**
   * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
   */
  purpose:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "document_provider_identity_document"
    | "finance_report_run"
    | "financial_account_statement"
    | "identity_document"
    | "identity_document_downloadable"
    | "issuing_regulatory_reporting"
    | "pci_document"
    | "selfie"
    | "sigma_scheduled_query"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";
  /**
   * The size of the file object in bytes.
   */
  size: number;
  /**
   * A suitable title for the document.
   */
  title?: string | null | undefined;
  /**
   * The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).
   */
  type?: string | null | undefined;
  /**
   * Use your live secret API key to download the file from this URL.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * File without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$File = {
  created: number;
  expires_at?: number | null | undefined;
  filename?: string | null | undefined;
  id: string;
  links?: External$FileLinks | null | undefined;
  object: "file";
  purpose:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "document_provider_identity_document"
    | "finance_report_run"
    | "financial_account_statement"
    | "identity_document"
    | "identity_document_downloadable"
    | "issuing_regulatory_reporting"
    | "pci_document"
    | "selfie"
    | "sigma_scheduled_query"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";
  size: number;
  title?: string | null | undefined;
  type?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object File
 */
const SchemaIn$File: z.ZodType<
  File, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    expires_at: z.number().int().nullable().optional(),
    filename: z.string().nullable().optional(),
    id: z.string(),
    links: z.lazy(() => Schemas$FileLinks.in.nullable().optional()),
    object: z.enum(["file"]),
    purpose: z.enum([
      "account_requirement",
      "additional_verification",
      "business_icon",
      "business_logo",
      "customer_signature",
      "dispute_evidence",
      "document_provider_identity_document",
      "finance_report_run",
      "financial_account_statement",
      "identity_document",
      "identity_document_downloadable",
      "issuing_regulatory_reporting",
      "pci_document",
      "selfie",
      "sigma_scheduled_query",
      "tax_document_user_upload",
      "terminal_reader_splashscreen",
    ]),
    size: z.number().int(),
    title: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expires_at: "expiresAt",
      filename: "filename",
      id: "id",
      links: "links",
      object: "object",
      purpose: "purpose",
      size: "size",
      title: "title",
      type: "type",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$File
 */
const SchemaOut$File: z.ZodType<
  External$File, // output type of this zod object
  z.ZodTypeDef,
  File // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    expiresAt: z.number().int().nullable().optional(),
    filename: z.string().nullable().optional(),
    id: z.string(),
    links: z.lazy(() => Schemas$FileLinks.out.nullable().optional()),
    object: z.enum(["file"]),
    purpose: z.enum([
      "account_requirement",
      "additional_verification",
      "business_icon",
      "business_logo",
      "customer_signature",
      "dispute_evidence",
      "document_provider_identity_document",
      "finance_report_run",
      "financial_account_statement",
      "identity_document",
      "identity_document_downloadable",
      "issuing_regulatory_reporting",
      "pci_document",
      "selfie",
      "sigma_scheduled_query",
      "tax_document_user_upload",
      "terminal_reader_splashscreen",
    ]),
    size: z.number().int(),
    title: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expiresAt: "expires_at",
      filename: "filename",
      id: "id",
      links: "links",
      object: "object",
      purpose: "purpose",
      size: "size",
      title: "title",
      type: "type",
      url: "url",
    });
  });

export const Schemas$File = {
  in: SchemaIn$File,
  out: SchemaOut$File,
};
