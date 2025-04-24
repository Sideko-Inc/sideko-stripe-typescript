import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/file/request-types";
import { Schemas$File } from "@sideko-inc/stripe/types/file";
import { Schemas$FileCreateBody } from "@sideko-inc/stripe/types/file-create-body";
import { Schemas$FileListCreatedObj0 } from "@sideko-inc/stripe/types/file-list-created-obj0";
import { Schemas$FileListResponse } from "@sideko-inc/stripe/types/file-list-response";
import * as z from "zod";

export class FileClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all files
   *
   * <p>Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.</p>
   *
   * GET /v1/files
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.FileListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/files",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$FileListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "purpose",
          value: z
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
            .optional()
            .parse(request.purpose),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$FileListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a file
   *
   * <p>Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to <a href="/docs/file-upload#download-file-contents">access file contents</a>.</p>
   *
   * GET /v1/files/{file}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.File> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/files/${request.file}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$File.in),
      opts,
    });
  }
  /**
   * Create a file
   *
   * <p>To upload a file to Stripe, you need to send a request of type <code>multipart/form-data</code>. Include the file you want to upload in the request, and the parameters for creating a file.</p>
   *
   * <p>All of Stripe’s officially supported Client libraries support sending <code>multipart/form-data</code>.</p>
   *
   * POST /v1/files
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.File> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/files",
      auth: ["bearerAuth"],
      contentType: "multipart/form-data",
      body: Schemas$FileCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$File.in),
      opts,
    });
  }
}
