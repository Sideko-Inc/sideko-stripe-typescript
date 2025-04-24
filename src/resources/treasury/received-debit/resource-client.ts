import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/received-debit/request-types";
import { Schemas$TreasuryReceivedDebit } from "@sideko-inc/stripe/types/treasury-received-debit";
import { Schemas$TreasuryReceivedDebitListResponse } from "@sideko-inc/stripe/types/treasury-received-debit-list-response";
import * as z from "zod";

export class ReceivedDebitClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all ReceivedDebits
   *
   * <p>Returns a list of ReceivedDebits.</p>
   *
   * GET /v1/treasury/received_debits
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedDebitListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/received_debits",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
          style: "form",
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["failed", "succeeded"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryReceivedDebitListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a ReceivedDebit
   *
   * <p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
   *
   * GET /v1/treasury/received_debits/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedDebit> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/received_debits/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryReceivedDebit.in),
      opts,
    });
  }
}
