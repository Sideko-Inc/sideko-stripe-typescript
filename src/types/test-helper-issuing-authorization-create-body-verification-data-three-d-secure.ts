import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure
 */
export type TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure =
  {
    result: "attempt_acknowledged" | "authenticated" | "failed" | "required";
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure =
  {
    result: "attempt_acknowledged" | "authenticated" | "failed" | "required";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure // the object to be transformed
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

export const Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure,
  };
