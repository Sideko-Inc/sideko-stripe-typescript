import {
  ChargeRefundCreate1BodyMetadataObj0,
  External$ChargeRefundCreate1BodyMetadataObj0,
  Schemas$ChargeRefundCreate1BodyMetadataObj0,
} from "./charge-refund-create1-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeRefundCreate1Body
 */
export type ChargeRefundCreate1Body = {
  amount?: number | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Customer whose customer balance to refund from.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructionsEmail?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeRefundCreate1BodyMetadataObj0 | string) | undefined;
  /**
   * Origin of the refund
   */
  origin?: "customer_balance" | undefined;
  /**
   * The identifier of the PaymentIntent to refund.
   */
  paymentIntent?: string | undefined;
  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).<br><br>A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((ChargeRefundCreate1BodyMetadataObj0 | string) | undefined)
    | ("customer_balance" | undefined)
    | (string | undefined)
    | (("duplicate" | "fraudulent" | "requested_by_customer") | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeRefundCreate1Body without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeRefundCreate1Body = {
  amount?: number | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  expand?: string[] | undefined;
  instructions_email?: string | undefined;
  metadata?:
    | (External$ChargeRefundCreate1BodyMetadataObj0 | string)
    | undefined;
  origin?: "customer_balance" | undefined;
  payment_intent?: string | undefined;
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  refund_application_fee?: boolean | undefined;
  reverse_transfer?: boolean | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((External$ChargeRefundCreate1BodyMetadataObj0 | string) | undefined)
    | ("customer_balance" | undefined)
    | (string | undefined)
    | (("duplicate" | "fraudulent" | "requested_by_customer") | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | External$ChargeRefundCreate1Body
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeRefundCreate1Body
 */
const SchemaIn$ChargeRefundCreate1Body: z.ZodType<
  ChargeRefundCreate1Body, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    instructions_email: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreate1BodyMetadataObj0.in, z.string()])
      .optional(),
    origin: z.enum(["customer_balance"]).optional(),
    payment_intent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refund_application_fee: z.boolean().optional(),
    reverse_transfer: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      instructions_email: "instructionsEmail",
      metadata: "metadata",
      origin: "origin",
      payment_intent: "paymentIntent",
      reason: "reason",
      refund_application_fee: "refundApplicationFee",
      reverse_transfer: "reverseTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeRefundCreate1Body
 */
const SchemaOut$ChargeRefundCreate1Body: z.ZodType<
  External$ChargeRefundCreate1Body, // output type of this zod object
  z.ZodTypeDef,
  ChargeRefundCreate1Body // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    instructionsEmail: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreate1BodyMetadataObj0.out, z.string()])
      .optional(),
    origin: z.enum(["customer_balance"]).optional(),
    paymentIntent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refundApplicationFee: z.boolean().optional(),
    reverseTransfer: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      instructionsEmail: "instructions_email",
      metadata: "metadata",
      origin: "origin",
      paymentIntent: "payment_intent",
      reason: "reason",
      refundApplicationFee: "refund_application_fee",
      reverseTransfer: "reverse_transfer",
    });
  });

export const Schemas$ChargeRefundCreate1Body = {
  in: SchemaIn$ChargeRefundCreate1Body,
  out: SchemaOut$ChargeRefundCreate1Body,
};
