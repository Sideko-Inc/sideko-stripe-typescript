import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationThreeDSecure = {
  /**
   * The outcome of the 3D Secure authentication request.
   */
  result: "attempt_acknowledged" | "authenticated" | "failed" | "required";
};

/**
 * @internal
 * IssuingAuthorizationThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationThreeDSecure = {
  result: "attempt_acknowledged" | "authenticated" | "failed" | "required";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationThreeDSecure
 */
const SchemaIn$IssuingAuthorizationThreeDSecure: z.ZodType<
  IssuingAuthorizationThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    result: z.enum([
      "attempt_acknowledged",
      "authenticated",
      "failed",
      "required",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      result: "result",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationThreeDSecure
 */
const SchemaOut$IssuingAuthorizationThreeDSecure: z.ZodType<
  External$IssuingAuthorizationThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationThreeDSecure // the object to be transformed
> = z
  .object({
    result: z.enum([
      "attempt_acknowledged",
      "authenticated",
      "failed",
      "required",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      result: "result",
    });
  });

export const Schemas$IssuingAuthorizationThreeDSecure = {
  in: SchemaIn$IssuingAuthorizationThreeDSecure,
  out: SchemaOut$IssuingAuthorizationThreeDSecure,
};
