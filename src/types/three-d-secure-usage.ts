import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ThreeDSecureUsage = {
  /**
   * Whether 3D Secure is supported on this card.
   */
  supported: boolean;
};

/**
 * @internal
 * ThreeDSecureUsage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ThreeDSecureUsage = {
  supported: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ThreeDSecureUsage
 */
const SchemaIn$ThreeDSecureUsage: z.ZodType<
  ThreeDSecureUsage, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    supported: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      supported: "supported",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ThreeDSecureUsage
 */
const SchemaOut$ThreeDSecureUsage: z.ZodType<
  External$ThreeDSecureUsage, // output type of this zod object
  z.ZodTypeDef,
  ThreeDSecureUsage // the object to be transformed
> = z
  .object({
    supported: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      supported: "supported",
    });
  });

export const Schemas$ThreeDSecureUsage = {
  in: SchemaIn$ThreeDSecureUsage,
  out: SchemaOut$ThreeDSecureUsage,
};
