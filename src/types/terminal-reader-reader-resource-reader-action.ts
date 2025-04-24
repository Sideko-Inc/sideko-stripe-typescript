import {
  External$TerminalReaderReaderResourceProcessPaymentIntentAction,
  Schemas$TerminalReaderReaderResourceProcessPaymentIntentAction,
  TerminalReaderReaderResourceProcessPaymentIntentAction,
} from "./terminal-reader-reader-resource-process-payment-intent-action";
import {
  External$TerminalReaderReaderResourceProcessSetupIntentAction,
  Schemas$TerminalReaderReaderResourceProcessSetupIntentAction,
  TerminalReaderReaderResourceProcessSetupIntentAction,
} from "./terminal-reader-reader-resource-process-setup-intent-action";
import {
  External$TerminalReaderReaderResourceRefundPaymentAction,
  Schemas$TerminalReaderReaderResourceRefundPaymentAction,
  TerminalReaderReaderResourceRefundPaymentAction,
} from "./terminal-reader-reader-resource-refund-payment-action";
import {
  External$TerminalReaderReaderResourceSetReaderDisplayAction,
  Schemas$TerminalReaderReaderResourceSetReaderDisplayAction,
  TerminalReaderReaderResourceSetReaderDisplayAction,
} from "./terminal-reader-reader-resource-set-reader-display-action";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents an action performed by the reader
 */
export type TerminalReaderReaderResourceReaderAction = {
  /**
   * Failure code, only set if status is `failed`.
   */
  failureCode?: string | null | undefined;
  /**
   * Detailed failure message, only set if status is `failed`.
   */
  failureMessage?: string | null | undefined;
  /**
   * Represents a reader action to process a payment intent
   */
  processPaymentIntent?:
    | TerminalReaderReaderResourceProcessPaymentIntentAction
    | undefined;
  /**
   * Represents a reader action to process a setup intent
   */
  processSetupIntent?:
    | TerminalReaderReaderResourceProcessSetupIntentAction
    | undefined;
  /**
   * Represents a reader action to refund a payment
   */
  refundPayment?: TerminalReaderReaderResourceRefundPaymentAction | undefined;
  /**
   * Represents a reader action to set the reader display
   */
  setReaderDisplay?:
    | TerminalReaderReaderResourceSetReaderDisplayAction
    | undefined;
  /**
   * Status of the action performed by the reader.
   */
  status: "failed" | "in_progress" | "succeeded";
  /**
   * Type of action performed by the reader.
   */
  type:
    | "process_payment_intent"
    | "process_setup_intent"
    | "refund_payment"
    | "set_reader_display";
};

/**
 * @internal
 * TerminalReaderReaderResourceReaderAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceReaderAction = {
  failure_code?: string | null | undefined;
  failure_message?: string | null | undefined;
  process_payment_intent?:
    | External$TerminalReaderReaderResourceProcessPaymentIntentAction
    | undefined;
  process_setup_intent?:
    | External$TerminalReaderReaderResourceProcessSetupIntentAction
    | undefined;
  refund_payment?:
    | External$TerminalReaderReaderResourceRefundPaymentAction
    | undefined;
  set_reader_display?:
    | External$TerminalReaderReaderResourceSetReaderDisplayAction
    | undefined;
  status: "failed" | "in_progress" | "succeeded";
  type:
    | "process_payment_intent"
    | "process_setup_intent"
    | "refund_payment"
    | "set_reader_display";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceReaderAction
 */
const SchemaIn$TerminalReaderReaderResourceReaderAction: z.ZodType<
  TerminalReaderReaderResourceReaderAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    failure_code: z.string().nullable().optional(),
    failure_message: z.string().nullable().optional(),
    process_payment_intent: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceProcessPaymentIntentAction.in.optional(),
    ),
    process_setup_intent: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceProcessSetupIntentAction.in.optional(),
    ),
    refund_payment: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceRefundPaymentAction.in.optional(),
    ),
    set_reader_display:
      Schemas$TerminalReaderReaderResourceSetReaderDisplayAction.in.optional(),
    status: z.enum(["failed", "in_progress", "succeeded"]),
    type: z.enum([
      "process_payment_intent",
      "process_setup_intent",
      "refund_payment",
      "set_reader_display",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      failure_code: "failureCode",
      failure_message: "failureMessage",
      process_payment_intent: "processPaymentIntent",
      process_setup_intent: "processSetupIntent",
      refund_payment: "refundPayment",
      set_reader_display: "setReaderDisplay",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceReaderAction
 */
const SchemaOut$TerminalReaderReaderResourceReaderAction: z.ZodType<
  External$TerminalReaderReaderResourceReaderAction, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceReaderAction // the object to be transformed
> = z
  .object({
    failureCode: z.string().nullable().optional(),
    failureMessage: z.string().nullable().optional(),
    processPaymentIntent: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceProcessPaymentIntentAction.out.optional(),
    ),
    processSetupIntent: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceProcessSetupIntentAction.out.optional(),
    ),
    refundPayment: z.lazy(() =>
      Schemas$TerminalReaderReaderResourceRefundPaymentAction.out.optional(),
    ),
    setReaderDisplay:
      Schemas$TerminalReaderReaderResourceSetReaderDisplayAction.out.optional(),
    status: z.enum(["failed", "in_progress", "succeeded"]),
    type: z.enum([
      "process_payment_intent",
      "process_setup_intent",
      "refund_payment",
      "set_reader_display",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      failureCode: "failure_code",
      failureMessage: "failure_message",
      processPaymentIntent: "process_payment_intent",
      processSetupIntent: "process_setup_intent",
      refundPayment: "refund_payment",
      setReaderDisplay: "set_reader_display",
      status: "status",
      type: "type",
    });
  });

export const Schemas$TerminalReaderReaderResourceReaderAction = {
  in: SchemaIn$TerminalReaderReaderResourceReaderAction,
  out: SchemaOut$TerminalReaderReaderResourceReaderAction,
};
