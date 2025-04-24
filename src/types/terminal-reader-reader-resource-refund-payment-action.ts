import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { External$Refund, Refund, Schemas$Refund } from "./refund";
import {
  External$TerminalReaderReaderResourceRefundPaymentActionMetadata,
  Schemas$TerminalReaderReaderResourceRefundPaymentActionMetadata,
  TerminalReaderReaderResourceRefundPaymentActionMetadata,
} from "./terminal-reader-reader-resource-refund-payment-action-metadata";
import {
  External$TerminalReaderReaderResourceRefundPaymentConfig,
  Schemas$TerminalReaderReaderResourceRefundPaymentConfig,
  TerminalReaderReaderResourceRefundPaymentConfig,
} from "./terminal-reader-reader-resource-refund-payment-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a reader action to refund a payment
 */
export type TerminalReaderReaderResourceRefundPaymentAction = {
  /**
   * The amount being refunded.
   */
  amount?: number | undefined;
  /**
   * Charge that is being refunded.
   */
  charge?: (string | Charge) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?:
    | TerminalReaderReaderResourceRefundPaymentActionMetadata
    | undefined;
  /**
   * Payment intent that is being refunded.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  /**
   * The reason for the refund.
   */
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  /**
   * Unique identifier for the refund object.
   */
  refund?: (string | Refund) | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Represents a per-transaction override of a reader configuration
   */
  refundPaymentConfig?:
    | TerminalReaderReaderResourceRefundPaymentConfig
    | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceRefundPaymentAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceRefundPaymentAction = {
  amount?: number | undefined;
  charge?: (string | External$Charge) | undefined;
  metadata?:
    | External$TerminalReaderReaderResourceRefundPaymentActionMetadata
    | undefined;
  payment_intent?: (string | External$PaymentIntent) | undefined;
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  refund?: (string | External$Refund) | undefined;
  refund_application_fee?: boolean | undefined;
  refund_payment_config?:
    | External$TerminalReaderReaderResourceRefundPaymentConfig
    | undefined;
  reverse_transfer?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceRefundPaymentAction
 */
const SchemaIn$TerminalReaderReaderResourceRefundPaymentAction: z.ZodType<
  TerminalReaderReaderResourceRefundPaymentAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]).optional(),
    metadata:
      Schemas$TerminalReaderReaderResourceRefundPaymentActionMetadata.in.optional(),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.in)]).optional(),
    refund_application_fee: z.boolean().optional(),
    refund_payment_config:
      Schemas$TerminalReaderReaderResourceRefundPaymentConfig.in.optional(),
    reverse_transfer: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      metadata: "metadata",
      payment_intent: "paymentIntent",
      reason: "reason",
      refund: "refund",
      refund_application_fee: "refundApplicationFee",
      refund_payment_config: "refundPaymentConfig",
      reverse_transfer: "reverseTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceRefundPaymentAction
 */
const SchemaOut$TerminalReaderReaderResourceRefundPaymentAction: z.ZodType<
  External$TerminalReaderReaderResourceRefundPaymentAction, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceRefundPaymentAction // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]).optional(),
    metadata:
      Schemas$TerminalReaderReaderResourceRefundPaymentActionMetadata.out.optional(),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.out)]).optional(),
    refundApplicationFee: z.boolean().optional(),
    refundPaymentConfig:
      Schemas$TerminalReaderReaderResourceRefundPaymentConfig.out.optional(),
    reverseTransfer: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      metadata: "metadata",
      paymentIntent: "payment_intent",
      reason: "reason",
      refund: "refund",
      refundApplicationFee: "refund_application_fee",
      refundPaymentConfig: "refund_payment_config",
      reverseTransfer: "reverse_transfer",
    });
  });

export const Schemas$TerminalReaderReaderResourceRefundPaymentAction = {
  in: SchemaIn$TerminalReaderReaderResourceRefundPaymentAction,
  out: SchemaOut$TerminalReaderReaderResourceRefundPaymentAction,
};
