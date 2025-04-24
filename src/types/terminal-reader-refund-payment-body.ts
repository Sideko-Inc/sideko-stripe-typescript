import {
  External$TerminalReaderRefundPaymentBodyMetadata,
  Schemas$TerminalReaderRefundPaymentBodyMetadata,
  TerminalReaderRefundPaymentBodyMetadata,
} from "./terminal-reader-refund-payment-body-metadata";
import {
  External$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
  Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
  TerminalReaderRefundPaymentBodyRefundPaymentConfig,
} from "./terminal-reader-refund-payment-body-refund-payment-config";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderRefundPaymentBody
 */
export type TerminalReaderRefundPaymentBody = {
  /**
   * A positive integer in __cents__ representing how much of this charge to refund.
   */
  amount?: number | undefined;
  /**
   * ID of the Charge to refund.
   */
  charge?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TerminalReaderRefundPaymentBodyMetadata | undefined;
  /**
   * ID of the PaymentIntent to refund.
   */
  paymentIntent?: string | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Configuration overrides
   */
  refundPaymentConfig?:
    | TerminalReaderRefundPaymentBodyRefundPaymentConfig
    | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (TerminalReaderRefundPaymentBodyMetadata | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (TerminalReaderRefundPaymentBodyRefundPaymentConfig | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalReaderRefundPaymentBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderRefundPaymentBody = {
  amount?: number | undefined;
  charge?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$TerminalReaderRefundPaymentBodyMetadata | undefined;
  payment_intent?: string | undefined;
  refund_application_fee?: boolean | undefined;
  refund_payment_config?:
    | External$TerminalReaderRefundPaymentBodyRefundPaymentConfig
    | undefined;
  reverse_transfer?: boolean | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$TerminalReaderRefundPaymentBodyMetadata | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (External$TerminalReaderRefundPaymentBodyRefundPaymentConfig | undefined)
    | (boolean | undefined)
    | External$TerminalReaderRefundPaymentBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderRefundPaymentBody
 */
const SchemaIn$TerminalReaderRefundPaymentBody: z.ZodType<
  TerminalReaderRefundPaymentBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TerminalReaderRefundPaymentBodyMetadata.in.optional(),
    payment_intent: z.string().optional(),
    refund_application_fee: z.boolean().optional(),
    refund_payment_config:
      Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig.in.optional(),
    reverse_transfer: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      expand: "expand",
      metadata: "metadata",
      payment_intent: "paymentIntent",
      refund_application_fee: "refundApplicationFee",
      refund_payment_config: "refundPaymentConfig",
      reverse_transfer: "reverseTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderRefundPaymentBody
 */
const SchemaOut$TerminalReaderRefundPaymentBody: z.ZodType<
  External$TerminalReaderRefundPaymentBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderRefundPaymentBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TerminalReaderRefundPaymentBodyMetadata.out.optional(),
    paymentIntent: z.string().optional(),
    refundApplicationFee: z.boolean().optional(),
    refundPaymentConfig:
      Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig.out.optional(),
    reverseTransfer: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      expand: "expand",
      metadata: "metadata",
      paymentIntent: "payment_intent",
      refundApplicationFee: "refund_application_fee",
      refundPaymentConfig: "refund_payment_config",
      reverseTransfer: "reverse_transfer",
    });
  });

export const Schemas$TerminalReaderRefundPaymentBody = {
  in: SchemaIn$TerminalReaderRefundPaymentBody,
  out: SchemaOut$TerminalReaderRefundPaymentBody,
};
