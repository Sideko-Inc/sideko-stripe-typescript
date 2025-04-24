import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a per-setup override of a reader configuration
 */
export type TerminalReaderReaderResourceProcessSetupConfig = {
  /**
   * Enable customer initiated cancellation when processing this SetupIntent.
   */
  enableCustomerCancellation?: boolean | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceProcessSetupConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceProcessSetupConfig = {
  enable_customer_cancellation?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceProcessSetupConfig
 */
const SchemaIn$TerminalReaderReaderResourceProcessSetupConfig: z.ZodType<
  TerminalReaderReaderResourceProcessSetupConfig, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceProcessSetupConfig
 */
const SchemaOut$TerminalReaderReaderResourceProcessSetupConfig: z.ZodType<
  External$TerminalReaderReaderResourceProcessSetupConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceProcessSetupConfig // the object to be transformed
> = z
  .object({
    enableCustomerCancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enableCustomerCancellation: "enable_customer_cancellation",
    });
  });

export const Schemas$TerminalReaderReaderResourceProcessSetupConfig = {
  in: SchemaIn$TerminalReaderReaderResourceProcessSetupConfig,
  out: SchemaOut$TerminalReaderReaderResourceProcessSetupConfig,
};
