import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyTippingObj0Myr
 */
export type TerminalConfigurationCreateBodyTippingObj0Myr = {
  fixedAmounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smartTipThreshold?: number | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyTippingObj0Myr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyTippingObj0Myr = {
  fixed_amounts?: number[] | undefined;
  percentages?: number[] | undefined;
  smart_tip_threshold?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyTippingObj0Myr
 */
const SchemaIn$TerminalConfigurationCreateBodyTippingObj0Myr: z.ZodType<
  TerminalConfigurationCreateBodyTippingObj0Myr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyTippingObj0Myr
 */
const SchemaOut$TerminalConfigurationCreateBodyTippingObj0Myr: z.ZodType<
  External$TerminalConfigurationCreateBodyTippingObj0Myr, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyTippingObj0Myr // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyTippingObj0Myr = {
  in: SchemaIn$TerminalConfigurationCreateBodyTippingObj0Myr,
  out: SchemaOut$TerminalConfigurationCreateBodyTippingObj0Myr,
};
