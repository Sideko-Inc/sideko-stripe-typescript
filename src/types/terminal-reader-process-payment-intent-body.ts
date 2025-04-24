import {
  External$TerminalReaderProcessPaymentIntentBodyProcessConfig,
  Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig,
  TerminalReaderProcessPaymentIntentBodyProcessConfig,
} from "./terminal-reader-process-payment-intent-body-process-config";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderProcessPaymentIntentBody
 */
export type TerminalReaderProcessPaymentIntentBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * PaymentIntent ID
   */
  paymentIntent: string;
  /**
   * Configuration overrides
   */
  processConfig?:
    | TerminalReaderProcessPaymentIntentBodyProcessConfig
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | (TerminalReaderProcessPaymentIntentBodyProcessConfig | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalReaderProcessPaymentIntentBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderProcessPaymentIntentBody = {
  expand?: string[] | undefined;
  payment_intent: string;
  process_config?:
    | External$TerminalReaderProcessPaymentIntentBodyProcessConfig
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | (External$TerminalReaderProcessPaymentIntentBodyProcessConfig | undefined)
    | External$TerminalReaderProcessPaymentIntentBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderProcessPaymentIntentBody
 */
const SchemaIn$TerminalReaderProcessPaymentIntentBody: z.ZodType<
  TerminalReaderProcessPaymentIntentBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    payment_intent: z.string(),
    process_config:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      payment_intent: "paymentIntent",
      process_config: "processConfig",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderProcessPaymentIntentBody
 */
const SchemaOut$TerminalReaderProcessPaymentIntentBody: z.ZodType<
  External$TerminalReaderProcessPaymentIntentBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderProcessPaymentIntentBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    paymentIntent: z.string(),
    processConfig:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      paymentIntent: "payment_intent",
      processConfig: "process_config",
    });
  });

export const Schemas$TerminalReaderProcessPaymentIntentBody = {
  in: SchemaIn$TerminalReaderProcessPaymentIntentBody,
  out: SchemaOut$TerminalReaderProcessPaymentIntentBody,
};
