import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption
 */
export type TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption =
  {
    claimedBy: "acquirer" | "issuer";
    type: "low_value_transaction" | "transaction_risk_analysis" | "unknown";
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption =
  {
    claimed_by: "acquirer" | "issuer";
    type: "low_value_transaction" | "transaction_risk_analysis" | "unknown";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    claimed_by: z.enum(["acquirer", "issuer"]),
    type: z.enum([
      "low_value_transaction",
      "transaction_risk_analysis",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      claimed_by: "claimedBy",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption // the object to be transformed
> = z
  .object({
    claimedBy: z.enum(["acquirer", "issuer"]),
    type: z.enum([
      "low_value_transaction",
      "transaction_risk_analysis",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      claimedBy: "claimed_by",
      type: "type",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption,
  };
