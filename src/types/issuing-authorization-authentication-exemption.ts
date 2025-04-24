import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationAuthenticationExemption = {
  /**
   * The entity that requested the exemption, either the acquiring merchant or the Issuing user.
   */
  claimedBy: "acquirer" | "issuer";
  /**
   * The specific exemption claimed for this authorization.
   */
  type: "low_value_transaction" | "transaction_risk_analysis" | "unknown";
};

/**
 * @internal
 * IssuingAuthorizationAuthenticationExemption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationAuthenticationExemption = {
  claimed_by: "acquirer" | "issuer";
  type: "low_value_transaction" | "transaction_risk_analysis" | "unknown";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationAuthenticationExemption
 */
const SchemaIn$IssuingAuthorizationAuthenticationExemption: z.ZodType<
  IssuingAuthorizationAuthenticationExemption, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationAuthenticationExemption
 */
const SchemaOut$IssuingAuthorizationAuthenticationExemption: z.ZodType<
  External$IssuingAuthorizationAuthenticationExemption, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationAuthenticationExemption // the object to be transformed
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

export const Schemas$IssuingAuthorizationAuthenticationExemption = {
  in: SchemaIn$IssuingAuthorizationAuthenticationExemption,
  out: SchemaOut$IssuingAuthorizationAuthenticationExemption,
};
