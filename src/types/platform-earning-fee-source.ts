import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PlatformEarningFeeSource = {
  /**
   * Charge ID that created this application fee.
   */
  charge?: string | undefined;
  /**
   * Payout ID that created this application fee.
   */
  payout?: string | undefined;
  /**
   * Type of object that created the application fee.
   */
  type: "charge" | "payout";
};

/**
 * @internal
 * PlatformEarningFeeSource without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlatformEarningFeeSource = {
  charge?: string | undefined;
  payout?: string | undefined;
  type: "charge" | "payout";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlatformEarningFeeSource
 */
const SchemaIn$PlatformEarningFeeSource: z.ZodType<
  PlatformEarningFeeSource, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.string().optional(),
    payout: z.string().optional(),
    type: z.enum(["charge", "payout"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      payout: "payout",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlatformEarningFeeSource
 */
const SchemaOut$PlatformEarningFeeSource: z.ZodType<
  External$PlatformEarningFeeSource, // output type of this zod object
  z.ZodTypeDef,
  PlatformEarningFeeSource // the object to be transformed
> = z
  .object({
    charge: z.string().optional(),
    payout: z.string().optional(),
    type: z.enum(["charge", "payout"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      payout: "payout",
      type: "type",
    });
  });

export const Schemas$PlatformEarningFeeSource = {
  in: SchemaIn$PlatformEarningFeeSource,
  out: SchemaOut$PlatformEarningFeeSource,
};
