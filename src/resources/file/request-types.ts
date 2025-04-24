import {
  UploadFile,
  zodTransform,
  zodUploadFile,
} from "@sideko-inc/stripe/core";
import {
  External$FileCreateBodyFileLinkData,
  FileCreateBodyFileLinkData,
  Schemas$FileCreateBodyFileLinkData,
} from "@sideko-inc/stripe/types/file-create-body-file-link-data";
import {
  External$FileListCreatedObj0,
  FileListCreatedObj0,
  Schemas$FileListCreatedObj0,
} from "@sideko-inc/stripe/types/file-list-created-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return files that were created during the given date interval.
   */
  created?: (FileListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
   */
  purpose?:
    | (
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
        | "terminal_reader_splashscreen"
      )
    | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$FileListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  purpose?:
    | (
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
        | "terminal_reader_splashscreen"
      )
    | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z
      .union([Schemas$FileListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    purpose: z
      .enum([
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
      ])
      .optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      purpose: "purpose",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    created: z
      .union([Schemas$FileListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    purpose: z
      .enum([
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
      ])
      .optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      purpose: "purpose",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  file: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  file: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    file: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      file: "file",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    file: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      file: "file",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      file: "file",
      fileLinkData: "file_link_data",
      purpose: "purpose",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
