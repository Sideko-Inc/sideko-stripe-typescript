import {
  External$NotificationEventData,
  NotificationEventData,
  Schemas$NotificationEventData,
} from "./notification-event-data";
import {
  External$NotificationEventRequest,
  NotificationEventRequest,
  Schemas$NotificationEventRequest,
} from "./notification-event-request";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Events are our way of letting you know when something interesting happens in
 * your account. When an interesting event occurs, we create a new `Event`
 * object. For example, when a charge succeeds, we create a `charge.succeeded`
 * event, and when an invoice payment attempt fails, we create an
 * `invoice.payment_failed` event. Certain API requests might create multiple
 * events. For example, if you create a new subscription for a
 * customer, you receive both a `customer.subscription.created` event and a
 * `charge.succeeded` event.
 *
 * Events occur when the state of another API resource changes. The event's data
 * field embeds the resource's state at the time of the change. For
 * example, a `charge.succeeded` event contains a charge, and an
 * `invoice.payment_failed` event contains an invoice.
 *
 * As with other API resources, you can use endpoints to retrieve an
 * [individual event](https://stripe.com/docs/api#retrieve_event) or a [list of events](https://stripe.com/docs/api#list_events)
 * from the API. We also have a separate
 * [webhooks](http://en.wikipedia.org/wiki/Webhook) system for sending the
 * `Event` objects directly to an endpoint on your server. You can manage
 * webhooks in your
 * [account settings](https://dashboard.stripe.com/account/webhooks). Learn how
 * to [listen for events](https://docs.stripe.com/webhooks)
 * so that your integration can automatically trigger reactions.
 *
 * When using [Connect](https://docs.stripe.com/connect), you can also receive event notifications
 * that occur in connected accounts. For these events, there's an
 * additional `account` attribute in the received `Event` object.
 *
 * We only guarantee access to events through the [Retrieve Event API](https://stripe.com/docs/api#retrieve_event)
 * for 30 days.
 */
export type Event = {
  /**
   * The connected account that originates the event.
   */
  account?: string | undefined;
  /**
   * The Stripe API version used to render `data`. This property is populated only for events on or after October 31, 2014.
   */
  apiVersion?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  data: NotificationEventData;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "event";
  /**
   * Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify.
   */
  pendingWebhooks: number;
  request?: NotificationEventRequest | undefined;
  /**
   * Description of the event (for example, `invoice.created` or `charge.refunded`).
   */
  type: string;
};

/**
 * @internal
 * Event without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Event = {
  account?: string | undefined;
  api_version?: string | null | undefined;
  created: number;
  data: External$NotificationEventData;
  id: string;
  livemode: boolean;
  object: "event";
  pending_webhooks: number;
  request?: External$NotificationEventRequest | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Event
 */
const SchemaIn$Event: z.ZodType<
  Event, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    api_version: z.string().nullable().optional(),
    created: z.number().int(),
    data: Schemas$NotificationEventData.in,
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["event"]),
    pending_webhooks: z.number().int(),
    request: Schemas$NotificationEventRequest.in.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      api_version: "apiVersion",
      created: "created",
      data: "data",
      id: "id",
      livemode: "livemode",
      object: "object",
      pending_webhooks: "pendingWebhooks",
      request: "request",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Event
 */
const SchemaOut$Event: z.ZodType<
  External$Event, // output type of this zod object
  z.ZodTypeDef,
  Event // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    apiVersion: z.string().nullable().optional(),
    created: z.number().int(),
    data: Schemas$NotificationEventData.out,
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["event"]),
    pendingWebhooks: z.number().int(),
    request: Schemas$NotificationEventRequest.out.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      apiVersion: "api_version",
      created: "created",
      data: "data",
      id: "id",
      livemode: "livemode",
      object: "object",
      pendingWebhooks: "pending_webhooks",
      request: "request",
      type: "type",
    });
  });

export const Schemas$Event = {
  in: SchemaIn$Event,
  out: SchemaOut$Event,
};
