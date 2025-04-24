import {
  External$TerminalReaderProcessSetupIntentBodyProcessConfig,
  Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig,
  TerminalReaderProcessSetupIntentBodyProcessConfig,
} from "./terminal-reader-process-setup-intent-body-process-config";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderProcessSetupIntentBody
 */
export type TerminalReaderProcessSetupIntentBody = {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
   */
  allowRedisplay: "always" | "limited" | "unspecified";
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Configuration overrides
   */
  processConfig?: TerminalReaderProcessSetupIntentBodyProcessConfig | undefined;
  /**
   * SetupIntent ID
   */
  setupIntent: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ("always" | "limited" | "unspecified")
    | (string[] | undefined)
    | (TerminalReaderProcessSetupIntentBodyProcessConfig | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalReaderProcessSetupIntentBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderProcessSetupIntentBody = {
  allow_redisplay: "always" | "limited" | "unspecified";
  expand?: string[] | undefined;
  process_config?:
    | External$TerminalReaderProcessSetupIntentBodyProcessConfig
    | undefined;
  setup_intent: string;

  [additionalProperty: string]:
    | ("always" | "limited" | "unspecified")
    | (string[] | undefined)
    | (External$TerminalReaderProcessSetupIntentBodyProcessConfig | undefined)
    | string
    | External$TerminalReaderProcessSetupIntentBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderProcessSetupIntentBody
 */
const SchemaIn$TerminalReaderProcessSetupIntentBody: z.ZodType<
  TerminalReaderProcessSetupIntentBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay: z.enum(["always", "limited", "unspecified"]),
    expand: z.array(z.string()).optional(),
    process_config:
      Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig.in.optional(),
    setup_intent: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay: "allowRedisplay",
      expand: "expand",
      process_config: "processConfig",
      setup_intent: "setupIntent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderProcessSetupIntentBody
 */
const SchemaOut$TerminalReaderProcessSetupIntentBody: z.ZodType<
  External$TerminalReaderProcessSetupIntentBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderProcessSetupIntentBody // the object to be transformed
> = z
  .object({
    allowRedisplay: z.enum(["always", "limited", "unspecified"]),
    expand: z.array(z.string()).optional(),
    processConfig:
      Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig.out.optional(),
    setupIntent: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplay: "allow_redisplay",
      expand: "expand",
      processConfig: "process_config",
      setupIntent: "setup_intent",
    });
  });

export const Schemas$TerminalReaderProcessSetupIntentBody = {
  in: SchemaIn$TerminalReaderProcessSetupIntentBody,
  out: SchemaOut$TerminalReaderProcessSetupIntentBody,
};
