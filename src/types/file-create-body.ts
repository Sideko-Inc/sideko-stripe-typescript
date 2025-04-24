import {
  External$FileCreateBodyFileLinkData,
  FileCreateBodyFileLinkData,
  Schemas$FileCreateBodyFileLinkData,
} from "./file-create-body-file-link-data";
import {
  UploadFile,
  zodRequiredAny,
  zodTransform,
  zodUploadFile,
} from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileCreateBody
 */
export type FileCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.
   */
  file: UploadFile;
  /**
   * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
   */
  fileLinkData?: FileCreateBodyFileLinkData | undefined;
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
    | "identity_document"
    | "issuing_regulatory_reporting"
    | "pci_document"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | UploadFile
    | (FileCreateBodyFileLinkData | undefined)
    | (
        | "account_requirement"
        | "additional_verification"
        | "business_icon"
        | "business_logo"
        | "customer_signature"
        | "dispute_evidence"
        | "identity_document"
        | "issuing_regulatory_reporting"
        | "pci_document"
        | "tax_document_user_upload"
        | "terminal_reader_splashscreen"
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * FileCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileCreateBody = {
  expand?: string[] | undefined;
  file: UploadFile;
  file_link_data?: External$FileCreateBodyFileLinkData | undefined;
  purpose:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "identity_document"
    | "issuing_regulatory_reporting"
    | "pci_document"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";

  [additionalProperty: string]:
    | (string[] | undefined)
    | UploadFile
    | (External$FileCreateBodyFileLinkData | undefined)
    | (
        | "account_requirement"
        | "additional_verification"
        | "business_icon"
        | "business_logo"
        | "customer_signature"
        | "dispute_evidence"
        | "identity_document"
        | "issuing_regulatory_reporting"
        | "pci_document"
        | "tax_document_user_upload"
        | "terminal_reader_splashscreen"
      )
    | External$FileCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileCreateBody
 */
const SchemaIn$FileCreateBody: z.ZodType<
  FileCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    file: zodUploadFile,
    file_link_data: Schemas$FileCreateBodyFileLinkData.in.optional(),
    purpose: z.enum([
      "account_requirement",
      "additional_verification",
      "business_icon",
      "business_logo",
      "customer_signature",
      "dispute_evidence",
      "identity_document",
      "issuing_regulatory_reporting",
      "pci_document",
      "tax_document_user_upload",
      "terminal_reader_splashscreen",
    ]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      file: "file",
      file_link_data: "fileLinkData",
      purpose: "purpose",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileCreateBody
 */
const SchemaOut$FileCreateBody: z.ZodType<
  External$FileCreateBody, // output type of this zod object
  z.ZodTypeDef,
  FileCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    file: zodUploadFile,
    fileLinkData: Schemas$FileCreateBodyFileLinkData.out.optional(),
    purpose: z.enum([
      "account_requirement",
      "additional_verification",
      "business_icon",
      "business_logo",
      "customer_signature",
      "dispute_evidence",
      "identity_document",
      "issuing_regulatory_reporting",
      "pci_document",
      "tax_document_user_upload",
      "terminal_reader_splashscreen",
    ]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      file: "file",
      fileLinkData: "file_link_data",
      purpose: "purpose",
    });
  });

export const Schemas$FileCreateBody = {
  in: SchemaIn$FileCreateBody,
  out: SchemaOut$FileCreateBody,
};
