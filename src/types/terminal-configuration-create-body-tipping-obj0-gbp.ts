import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyTippingObj0Gbp
 */
export type TerminalConfigurationCreateBodyTippingObj0Gbp = {
  fixedAmounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyTippingObj0Gbp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyTippingObj0Gbp = {
  fixed_amounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smart_tip_threshold?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyTippingObj0Gbp
 */
const SchemaIn$TerminalConfigurationCreateBodyTippingObj0Gbp: z.ZodType<
  TerminalConfigurationCreateBodyTippingObj0Gbp, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyTippingObj0Gbp
 */
const SchemaOut$TerminalConfigurationCreateBodyTippingObj0Gbp: z.ZodType<
  External$TerminalConfigurationCreateBodyTippingObj0Gbp, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyTippingObj0Gbp // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyTippingObj0Gbp = {
  in: SchemaIn$TerminalConfigurationCreateBodyTippingObj0Gbp,
  out: SchemaOut$TerminalConfigurationCreateBodyTippingObj0Gbp,
};
