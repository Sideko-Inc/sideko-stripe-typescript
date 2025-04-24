import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoSessionPhoneOptions = {
  /**
   * Request one time password verification of `provided_details.phone`.
   */
  requireVerification?: boolean | undefined;
};

/**
 * @internal
 * GelatoSessionPhoneOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoSessionPhoneOptions = {
  require_verification?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoSessionPhoneOptions
 */
const SchemaIn$GelatoSessionPhoneOptions: z.ZodType<
  GelatoSessionPhoneOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    require_verification: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      require_verification: "requireVerification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoSessionPhoneOptions
 */
const SchemaOut$GelatoSessionPhoneOptions: z.ZodType<
  External$GelatoSessionPhoneOptions, // output type of this zod object
  z.ZodTypeDef,
  GelatoSessionPhoneOptions // the object to be transformed
> = z
  .object({
    requireVerification: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requireVerification: "require_verification",
    });
  });

export const Schemas$GelatoSessionPhoneOptions = {
  in: SchemaIn$GelatoSessionPhoneOptions,
  out: SchemaOut$GelatoSessionPhoneOptions,
};
