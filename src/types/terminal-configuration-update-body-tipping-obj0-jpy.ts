import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyTippingObj0Jpy
 */
export type TerminalConfigurationUpdateBodyTippingObj0Jpy = {
  fixedAmounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyTippingObj0Jpy without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyTippingObj0Jpy = {
  fixed_amounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smart_tip_threshold?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyTippingObj0Jpy
 */
const SchemaIn$TerminalConfigurationUpdateBodyTippingObj0Jpy: z.ZodType<
  TerminalConfigurationUpdateBodyTippingObj0Jpy, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyTippingObj0Jpy
 */
const SchemaOut$TerminalConfigurationUpdateBodyTippingObj0Jpy: z.ZodType<
  External$TerminalConfigurationUpdateBodyTippingObj0Jpy, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyTippingObj0Jpy // the object to be transformed
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

export const Schemas$TerminalConfigurationUpdateBodyTippingObj0Jpy = {
  in: SchemaIn$TerminalConfigurationUpdateBodyTippingObj0Jpy,
  out: SchemaOut$TerminalConfigurationUpdateBodyTippingObj0Jpy,
};
