import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyTippingObj0Usd
 */
export type TerminalConfigurationUpdateBodyTippingObj0Usd = {
  fixedAmounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyTippingObj0Usd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyTippingObj0Usd = {
  fixed_amounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smart_tip_threshold?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyTippingObj0Usd
 */
const SchemaIn$TerminalConfigurationUpdateBodyTippingObj0Usd: z.ZodType<
  TerminalConfigurationUpdateBodyTippingObj0Usd, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fixed_amounts: z.array(z.number().int()).optional(),
    percentages: z.array(z.number().int()).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyTippingObj0Usd
 */
const SchemaOut$TerminalConfigurationUpdateBodyTippingObj0Usd: z.ZodType<
  External$TerminalConfigurationUpdateBodyTippingObj0Usd, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyTippingObj0Usd // the object to be transformed
> = z
  .object({
    fixedAmounts: z.array(z.number().int()).optional(),
    percentages: z.array(z.number().int()).optional(),
    smartTipThreshold: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fixedAmounts: "fixed_amounts",
      percentages: "percentages",
      smartTipThreshold: "smart_tip_threshold",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyTippingObj0Usd = {
  in: SchemaIn$TerminalConfigurationUpdateBodyTippingObj0Usd,
  out: SchemaOut$TerminalConfigurationUpdateBodyTippingObj0Usd,
};
