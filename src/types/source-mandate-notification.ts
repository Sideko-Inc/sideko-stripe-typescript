import { External$Source, Schemas$Source, Source } from "./source";
import {
  External$SourceMandateNotificationAcssDebitData,
  Schemas$SourceMandateNotificationAcssDebitData,
  SourceMandateNotificationAcssDebitData,
} from "./source-mandate-notification-acss-debit-data";
import {
  External$SourceMandateNotificationBacsDebitData,
  Schemas$SourceMandateNotificationBacsDebitData,
  SourceMandateNotificationBacsDebitData,
} from "./source-mandate-notification-bacs-debit-data";
import {
  External$SourceMandateNotificationSepaDebitData,
  Schemas$SourceMandateNotificationSepaDebitData,
  SourceMandateNotificationSepaDebitData,
} from "./source-mandate-notification-sepa-debit-data";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Source mandate notifications should be created when a notification related to
 * a source mandate must be sent to the payer. They will trigger a webhook or
 * deliver an email to the customer.
 */
export type SourceMandateNotification = {
  acssDebit?: SourceMandateNotificationAcssDebitData | undefined;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
   */
  amount?: number | null | undefined;
  bacsDebit?: SourceMandateNotificationBacsDebitData | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
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
  object: "source_mandate_notification";
  /**
   * The reason of the mandate notification. Valid reasons are `mandate_confirmed` or `debit_initiated`.
   */
  reason: string;
  sepaDebit?: SourceMandateNotificationSepaDebitData | undefined;
  /**
   * `Source` objects allow you to accept a variety of payment methods. They
   * represent a customer's payment instrument, and can be used with the Stripe API
   * just like a `Card` object: once chargeable, they can be charged, or can be
   * attached to customers.
   *
   * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
   * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
   * This newer API provides access to our latest features and payment method types.
   *
   * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
   */
  source: Source;
  /**
   * The status of the mandate notification. Valid statuses are `pending` or `submitted`.
   */
  status: string;
  /**
   * The type of source this mandate notification is attached to. Should be the source type identifier code for the payment method, such as `three_d_secure`.
   */
  type: string;
};

/**
 * @internal
 * SourceMandateNotification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceMandateNotification = {
  acss_debit?: External$SourceMandateNotificationAcssDebitData | undefined;
  amount?: number | null | undefined;
  bacs_debit?: External$SourceMandateNotificationBacsDebitData | undefined;
  created: number;
  id: string;
  livemode: boolean;
  object: "source_mandate_notification";
  reason: string;
  sepa_debit?: External$SourceMandateNotificationSepaDebitData | undefined;
  source: External$Source;
  status: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceMandateNotification
 */
const SchemaIn$SourceMandateNotification: z.ZodType<
  SourceMandateNotification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: Schemas$SourceMandateNotificationAcssDebitData.in.optional(),
    amount: z.number().int().nullable().optional(),
    bacs_debit: Schemas$SourceMandateNotificationBacsDebitData.in.optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["source_mandate_notification"]),
    reason: z.string(),
    sepa_debit: Schemas$SourceMandateNotificationSepaDebitData.in.optional(),
    source: Schemas$Source.in,
    status: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      amount: "amount",
      bacs_debit: "bacsDebit",
      created: "created",
      id: "id",
      livemode: "livemode",
      object: "object",
      reason: "reason",
      sepa_debit: "sepaDebit",
      source: "source",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceMandateNotification
 */
const SchemaOut$SourceMandateNotification: z.ZodType<
  External$SourceMandateNotification, // output type of this zod object
  z.ZodTypeDef,
  SourceMandateNotification // the object to be transformed
> = z
  .object({
    acssDebit: Schemas$SourceMandateNotificationAcssDebitData.out.optional(),
    amount: z.number().int().nullable().optional(),
    bacsDebit: Schemas$SourceMandateNotificationBacsDebitData.out.optional(),
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["source_mandate_notification"]),
    reason: z.string(),
    sepaDebit: Schemas$SourceMandateNotificationSepaDebitData.out.optional(),
    source: Schemas$Source.out,
    status: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      amount: "amount",
      bacsDebit: "bacs_debit",
      created: "created",
      id: "id",
      livemode: "livemode",
      object: "object",
      reason: "reason",
      sepaDebit: "sepa_debit",
      source: "source",
      status: "status",
      type: "type",
    });
  });

export const Schemas$SourceMandateNotification = {
  in: SchemaIn$SourceMandateNotification,
  out: SchemaOut$SourceMandateNotification,
};
