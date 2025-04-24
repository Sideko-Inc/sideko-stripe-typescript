import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import {
  External$TerminalReaderReaderResourceProcessConfig,
  Schemas$TerminalReaderReaderResourceProcessConfig,
  TerminalReaderReaderResourceProcessConfig,
} from "./terminal-reader-reader-resource-process-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a reader action to process a payment intent
 */
export type TerminalReaderReaderResourceProcessPaymentIntentAction = {
  /**
   * Most recent PaymentIntent processed by the reader.
   */
  paymentIntent: string | PaymentIntent;
  /**
   * Represents a per-transaction override of a reader configuration
   */
  processConfig?: TerminalReaderReaderResourceProcessConfig | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceProcessPaymentIntentAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceProcessPaymentIntentAction = {
  payment_intent: string | External$PaymentIntent;
  process_config?:
    | External$TerminalReaderReaderResourceProcessConfig
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceProcessPaymentIntentAction
 */
const SchemaIn$TerminalReaderReaderResourceProcessPaymentIntentAction: z.ZodType<
  TerminalReaderReaderResourceProcessPaymentIntentAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_intent: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentIntent.in),
    ]),
    process_config:
      Schemas$TerminalReaderReaderResourceProcessConfig.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_intent: "paymentIntent",
      process_config: "processConfig",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceProcessPaymentIntentAction
 */
const SchemaOut$TerminalReaderReaderResourceProcessPaymentIntentAction: z.ZodType<
  External$TerminalReaderReaderResourceProcessPaymentIntentAction, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceProcessPaymentIntentAction // the object to be transformed
> = z
  .object({
    paymentIntent: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentIntent.out),
    ]),
    processConfig:
      Schemas$TerminalReaderReaderResourceProcessConfig.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentIntent: "payment_intent",
      processConfig: "process_config",
    });
  });

export const Schemas$TerminalReaderReaderResourceProcessPaymentIntentAction = {
  in: SchemaIn$TerminalReaderReaderResourceProcessPaymentIntentAction,
  out: SchemaOut$TerminalReaderReaderResourceProcessPaymentIntentAction,
};
