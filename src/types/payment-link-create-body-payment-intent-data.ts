import {
  External$PaymentLinkCreateBodyPaymentIntentDataMetadata,
  PaymentLinkCreateBodyPaymentIntentDataMetadata,
  Schemas$PaymentLinkCreateBodyPaymentIntentDataMetadata,
} from "./payment-link-create-body-payment-intent-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export type PaymentLinkCreateBodyPaymentIntentData = {
  captureMethod?: ("automatic" | "automatic_async" | "manual") | undefined;
  description?: string | undefined;
  metadata?: PaymentLinkCreateBodyPaymentIntentDataMetadata | undefined;
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  statementDescriptor?: string | undefined;
  statementDescriptorSuffix?: string | undefined;
  transferGroup?: string | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyPaymentIntentData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyPaymentIntentData = {
  capture_method?: ("automatic" | "automatic_async" | "manual") | undefined;
  description?: string | undefined;
  metadata?:
    | External$PaymentLinkCreateBodyPaymentIntentDataMetadata
    | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_group?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyPaymentIntentData
 */
const SchemaIn$PaymentLinkCreateBodyPaymentIntentData: z.ZodType<
  PaymentLinkCreateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    description: z.string().optional(),
    metadata:
      Schemas$PaymentLinkCreateBodyPaymentIntentDataMetadata.in.optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_group: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyPaymentIntentData
 */
const SchemaOut$PaymentLinkCreateBodyPaymentIntentData: z.ZodType<
  External$PaymentLinkCreateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyPaymentIntentData // the object to be transformed
> = z
  .object({
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    description: z.string().optional(),
    metadata:
      Schemas$PaymentLinkCreateBodyPaymentIntentDataMetadata.out.optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferGroup: z.string().optional(),
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

export const Schemas$PaymentLinkCreateBodyPaymentIntentData = {
  in: SchemaIn$PaymentLinkCreateBodyPaymentIntentData,
  out: SchemaOut$PaymentLinkCreateBodyPaymentIntentData,
};
