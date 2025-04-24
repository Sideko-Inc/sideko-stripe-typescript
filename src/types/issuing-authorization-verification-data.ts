import {
  External$IssuingAuthorizationAuthenticationExemption,
  IssuingAuthorizationAuthenticationExemption,
  Schemas$IssuingAuthorizationAuthenticationExemption,
} from "./issuing-authorization-authentication-exemption";
import {
  External$IssuingAuthorizationThreeDSecure,
  IssuingAuthorizationThreeDSecure,
  Schemas$IssuingAuthorizationThreeDSecure,
} from "./issuing-authorization-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationVerificationData = {
  /**
   * Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
   */
  addressLine1Check: "match" | "mismatch" | "not_provided";
  /**
   * Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
   */
  addressPostalCodeCheck: "match" | "mismatch" | "not_provided";
  authenticationExemption?:
    | IssuingAuthorizationAuthenticationExemption
    | undefined;
  /**
   * Whether the cardholder provided a CVC and if it matched Stripe’s record.
   */
  cvcCheck: "match" | "mismatch" | "not_provided";
  /**
   * Whether the cardholder provided an expiry date and if it matched Stripe’s record.
   */
  expiryCheck: "match" | "mismatch" | "not_provided";
  /**
   * The postal code submitted as part of the authorization used for postal code verification.
   */
  postalCode?: string | null | undefined;
  threeDSecure?: IssuingAuthorizationThreeDSecure | undefined;
};

/**
 * @internal
 * IssuingAuthorizationVerificationData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationVerificationData = {
  address_line1_check: "match" | "mismatch" | "not_provided";
  address_postal_code_check: "match" | "mismatch" | "not_provided";
  authentication_exemption?:
    | External$IssuingAuthorizationAuthenticationExemption
    | undefined;
  cvc_check: "match" | "mismatch" | "not_provided";
  expiry_check: "match" | "mismatch" | "not_provided";
  postal_code?: string | null | undefined;
  three_d_secure?: External$IssuingAuthorizationThreeDSecure | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationVerificationData
 */
const SchemaIn$IssuingAuthorizationVerificationData: z.ZodType<
  IssuingAuthorizationVerificationData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address_line1_check: z.enum(["match", "mismatch", "not_provided"]),
    address_postal_code_check: z.enum(["match", "mismatch", "not_provided"]),
    authentication_exemption:
      Schemas$IssuingAuthorizationAuthenticationExemption.in.optional(),
    cvc_check: z.enum(["match", "mismatch", "not_provided"]),
    expiry_check: z.enum(["match", "mismatch", "not_provided"]),
    postal_code: z.string().nullable().optional(),
    three_d_secure: Schemas$IssuingAuthorizationThreeDSecure.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_line1_check: "addressLine1Check",
      address_postal_code_check: "addressPostalCodeCheck",
      authentication_exemption: "authenticationExemption",
      cvc_check: "cvcCheck",
      expiry_check: "expiryCheck",
      postal_code: "postalCode",
      three_d_secure: "threeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationVerificationData
 */
const SchemaOut$IssuingAuthorizationVerificationData: z.ZodType<
  External$IssuingAuthorizationVerificationData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationVerificationData // the object to be transformed
> = z
  .object({
    addressLine1Check: z.enum(["match", "mismatch", "not_provided"]),
    addressPostalCodeCheck: z.enum(["match", "mismatch", "not_provided"]),
    authenticationExemption:
      Schemas$IssuingAuthorizationAuthenticationExemption.out.optional(),
    cvcCheck: z.enum(["match", "mismatch", "not_provided"]),
    expiryCheck: z.enum(["match", "mismatch", "not_provided"]),
    postalCode: z.string().nullable().optional(),
    threeDSecure: Schemas$IssuingAuthorizationThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressLine1Check: "address_line1_check",
      addressPostalCodeCheck: "address_postal_code_check",
      authenticationExemption: "authentication_exemption",
      cvcCheck: "cvc_check",
      expiryCheck: "expiry_check",
      postalCode: "postal_code",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$IssuingAuthorizationVerificationData = {
  in: SchemaIn$IssuingAuthorizationVerificationData,
  out: SchemaOut$IssuingAuthorizationVerificationData,
};
