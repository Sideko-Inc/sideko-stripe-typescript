import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import {
  External$RadarReviewResourceLocation,
  RadarReviewResourceLocation,
  Schemas$RadarReviewResourceLocation,
} from "./radar-review-resource-location";
import {
  External$RadarReviewResourceSession,
  RadarReviewResourceSession,
  Schemas$RadarReviewResourceSession,
} from "./radar-review-resource-session";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Reviews can be used to supplement automated fraud detection with human expertise.
 *
 * Learn more about [Radar](/radar) and reviewing payments
 * [here](https://stripe.com/docs/radar/reviews).
 */
export type Review = {
  /**
   * The ZIP or postal code of the card used, if applicable.
   */
  billingZip?: string | null | undefined;
  /**
   * The charge associated with this review.
   */
  charge?: (string | Charge) | undefined;
  /**
   * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, or `canceled`.
   */
  closedReason?:
    | (
        | "approved"
        | "canceled"
        | "disputed"
        | "redacted"
        | "refunded"
        | "refunded_as_fraud"
      )
    | null
    | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The IP address where the payment originated.
   */
  ipAddress?: string | null | undefined;
  ipAddressLocation?: RadarReviewResourceLocation | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "review";
  /**
   * If `true`, the review needs action.
   */
  open: boolean;
  /**
   * The reason the review was opened. One of `rule` or `manual`.
   */
  openedReason: "manual" | "rule";
  /**
   * The PaymentIntent ID associated with this review, if one exists.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  /**
   * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, or `canceled`.
   */
  reason: string;
  session?: RadarReviewResourceSession | undefined;
};

/**
 * @internal
 * Review without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Review = {
  billing_zip?: string | null | undefined;
  charge?: (string | External$Charge) | undefined;
  closed_reason?:
    | (
        | "approved"
        | "canceled"
        | "disputed"
        | "redacted"
        | "refunded"
        | "refunded_as_fraud"
      )
    | null
    | undefined;
  created: number;
  id: string;
  ip_address?: string | null | undefined;
  ip_address_location?: External$RadarReviewResourceLocation | undefined;
  livemode: boolean;
  object: "review";
  open: boolean;
  opened_reason: "manual" | "rule";
  payment_intent?: (string | External$PaymentIntent) | undefined;
  reason: string;
  session?: External$RadarReviewResourceSession | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Review
 */
const SchemaIn$Review: z.ZodType<
  Review, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_zip: z.string().nullable().optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]).optional(),
    closed_reason: z
      .enum([
        "approved",
        "canceled",
        "disputed",
        "redacted",
        "refunded",
        "refunded_as_fraud",
      ])
      .nullable()
      .optional(),
    created: z.number().int(),
    id: z.string(),
    ip_address: z.string().nullable().optional(),
    ip_address_location: Schemas$RadarReviewResourceLocation.in.optional(),
    livemode: z.boolean(),
    object: z.enum(["review"]),
    open: z.boolean(),
    opened_reason: z.enum(["manual", "rule"]),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    reason: z.string(),
    session: Schemas$RadarReviewResourceSession.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_zip: "billingZip",
      charge: "charge",
      closed_reason: "closedReason",
      created: "created",
      id: "id",
      ip_address: "ipAddress",
      ip_address_location: "ipAddressLocation",
      livemode: "livemode",
      object: "object",
      open: "open",
      opened_reason: "openedReason",
      payment_intent: "paymentIntent",
      reason: "reason",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Review
 */
const SchemaOut$Review: z.ZodType<
  External$Review, // output type of this zod object
  z.ZodTypeDef,
  Review // the object to be transformed
> = z
  .object({
    billingZip: z.string().nullable().optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]).optional(),
    closedReason: z
      .enum([
        "approved",
        "canceled",
        "disputed",
        "redacted",
        "refunded",
        "refunded_as_fraud",
      ])
      .nullable()
      .optional(),
    created: z.number().int(),
    id: z.string(),
    ipAddress: z.string().nullable().optional(),
    ipAddressLocation: Schemas$RadarReviewResourceLocation.out.optional(),
    livemode: z.boolean(),
    object: z.enum(["review"]),
    open: z.boolean(),
    openedReason: z.enum(["manual", "rule"]),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    reason: z.string(),
    session: Schemas$RadarReviewResourceSession.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingZip: "billing_zip",
      charge: "charge",
      closedReason: "closed_reason",
      created: "created",
      id: "id",
      ipAddress: "ip_address",
      ipAddressLocation: "ip_address_location",
      livemode: "livemode",
      object: "object",
      open: "open",
      openedReason: "opened_reason",
      paymentIntent: "payment_intent",
      reason: "reason",
      session: "session",
    });
  });

export const Schemas$Review = {
  in: SchemaIn$Review,
  out: SchemaOut$Review,
};
