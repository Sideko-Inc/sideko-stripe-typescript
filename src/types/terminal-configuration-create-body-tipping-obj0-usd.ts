import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyTippingObj0Usd
 */
export type TerminalConfigurationCreateBodyTippingObj0Usd = {
  fixedAmounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyTippingObj0Usd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyTippingObj0Usd = {
  fixed_amounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smart_tip_threshold?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyTippingObj0Usd
 */
const SchemaIn$TerminalConfigurationCreateBodyTippingObj0Usd: z.ZodType<
  TerminalConfigurationCreateBodyTippingObj0Usd, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyTippingObj0Usd
 */
const SchemaOut$TerminalConfigurationCreateBodyTippingObj0Usd: z.ZodType<
  External$TerminalConfigurationCreateBodyTippingObj0Usd, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyTippingObj0Usd // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyTippingObj0Usd = {
  in: SchemaIn$TerminalConfigurationCreateBodyTippingObj0Usd,
  out: SchemaOut$TerminalConfigurationCreateBodyTippingObj0Usd,
};
