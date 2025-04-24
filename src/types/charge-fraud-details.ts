import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ChargeFraudDetails = {
  /**
   * Assessments from Stripe. If set, the value is `fraudulent`.
   */
  stripeReport?: string | undefined;
  /**
   * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
   */
  userReport?: string | undefined;
};

/**
 * @internal
 * ChargeFraudDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeFraudDetails = {
  stripe_report?: string | undefined;
  user_report?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeFraudDetails
 */
const SchemaIn$ChargeFraudDetails: z.ZodType<
  ChargeFraudDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    stripe_report: z.string().optional(),
    user_report: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      stripe_report: "stripeReport",
      user_report: "userReport",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeFraudDetails
 */
const SchemaOut$ChargeFraudDetails: z.ZodType<
  External$ChargeFraudDetails, // output type of this zod object
  z.ZodTypeDef,
  ChargeFraudDetails // the object to be transformed
> = z
  .object({
    stripeReport: z.string().optional(),
    userReport: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      stripeReport: "stripe_report",
      userReport: "user_report",
    });
  });

export const Schemas$ChargeFraudDetails = {
  in: SchemaIn$ChargeFraudDetails,
  out: SchemaOut$ChargeFraudDetails,
};
