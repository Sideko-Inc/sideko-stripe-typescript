import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { DiscountClient } from "@sideko-inc/stripe/resources/customer/subscription/discount";
import * as requests from "@sideko-inc/stripe/resources/customer/subscription/request-types";
import { Schemas$CustomerSubscriptionCreateBody } from "@sideko-inc/stripe/types/customer-subscription-create-body";
import { Schemas$CustomerSubscriptionDeleteBody } from "@sideko-inc/stripe/types/customer-subscription-delete-body";
import { Schemas$CustomerSubscriptionListResponse } from "@sideko-inc/stripe/types/customer-subscription-list-response";
import { Schemas$CustomerSubscriptionModifyBody } from "@sideko-inc/stripe/types/customer-subscription-modify-body";
import { Schemas$Subscription } from "@sideko-inc/stripe/types/subscription";
import * as z from "zod";

export class SubscriptionClient extends CoreResourceClient {
  private _discountLazy?: DiscountClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.discount;
    }
  }
  get discount(): DiscountClient {
    return (
      this._discountLazy ??
      (this._discountLazy = new (require("./discount").DiscountClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * Cancel a subscription
   *
   * <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>
   *
   * <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
   *
   * <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
   *
   * DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSubscriptionDeleteBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", invoice_now: "form", prorate: "form" },
        explode: { expand: true, invoice_now: true, prorate: true },
      },
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * List active subscriptions
   *
   * <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>
   *
   * GET /v1/customers/{customer}/subscriptions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSubscriptionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/subscriptions`,
      auth: ["bearerAuth"],
      query: [
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
      ],
      responseSchema: z.lazy(() => Schemas$CustomerSubscriptionListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a subscription
   *
   * <p>Retrieves the subscription with the given ID.</p>
   *
   * GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
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
   * <p>Creates a new subscription on an existing customer.</p>
   *
   * POST /v1/customers/{customer}/subscriptions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/subscriptions`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSubscriptionCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          add_invoice_items: "deepObject",
          application_fee_percent: "deepObject",
          automatic_tax: "deepObject",
          backdate_start_date: "form",
          billing_cycle_anchor: "form",
          cancel_at: "form",
          cancel_at_period_end: "form",
          collection_method: "form",
          currency: "form",
          days_until_due: "form",
          default_payment_method: "form",
          default_source: "form",
          default_tax_rates: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          invoice_settings: "deepObject",
          items: "deepObject",
          metadata: "deepObject",
          off_session: "form",
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
          cancel_at: true,
          cancel_at_period_end: true,
          collection_method: true,
          currency: true,
          days_until_due: true,
          default_payment_method: true,
          default_source: true,
          default_tax_rates: true,
          discounts: true,
          expand: true,
          invoice_settings: true,
          items: true,
          metadata: true,
          off_session: true,
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
   * Update a subscription on a customer
   *
   * <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
   *
   * POST /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  modify(
    request: requests.ModifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSubscriptionModifyBody.out.parse(request.data)
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
          discounts: "deepObject",
          expand: "deepObject",
          invoice_settings: "deepObject",
          items: "deepObject",
          metadata: "deepObject",
          off_session: "form",
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
          discounts: true,
          expand: true,
          invoice_settings: true,
          items: true,
          metadata: true,
          off_session: true,
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
}
