import {
  External$PaymentLinksResourcePaymentIntentDataMetadata,
  PaymentLinksResourcePaymentIntentDataMetadata,
  Schemas$PaymentLinksResourcePaymentIntentDataMetadata,
} from "./payment-links-resource-payment-intent-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourcePaymentIntentData = {
  /**
   * Indicates when the funds will be captured from the customer's account.
   */
  captureMethod?:
    | ("automatic" | "automatic_async" | "manual")
    | null
    | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link.
   */
  metadata: PaymentLinksResourcePaymentIntentDataMetadata;
  /**
   * Indicates that you intend to make future payments with the payment method collected during checkout.
   */
  setupFutureUsage?: ("off_session" | "on_session") | null | undefined;
  /**
   * For a non-card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * For a card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge. Concatenated with the account's statement descriptor prefix to form the complete statement descriptor.
   */
  statementDescriptorSuffix?: string | null | undefined;
  /**
   * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
   */
  transferGroup?: string | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourcePaymentIntentData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourcePaymentIntentData = {
  capture_method?:
    | ("automatic" | "automatic_async" | "manual")
    | null
    | undefined;
  description?: string | null | undefined;
  metadata: External$PaymentLinksResourcePaymentIntentDataMetadata;
  setup_future_usage?: ("off_session" | "on_session") | null | undefined;
  statement_descriptor?: string | null | undefined;
  statement_descriptor_suffix?: string | null | undefined;
  transfer_group?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourcePaymentIntentData
 */
const SchemaIn$PaymentLinksResourcePaymentIntentData: z.ZodType<
  PaymentLinksResourcePaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .nullable()
      .optional(),
    description: z.string().nullable().optional(),
    metadata: Schemas$PaymentLinksResourcePaymentIntentDataMetadata.in,
    setup_future_usage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    statement_descriptor: z.string().nullable().optional(),
    statement_descriptor_suffix: z.string().nullable().optional(),
    transfer_group: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      description: "description",
      metadata: "metadata",
      setup_future_usage: "setupFutureUsage",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourcePaymentIntentData
 */
const SchemaOut$PaymentLinksResourcePaymentIntentData: z.ZodType<
  External$PaymentLinksResourcePaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourcePaymentIntentData // the object to be transformed
> = z
  .object({
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .nullable()
      .optional(),
    description: z.string().nullable().optional(),
    metadata: Schemas$PaymentLinksResourcePaymentIntentDataMetadata.out,
    setupFutureUsage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    statementDescriptor: z.string().nullable().optional(),
    statementDescriptorSuffix: z.string().nullable().optional(),
    transferGroup: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      description: "description",
      metadata: "metadata",
      setupFutureUsage: "setup_future_usage",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$PaymentLinksResourcePaymentIntentData = {
  in: SchemaIn$PaymentLinksResourcePaymentIntentData,
  out: SchemaOut$PaymentLinksResourcePaymentIntentData,
};
