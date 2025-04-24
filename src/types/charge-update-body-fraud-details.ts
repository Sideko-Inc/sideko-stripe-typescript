import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
 */
export type ChargeUpdateBodyFraudDetails = {
  userReport: "fraudulent" | "safe";
};

/**
 * @internal
 * ChargeUpdateBodyFraudDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeUpdateBodyFraudDetails = {
  user_report: "fraudulent" | "safe";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeUpdateBodyFraudDetails
 */
const SchemaIn$ChargeUpdateBodyFraudDetails: z.ZodType<
  ChargeUpdateBodyFraudDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    user_report: z.enum(["fraudulent", "safe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      user_report: "userReport",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeUpdateBodyFraudDetails
 */
const SchemaOut$ChargeUpdateBodyFraudDetails: z.ZodType<
  External$ChargeUpdateBodyFraudDetails, // output type of this zod object
  z.ZodTypeDef,
  ChargeUpdateBodyFraudDetails // the object to be transformed
> = z
  .object({
    userReport: z.enum(["fraudulent", "safe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      userReport: "user_report",
    });
  });

export const Schemas$ChargeUpdateBodyFraudDetails = {
  in: SchemaIn$ChargeUpdateBodyFraudDetails,
  out: SchemaOut$ChargeUpdateBodyFraudDetails,
};
