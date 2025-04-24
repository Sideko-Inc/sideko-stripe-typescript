import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type NotificationEventRequest = {
  /**
   * ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
   */
  id?: string | null | undefined;
  /**
   * The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.
   */
  idempotencyKey?: string | null | undefined;
};

/**
 * @internal
 * NotificationEventRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NotificationEventRequest = {
  id?: string | null | undefined;
  idempotency_key?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NotificationEventRequest
 */
const SchemaIn$NotificationEventRequest: z.ZodType<
  NotificationEventRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string().nullable().optional(),
    idempotency_key: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      idempotency_key: "idempotencyKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NotificationEventRequest
 */
const SchemaOut$NotificationEventRequest: z.ZodType<
  External$NotificationEventRequest, // output type of this zod object
  z.ZodTypeDef,
  NotificationEventRequest // the object to be transformed
> = z
  .object({
    id: z.string().nullable().optional(),
    idempotencyKey: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      idempotencyKey: "idempotency_key",
    });
  });

export const Schemas$NotificationEventRequest = {
  in: SchemaIn$NotificationEventRequest,
  out: SchemaOut$NotificationEventRequest,
};
