import {
  External$FileLinkCreateBodyMetadataObj0,
  FileLinkCreateBodyMetadataObj0,
  Schemas$FileLinkCreateBodyMetadataObj0,
} from "./file-link-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileLinkCreateBody
 */
export type FileLinkCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The link isn't usable after this future timestamp.
   */
  expiresAt?: number | undefined;
  /**
   * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `financial_account_statement`, `identity_document_downloadable`, `issuing_regulatory_reporting`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
   */
  file: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (FileLinkCreateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | string
    | ((FileLinkCreateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * FileLinkCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinkCreateBody = {
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  file: string;
  metadata?: (External$FileLinkCreateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | string
    | ((External$FileLinkCreateBodyMetadataObj0 | string) | undefined)
    | External$FileLinkCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinkCreateBody
 */
const SchemaIn$FileLinkCreateBody: z.ZodType<
  FileLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    file: z.string(),
    metadata: z
      .union([Schemas$FileLinkCreateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
      file: "file",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinkCreateBody
 */
const SchemaOut$FileLinkCreateBody: z.ZodType<
  External$FileLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  FileLinkCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    file: z.string(),
    metadata: z
      .union([Schemas$FileLinkCreateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      file: "file",
      metadata: "metadata",
    });
  });

export const Schemas$FileLinkCreateBody = {
  in: SchemaIn$FileLinkCreateBody,
  out: SchemaOut$FileLinkCreateBody,
};
