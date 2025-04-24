import {
  External$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption,
  Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption,
  TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption,
} from "./test-helper-issuing-authorization-create-body-verification-data-authentication-exemption";
import {
  External$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure,
  Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure,
  TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure,
} from "./test-helper-issuing-authorization-create-body-verification-data-three-d-secure";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Verifications that Stripe performed on information that the cardholder provided to the merchant.
 */
export type TestHelperIssuingAuthorizationCreateBodyVerificationData = {
  addressLine1Check?: ("match" | "mismatch" | "not_provided") | undefined;
  addressPostalCodeCheck?: ("match" | "mismatch" | "not_provided") | undefined;
  authenticationExemption?:
    | TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption
    | undefined;
  cvcCheck?: ("match" | "mismatch" | "not_provided") | undefined;
  expiryCheck?: ("match" | "mismatch" | "not_provided") | undefined;
  threeDSecure?:
    | TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyVerificationData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyVerificationData =
  {
    address_line1_check?: ("match" | "mismatch" | "not_provided") | undefined;
    address_postal_code_check?:
      | ("match" | "mismatch" | "not_provided")
      | undefined;
    authentication_exemption?:
      | External$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption
      | undefined;
    cvc_check?: ("match" | "mismatch" | "not_provided") | undefined;
    expiry_check?: ("match" | "mismatch" | "not_provided") | undefined;
    three_d_secure?:
      | External$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyVerificationData
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationData: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyVerificationData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address_line1_check: z
      .enum(["match", "mismatch", "not_provided"])
      .optional(),
    address_postal_code_check: z
      .enum(["match", "mismatch", "not_provided"])
      .optional(),
    authentication_exemption:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption.in.optional(),
    cvc_check: z.enum(["match", "mismatch", "not_provided"]).optional(),
    expiry_check: z.enum(["match", "mismatch", "not_provided"]).optional(),
    three_d_secure:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address_line1_check: "addressLine1Check",
      address_postal_code_check: "addressPostalCodeCheck",
      authentication_exemption: "authenticationExemption",
      cvc_check: "cvcCheck",
      expiry_check: "expiryCheck",
      three_d_secure: "threeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyVerificationData
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationData: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyVerificationData, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyVerificationData // the object to be transformed
> = z
  .object({
    addressLine1Check: z.enum(["match", "mismatch", "not_provided"]).optional(),
    addressPostalCodeCheck: z
      .enum(["match", "mismatch", "not_provided"])
      .optional(),
    authenticationExemption:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataAuthenticationExemption.out.optional(),
    cvcCheck: z.enum(["match", "mismatch", "not_provided"]).optional(),
    expiryCheck: z.enum(["match", "mismatch", "not_provided"]).optional(),
    threeDSecure:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationDataThreeDSecure.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addressLine1Check: "address_line1_check",
      addressPostalCodeCheck: "address_postal_code_check",
      authenticationExemption: "authentication_exemption",
      cvcCheck: "cvc_check",
      expiryCheck: "expiry_check",
      threeDSecure: "three_d_secure",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationData =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyVerificationData,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyVerificationData,
  };
