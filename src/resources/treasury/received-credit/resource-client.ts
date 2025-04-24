import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/received-credit/request-types";
import { Schemas$TreasuryReceivedCredit } from "@sideko-inc/stripe/types/treasury-received-credit";
import { Schemas$TreasuryReceivedCreditListLinkedFlows } from "@sideko-inc/stripe/types/treasury-received-credit-list-linked-flows";
import { Schemas$TreasuryReceivedCreditListResponse } from "@sideko-inc/stripe/types/treasury-received-credit-list-response";
import * as z from "zod";

export class ReceivedCreditClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all ReceivedCredits
   *
   * <p>Returns a list of ReceivedCredits.</p>
   *
   * GET /v1/treasury/received_credits
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedCreditListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/received_credits",
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
          name: "linked_flows",
          value: Schemas$TreasuryReceivedCreditListLinkedFlows.out
            .optional()
            .parse(request.linkedFlows),
          style: "deepObject",
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
        () => Schemas$TreasuryReceivedCreditListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a ReceivedCredit
   *
   * <p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>
   *
   * GET /v1/treasury/received_credits/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedCredit> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/received_credits/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryReceivedCredit.in),
      opts,
    });
  }
}
