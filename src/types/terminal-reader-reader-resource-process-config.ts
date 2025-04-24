import {
  External$TerminalReaderReaderResourceTippingConfig,
  Schemas$TerminalReaderReaderResourceTippingConfig,
  TerminalReaderReaderResourceTippingConfig,
} from "./terminal-reader-reader-resource-tipping-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a per-transaction override of a reader configuration
 */
export type TerminalReaderReaderResourceProcessConfig = {
  /**
   * Enable customer initiated cancellation when processing this payment.
   */
  enableCustomerCancellation?: boolean | undefined;
  /**
   * Override showing a tipping selection screen on this transaction.
   */
  skipTipping?: boolean | undefined;
  /**
   * Represents a per-transaction tipping configuration
   */
  tipping?: TerminalReaderReaderResourceTippingConfig | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceProcessConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceProcessConfig = {
  enable_customer_cancellation?: boolean | undefined;
  skip_tipping?: boolean | undefined;
  tipping?: External$TerminalReaderReaderResourceTippingConfig | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceProcessConfig
 */
const SchemaIn$TerminalReaderReaderResourceProcessConfig: z.ZodType<
  TerminalReaderReaderResourceProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enable_customer_cancellation: z.boolean().optional(),
    skip_tipping: z.boolean().optional(),
    tipping: Schemas$TerminalReaderReaderResourceTippingConfig.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enable_customer_cancellation: "enableCustomerCancellation",
      skip_tipping: "skipTipping",
      tipping: "tipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceProcessConfig
 */
const SchemaOut$TerminalReaderReaderResourceProcessConfig: z.ZodType<
  External$TerminalReaderReaderResourceProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceProcessConfig // the object to be transformed
> = z
  .object({
    enableCustomerCancellation: z.boolean().optional(),
    skipTipping: z.boolean().optional(),
    tipping: Schemas$TerminalReaderReaderResourceTippingConfig.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enableCustomerCancellation: "enable_customer_cancellation",
      skipTipping: "skip_tipping",
      tipping: "tipping",
    });
  });

export const Schemas$TerminalReaderReaderResourceProcessConfig = {
  in: SchemaIn$TerminalReaderReaderResourceProcessConfig,
  out: SchemaOut$TerminalReaderReaderResourceProcessConfig,
};
