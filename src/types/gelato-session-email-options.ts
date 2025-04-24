import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoSessionEmailOptions = {
  /**
   * Request one time password verification of `provided_details.email`.
   */
  requireVerification?: boolean | undefined;
};

/**
 * @internal
 * GelatoSessionEmailOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoSessionEmailOptions = {
  require_verification?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoSessionEmailOptions
 */
const SchemaIn$GelatoSessionEmailOptions: z.ZodType<
  GelatoSessionEmailOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoSessionEmailOptions
 */
const SchemaOut$GelatoSessionEmailOptions: z.ZodType<
  External$GelatoSessionEmailOptions, // output type of this zod object
  z.ZodTypeDef,
  GelatoSessionEmailOptions // the object to be transformed
> = z
  .object({
    requireVerification: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requireVerification: "require_verification",
    });
  });

export const Schemas$GelatoSessionEmailOptions = {
  in: SchemaIn$GelatoSessionEmailOptions,
  out: SchemaOut$GelatoSessionEmailOptions,
};
