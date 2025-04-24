import {
  External$WebhookEndpointMetadata,
  Schemas$WebhookEndpointMetadata,
  WebhookEndpointMetadata,
} from "./webhook-endpoint-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can configure [webhook endpoints](https://docs.stripe.com/webhooks/) via the API to be
 * notified about events that happen in your Stripe account or connected
 * accounts.
 *
 * Most users configure webhooks from [the dashboard](https://dashboard.stripe.com/webhooks), which provides a user interface for registering and testing your webhook endpoints.
 *
 * Related guide: [Setting up webhooks](https://docs.stripe.com/webhooks/configure)
 */
export type WebhookEndpoint = {
  /**
   * The API version events are rendered as for this webhook endpoint.
   */
  apiVersion?: string | null | undefined;
  /**
   * The ID of the associated Connect application.
   */
  application?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * An optional description of what the webhook is used for.
   */
  description?: string | null | undefined;
  /**
   * The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
   */
  enabledEvents: string[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: WebhookEndpointMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "webhook_endpoint";
  /**
   * The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). Only returned at creation.
   */
  secret?: string | undefined;
  /**
   * The status of the webhook. It can be `enabled` or `disabled`.
   */
  status: string;
  /**
   * The URL of the webhook endpoint.
   */
  url: string;
};

/**
 * @internal
 * WebhookEndpoint without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$WebhookEndpoint = {
  api_version?: string | null | undefined;
  application?: string | null | undefined;
  created: number;
  description?: string | null | undefined;
  enabled_events: string[];
  id: string;
  livemode: boolean;
  metadata: External$WebhookEndpointMetadata;
  object: "webhook_endpoint";
  secret?: string | undefined;
  status: string;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object WebhookEndpoint
 */
const SchemaIn$WebhookEndpoint: z.ZodType<
  WebhookEndpoint, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    api_version: z.string().nullable().optional(),
    application: z.string().nullable().optional(),
    created: z.number().int(),
    description: z.string().nullable().optional(),
    enabled_events: z.array(z.string()),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$WebhookEndpointMetadata.in,
    object: z.enum(["webhook_endpoint"]),
    secret: z.string().optional(),
    status: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      api_version: "apiVersion",
      application: "application",
      created: "created",
      description: "description",
      enabled_events: "enabledEvents",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      secret: "secret",
      status: "status",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$WebhookEndpoint
 */
const SchemaOut$WebhookEndpoint: z.ZodType<
  External$WebhookEndpoint, // output type of this zod object
  z.ZodTypeDef,
  WebhookEndpoint // the object to be transformed
> = z
  .object({
    apiVersion: z.string().nullable().optional(),
    application: z.string().nullable().optional(),
    created: z.number().int(),
    description: z.string().nullable().optional(),
    enabledEvents: z.array(z.string()),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$WebhookEndpointMetadata.out,
    object: z.enum(["webhook_endpoint"]),
    secret: z.string().optional(),
    status: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiVersion: "api_version",
      application: "application",
      created: "created",
      description: "description",
      enabledEvents: "enabled_events",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      secret: "secret",
      status: "status",
      url: "url",
    });
  });

export const Schemas$WebhookEndpoint = {
  in: SchemaIn$WebhookEndpoint,
  out: SchemaOut$WebhookEndpoint,
};
