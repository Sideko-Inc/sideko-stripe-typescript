import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a per-transaction tipping configuration
 */
export type TerminalReaderReaderResourceTippingConfig = {
  /**
   * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
   */
  amountEligible?: number | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceTippingConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceTippingConfig = {
  amount_eligible?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceTippingConfig
 */
const SchemaIn$TerminalReaderReaderResourceTippingConfig: z.ZodType<
  TerminalReaderReaderResourceTippingConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_eligible: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_eligible: "amountEligible",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceTippingConfig
 */
const SchemaOut$TerminalReaderReaderResourceTippingConfig: z.ZodType<
  External$TerminalReaderReaderResourceTippingConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceTippingConfig // the object to be transformed
> = z
  .object({
    amountEligible: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountEligible: "amount_eligible",
    });
  });

export const Schemas$TerminalReaderReaderResourceTippingConfig = {
  in: SchemaIn$TerminalReaderReaderResourceTippingConfig,
  out: SchemaOut$TerminalReaderReaderResourceTippingConfig,
};
