import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/subscription/request-types";
import { Schemas$Subscription } from "@sideko-inc/stripe/types/subscription";
import { Schemas$SubscriptionCreateBody } from "@sideko-inc/stripe/types/subscription-create-body";
import { Schemas$SubscriptionDeleteBody } from "@sideko-inc/stripe/types/subscription-delete-body";
import { Schemas$SubscriptionListAutomaticTax } from "@sideko-inc/stripe/types/subscription-list-automatic-tax";
import { Schemas$SubscriptionListCreatedObj0 } from "@sideko-inc/stripe/types/subscription-list-created-obj0";
import { Schemas$SubscriptionListCurrentPeriodEndObj0 } from "@sideko-inc/stripe/types/subscription-list-current-period-end-obj0";
import { Schemas$SubscriptionListCurrentPeriodStartObj0 } from "@sideko-inc/stripe/types/subscription-list-current-period-start-obj0";
import { Schemas$SubscriptionListResponse } from "@sideko-inc/stripe/types/subscription-list-response";
import { Schemas$SubscriptionResumeBody } from "@sideko-inc/stripe/types/subscription-resume-body";
import { Schemas$SubscriptionSearchResponse } from "@sideko-inc/stripe/types/subscription-search-response";
import { Schemas$SubscriptionUpdateBody } from "@sideko-inc/stripe/types/subscription-update-body";
import * as z from "zod";

export class SubscriptionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Cancel a subscription
   *
   * <p>Cancels a customer’s subscription immediately. The customer won’t be charged again for the subscription. After it’s canceled, you can no longer update the subscription or its <a href="/metadata">metadata</a>.</p>
   *
   * <p>Any pending invoice items that you’ve created are still charged at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations are also left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations are removed.</p>
   *
   * <p>By default, upon subscription cancellation, Stripe stops automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
   *
   * DELETE /v1/subscriptions/{subscription_exposed_id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/subscriptions/${request.subscriptionExposedId}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionDeleteBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          cancellation_details: "deepObject",
          expand: "deepObject",
          invoice_now: "form",
          prorate: "form",
        },
        explode: {
          cancellation_details: true,
          expand: true,
          invoice_now: true,
          prorate: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * List subscriptions
   *
   * <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
   *
   * GET /v1/subscriptions
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/subscriptions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "automatic_tax",
          value: Schemas$SubscriptionListAutomaticTax.out
            .optional()
            .parse(request.automaticTax),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "collection_method",
          value: z
            .enum(["charge_automatically", "send_invoice"])
            .optional()
            .parse(request.collectionMethod),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$SubscriptionListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "current_period_end",
          value: z
            .union([
              Schemas$SubscriptionListCurrentPeriodEndObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.currentPeriodEnd),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "current_period_start",
          value: z
            .union([
              Schemas$SubscriptionListCurrentPeriodStartObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.currentPeriodStart),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
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
          name: "price",
          value: z.string().optional().parse(request.price),
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
            .enum([
              "active",
              "all",
              "canceled",
              "ended",
              "incomplete",
              "incomplete_expired",
              "past_due",
              "paused",
              "trialing",
              "unpaid",
            ])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "test_clock",
          value: z.string().optional().parse(request.testClock),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$SubscriptionListResponse.in),
      opts,
    });
  }
  /**
   * Search subscriptions
   *
   * <p>Search for subscriptions you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/subscriptions/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/subscriptions/search",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$SubscriptionSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a subscription
   *
   * <p>Retrieves the subscription with the given ID.</p>
   *
   * GET /v1/subscriptions/{subscription_exposed_id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/subscriptions/${request.subscriptionExposedId}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * Create a subscription
   *
   * <p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>
   *
   * <p>When you create a subscription with <code>collection_method=charge_automatically</code>, the first invoice is finalized as part of the request.
   * The <code>payment_behavior</code> parameter determines the exact behavior of the initial payment.</p>
   *
   * <p>To start subscriptions where the first invoice always begins in a <code>draft</code> status, use <a href="/docs/billing/subscriptions/subscription-schedules#managing">subscription schedules</a> instead.
   * Schedules provide the flexibility to model more complex billing configurations that change over time.</p>
   *
   * POST /v1/subscriptions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/subscriptions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SubscriptionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          add_invoice_items: "deepObject",
          application_fee_percent: "deepObject",
          automatic_tax: "deepObject",
          backdate_start_date: "form",
          billing_cycle_anchor: "form",
          billing_cycle_anchor_config: "deepObject",
          cancel_at: "form",
          cancel_at_period_end: "form",
          collection_method: "form",
          currency: "form",
          customer: "form",
          days_until_due: "form",
          default_payment_method: "form",
          default_source: "form",
          default_tax_rates: "deepObject",
          description: "form",
          discounts: "deepObject",
          expand: "deepObject",
          invoice_settings: "deepObject",
          items: "deepObject",
          metadata: "deepObject",
          off_session: "form",
          on_behalf_of: "deepObject",
          payment_behavior: "form",
          payment_settings: "deepObject",
          pending_invoice_item_interval: "deepObject",
          proration_behavior: "form",
          transfer_data: "deepObject",
          trial_end: "deepObject",
          trial_from_plan: "form",
          trial_period_days: "form",
          trial_settings: "deepObject",
        },
        explode: {
          add_invoice_items: true,
          application_fee_percent: true,
          automatic_tax: true,
          backdate_start_date: true,
          billing_cycle_anchor: true,
          billing_cycle_anchor_config: true,
          cancel_at: true,
          cancel_at_period_end: true,
          collection_method: true,
          currency: true,
          customer: true,
          days_until_due: true,
          default_payment_method: true,
          default_source: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          expand: true,
          invoice_settings: true,
          items: true,
          metadata: true,
          off_session: true,
          on_behalf_of: true,
          payment_behavior: true,
          payment_settings: true,
          pending_invoice_item_interval: true,
          proration_behavior: true,
          transfer_data: true,
          trial_end: true,
          trial_from_plan: true,
          trial_period_days: true,
          trial_settings: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * Update a subscription
   *
   * <p>Updates an existing subscription to match the specified parameters.
   * When changing prices or quantities, we optionally prorate the price we charge next month to make up for any price changes.
   * To preview how the proration is calculated, use the <a href="/docs/api/invoices/create_preview">create preview</a> endpoint.</p>
   *
   * <p>By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a <currency>100</currency> price, they’ll be billed <currency>100</currency> immediately. If on May 15 they switch to a <currency>200</currency> price, then on June 1 they’ll be billed <currency>250</currency> (<currency>200</currency> for a renewal of her subscription, plus a <currency>50</currency> prorating adjustment for half of the previous month’s <currency>100</currency> difference). Similarly, a downgrade generates a credit that is applied to the next invoice. We also prorate when you make quantity changes.</p>
   *
   * <p>Switching prices does not normally change the billing date or generate an immediate charge unless:</p>
   *
   * <ul>
   * <li>The billing interval is changed (for example, from monthly to yearly).</li>
   * <li>The subscription moves from free to paid.</li>
   * <li>A trial starts or ends.</li>
   * </ul>
   *
   * <p>In these cases, we apply a credit for the unused time on the previous price, immediately charge the customer using the new price, and reset the billing date. Learn about how <a href="/docs/billing/subscriptions/upgrade-downgrade#immediate-payment">Stripe immediately attempts payment for subscription changes</a>.</p>
   *
   * <p>If you want to charge for an upgrade immediately, pass <code>proration_behavior</code> as <code>always_invoice</code> to create prorations, automatically invoice the customer for those proration adjustments, and attempt to collect payment. If you pass <code>create_prorations</code>, the prorations are created but not automatically invoiced. If you want to bill the customer for the prorations before the subscription’s renewal date, you need to manually <a href="/docs/api/invoices/create">invoice the customer</a>.</p>
   *
   * <p>If you don’t want to prorate, set the <code>proration_behavior</code> option to <code>none</code>. With this option, the customer is billed <currency>100</currency> on May 1 and <currency>200</currency> on June 1. Similarly, if you set <code>proration_behavior</code> to <code>none</code> when switching between different billing intervals (for example, from monthly to yearly), we don’t generate any credits for the old subscription’s unused time. We still reset the billing date and bill immediately for the new subscription.</p>
   *
   * <p>Updating the quantity on a subscription many times in an hour may result in <a href="/docs/rate-limits">rate limiting</a>. If you need to bill for a frequently changing quantity, consider integrating <a href="/docs/billing/subscriptions/usage-based">usage-based billing</a> instead.</p>
   *
   * POST /v1/subscriptions/{subscription_exposed_id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscriptions/${request.subscriptionExposedId}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          add_invoice_items: "deepObject",
          application_fee_percent: "deepObject",
          automatic_tax: "deepObject",
          billing_cycle_anchor: "form",
          cancel_at: "deepObject",
          cancel_at_period_end: "form",
          cancellation_details: "deepObject",
          collection_method: "form",
          days_until_due: "form",
          default_payment_method: "form",
          default_source: "deepObject",
          default_tax_rates: "deepObject",
          description: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          invoice_settings: "deepObject",
          items: "deepObject",
          metadata: "deepObject",
          off_session: "form",
          on_behalf_of: "deepObject",
          pause_collection: "deepObject",
          payment_behavior: "form",
          payment_settings: "deepObject",
          pending_invoice_item_interval: "deepObject",
          proration_behavior: "form",
          proration_date: "form",
          transfer_data: "deepObject",
          trial_end: "deepObject",
          trial_from_plan: "form",
          trial_settings: "deepObject",
        },
        explode: {
          add_invoice_items: true,
          application_fee_percent: true,
          automatic_tax: true,
          billing_cycle_anchor: true,
          cancel_at: true,
          cancel_at_period_end: true,
          cancellation_details: true,
          collection_method: true,
          days_until_due: true,
          default_payment_method: true,
          default_source: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          expand: true,
          invoice_settings: true,
          items: true,
          metadata: true,
          off_session: true,
          on_behalf_of: true,
          pause_collection: true,
          payment_behavior: true,
          payment_settings: true,
          pending_invoice_item_interval: true,
          proration_behavior: true,
          proration_date: true,
          transfer_data: true,
          trial_end: true,
          trial_from_plan: true,
          trial_settings: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * Resume a subscription
   *
   * <p>Initiates resumption of a paused subscription, optionally resetting the billing cycle anchor and creating prorations. If a resumption invoice is generated, it must be paid or marked uncollectible before the subscription will be unpaused. If payment succeeds the subscription will become <code>active</code>, and if payment fails the subscription will be <code>past_due</code>. The resumption invoice will void automatically if not paid by the expiration date.</p>
   *
   * POST /v1/subscriptions/{subscription}/resume
   */
  resume(
    request: requests.ResumeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscriptions/${request.subscription}/resume`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionResumeBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          billing_cycle_anchor: "form",
          expand: "deepObject",
          proration_behavior: "form",
          proration_date: "form",
        },
        explode: {
          billing_cycle_anchor: true,
          expand: true,
          proration_behavior: true,
          proration_date: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
}
