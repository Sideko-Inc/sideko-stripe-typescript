import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration overrides
 */
export type TerminalReaderProcessSetupIntentBodyProcessConfig = {
  enableCustomerCancellation?: boolean | undefined;
};

/**
 * @internal
 * TerminalReaderProcessSetupIntentBodyProcessConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderProcessSetupIntentBodyProcessConfig = {
  enable_customer_cancellation?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderProcessSetupIntentBodyProcessConfig
 */
const SchemaIn$TerminalReaderProcessSetupIntentBodyProcessConfig: z.ZodType<
  TerminalReaderProcessSetupIntentBodyProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enable_customer_cancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enable_customer_cancellation: "enableCustomerCancellation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderProcessSetupIntentBodyProcessConfig
 */
const SchemaOut$TerminalReaderProcessSetupIntentBodyProcessConfig: z.ZodType<
  External$TerminalReaderProcessSetupIntentBodyProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderProcessSetupIntentBodyProcessConfig // the object to be transformed
> = z
  .object({
    enableCustomerCancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enableCustomerCancellation: "enable_customer_cancellation",
    });
  });

export const Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig = {
  in: SchemaIn$TerminalReaderProcessSetupIntentBodyProcessConfig,
  out: SchemaOut$TerminalReaderProcessSetupIntentBodyProcessConfig,
};
