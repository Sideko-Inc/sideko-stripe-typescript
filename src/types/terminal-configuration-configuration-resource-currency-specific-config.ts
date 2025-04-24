import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceCurrencySpecificConfig = {
  /**
   * Fixed amounts displayed when collecting a tip
   */
  fixedAmounts?: number[] | null | undefined;
  /**
   * Percentages displayed when collecting a tip
   */
  percentages?: number[] | null | undefined;
  /**
   * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
   */
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceCurrencySpecificConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig =
  {
    fixed_amounts?: number[] | null | undefined;
    percentages?: number[] | null | undefined;
    smart_tip_threshold?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceCurrencySpecificConfig
 */
const SchemaIn$TerminalConfigurationConfigurationResourceCurrencySpecificConfig: z.ZodType<
  TerminalConfigurationConfigurationResourceCurrencySpecificConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fixed_amounts: z.array(z.number().int()).nullable().optional(),
    percentages: z.array(z.number().int()).nullable().optional(),
    smart_tip_threshold: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fixed_amounts: "fixedAmounts",
      percentages: "percentages",
      smart_tip_threshold: "smartTipThreshold",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
 */
const SchemaOut$TerminalConfigurationConfigurationResourceCurrencySpecificConfig: z.ZodType<
  External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceCurrencySpecificConfig // the object to be transformed
> = z
  .object({
    fixedAmounts: z.array(z.number().int()).nullable().optional(),
    percentages: z.array(z.number().int()).nullable().optional(),
    smartTipThreshold: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fixedAmounts: "fixed_amounts",
      percentages: "percentages",
      smartTipThreshold: "smart_tip_threshold",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig =
  {
    in: SchemaIn$TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
    out: SchemaOut$TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
  };
