import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountDeclineChargeOn = {
  /**
   * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
   */
  avsFailure: boolean;
  /**
   * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
   */
  cvcFailure: boolean;
};

/**
 * @internal
 * AccountDeclineChargeOn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountDeclineChargeOn = {
  avs_failure: boolean;
  cvc_failure: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountDeclineChargeOn
 */
const SchemaIn$AccountDeclineChargeOn: z.ZodType<
  AccountDeclineChargeOn, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    avs_failure: z.boolean(),
    cvc_failure: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avs_failure: "avsFailure",
      cvc_failure: "cvcFailure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountDeclineChargeOn
 */
const SchemaOut$AccountDeclineChargeOn: z.ZodType<
  External$AccountDeclineChargeOn, // output type of this zod object
  z.ZodTypeDef,
  AccountDeclineChargeOn // the object to be transformed
> = z
  .object({
    avsFailure: z.boolean(),
    cvcFailure: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avsFailure: "avs_failure",
      cvcFailure: "cvc_failure",
    });
  });

export const Schemas$AccountDeclineChargeOn = {
  in: SchemaIn$AccountDeclineChargeOn,
  out: SchemaOut$AccountDeclineChargeOn,
};
