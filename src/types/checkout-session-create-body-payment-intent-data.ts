import {
  CheckoutSessionCreateBodyPaymentIntentDataMetadata,
  External$CheckoutSessionCreateBodyPaymentIntentDataMetadata,
  Schemas$CheckoutSessionCreateBodyPaymentIntentDataMetadata,
} from "./checkout-session-create-body-payment-intent-data-metadata";
import {
  CheckoutSessionCreateBodyPaymentIntentDataShipping,
  External$CheckoutSessionCreateBodyPaymentIntentDataShipping,
  Schemas$CheckoutSessionCreateBodyPaymentIntentDataShipping,
} from "./checkout-session-create-body-payment-intent-data-shipping";
import {
  CheckoutSessionCreateBodyPaymentIntentDataTransferData,
  External$CheckoutSessionCreateBodyPaymentIntentDataTransferData,
  Schemas$CheckoutSessionCreateBodyPaymentIntentDataTransferData,
} from "./checkout-session-create-body-payment-intent-data-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export type CheckoutSessionCreateBodyPaymentIntentData = {
  applicationFeeAmount?: number | undefined;
  captureMethod?: ("automatic" | "automatic_async" | "manual") | undefined;
  description?: string | undefined;
  metadata?: CheckoutSessionCreateBodyPaymentIntentDataMetadata | undefined;
  onBehalfOf?: string | undefined;
  receiptEmail?: string | undefined;
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  shipping?: CheckoutSessionCreateBodyPaymentIntentDataShipping | undefined;
  statementDescriptor?: string | undefined;
  statementDescriptorSuffix?: string | undefined;
  transferData?:
    | CheckoutSessionCreateBodyPaymentIntentDataTransferData
    | undefined;
  transferGroup?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentIntentData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentIntentData = {
  application_fee_amount?: number | undefined;
  capture_method?: ("automatic" | "automatic_async" | "manual") | undefined;
  description?: string | undefined;
  metadata?:
    | External$CheckoutSessionCreateBodyPaymentIntentDataMetadata
    | undefined;
  on_behalf_of?: string | undefined;
  receipt_email?: string | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  shipping?:
    | External$CheckoutSessionCreateBodyPaymentIntentDataShipping
    | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?:
    | External$CheckoutSessionCreateBodyPaymentIntentDataTransferData
    | undefined;
  transfer_group?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentIntentData
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentIntentData: z.ZodType<
  CheckoutSessionCreateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_amount: z.number().int().optional(),
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    description: z.string().optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    receipt_email: z.string().optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    shipping:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataShipping.in.optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataTransferData.in.optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_amount: "applicationFeeAmount",
      capture_method: "captureMethod",
      description: "description",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      receipt_email: "receiptEmail",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentIntentData
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentIntentData: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentIntentData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentIntentData // the object to be transformed
> = z
  .object({
    applicationFeeAmount: z.number().int().optional(),
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    description: z.string().optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    receiptEmail: z.string().optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    shipping:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataShipping.out.optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataTransferData.out.optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeeAmount: "application_fee_amount",
      captureMethod: "capture_method",
      description: "description",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      receiptEmail: "receipt_email",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentIntentData = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentIntentData,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentIntentData,
};
