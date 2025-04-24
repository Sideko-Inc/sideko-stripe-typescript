import {
  External$SetupIntent,
  Schemas$SetupIntent,
  SetupIntent,
} from "./setup-intent";
import {
  External$TerminalReaderReaderResourceProcessSetupConfig,
  Schemas$TerminalReaderReaderResourceProcessSetupConfig,
  TerminalReaderReaderResourceProcessSetupConfig,
} from "./terminal-reader-reader-resource-process-setup-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a reader action to process a setup intent
 */
export type TerminalReaderReaderResourceProcessSetupIntentAction = {
  /**
   * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
   */
  generatedCard?: string | undefined;
  /**
   * Represents a per-setup override of a reader configuration
   */
  processConfig?: TerminalReaderReaderResourceProcessSetupConfig | undefined;
  /**
   * Most recent SetupIntent processed by the reader.
   */
  setupIntent: string | SetupIntent;
};

/**
 * @internal
 * TerminalReaderReaderResourceProcessSetupIntentAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceProcessSetupIntentAction = {
  generated_card?: string | undefined;
  process_config?:
    | External$TerminalReaderReaderResourceProcessSetupConfig
    | undefined;
  setup_intent: string | External$SetupIntent;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceProcessSetupIntentAction
 */
const SchemaIn$TerminalReaderReaderResourceProcessSetupIntentAction: z.ZodType<
  TerminalReaderReaderResourceProcessSetupIntentAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    generated_card: z.string().optional(),
    process_config:
      Schemas$TerminalReaderReaderResourceProcessSetupConfig.in.optional(),
    setup_intent: z.union([z.string(), z.lazy(() => Schemas$SetupIntent.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      generated_card: "generatedCard",
      process_config: "processConfig",
      setup_intent: "setupIntent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceProcessSetupIntentAction
 */
const SchemaOut$TerminalReaderReaderResourceProcessSetupIntentAction: z.ZodType<
  External$TerminalReaderReaderResourceProcessSetupIntentAction, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceProcessSetupIntentAction // the object to be transformed
> = z
  .object({
    generatedCard: z.string().optional(),
    processConfig:
      Schemas$TerminalReaderReaderResourceProcessSetupConfig.out.optional(),
    setupIntent: z.union([z.string(), z.lazy(() => Schemas$SetupIntent.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      generatedCard: "generated_card",
      processConfig: "process_config",
      setupIntent: "setup_intent",
    });
  });

export const Schemas$TerminalReaderReaderResourceProcessSetupIntentAction = {
  in: SchemaIn$TerminalReaderReaderResourceProcessSetupIntentAction,
  out: SchemaOut$TerminalReaderReaderResourceProcessSetupIntentAction,
};
