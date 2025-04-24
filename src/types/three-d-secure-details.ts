import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ThreeDSecureDetails = {
  /**
   * For authenticated transactions: how the customer was authenticated by
   * the issuing bank.
   */
  authenticationFlow?: ("challenge" | "frictionless") | null | undefined;
  /**
   * The Electronic Commerce Indicator (ECI). A protocol-level field
   * indicating what degree of authentication was performed.
   */
  electronicCommerceIndicator?:
    | ("01" | "02" | "05" | "06" | "07")
    | null
    | undefined;
  /**
   * Indicates the outcome of 3D Secure authentication.
   */
  result?:
    | (
        | "attempt_acknowledged"
        | "authenticated"
        | "exempted"
        | "failed"
        | "not_supported"
        | "processing_error"
      )
    | null
    | undefined;
  /**
   * Additional information about why 3D Secure succeeded or failed based
   * on the `result`.
   */
  resultReason?:
    | (
        | "abandoned"
        | "bypassed"
        | "canceled"
        | "card_not_enrolled"
        | "network_not_supported"
        | "protocol_error"
        | "rejected"
      )
    | null
    | undefined;
  /**
   * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
   * (dsTransId) for this payment.
   */
  transactionId?: string | null | undefined;
  /**
   * The version of 3D Secure that was used.
   */
  version?: ("1.0.2" | "2.1.0" | "2.2.0") | null | undefined;
};

/**
 * @internal
 * ThreeDSecureDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ThreeDSecureDetails = {
  authentication_flow?: ("challenge" | "frictionless") | null | undefined;
  electronic_commerce_indicator?:
    | ("01" | "02" | "05" | "06" | "07")
    | null
    | undefined;
  result?:
    | (
        | "attempt_acknowledged"
        | "authenticated"
        | "exempted"
        | "failed"
        | "not_supported"
        | "processing_error"
      )
    | null
    | undefined;
  result_reason?:
    | (
        | "abandoned"
        | "bypassed"
        | "canceled"
        | "card_not_enrolled"
        | "network_not_supported"
        | "protocol_error"
        | "rejected"
      )
    | null
    | undefined;
  transaction_id?: string | null | undefined;
  version?: ("1.0.2" | "2.1.0" | "2.2.0") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ThreeDSecureDetails
 */
const SchemaIn$ThreeDSecureDetails: z.ZodType<
  ThreeDSecureDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authentication_flow: z
      .enum(["challenge", "frictionless"])
      .nullable()
      .optional(),
    electronic_commerce_indicator: z
      .enum(["01", "02", "05", "06", "07"])
      .nullable()
      .optional(),
    result: z
      .enum([
        "attempt_acknowledged",
        "authenticated",
        "exempted",
        "failed",
        "not_supported",
        "processing_error",
      ])
      .nullable()
      .optional(),
    result_reason: z
      .enum([
        "abandoned",
        "bypassed",
        "canceled",
        "card_not_enrolled",
        "network_not_supported",
        "protocol_error",
        "rejected",
      ])
      .nullable()
      .optional(),
    transaction_id: z.string().nullable().optional(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authentication_flow: "authenticationFlow",
      electronic_commerce_indicator: "electronicCommerceIndicator",
      result: "result",
      result_reason: "resultReason",
      transaction_id: "transactionId",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ThreeDSecureDetails
 */
const SchemaOut$ThreeDSecureDetails: z.ZodType<
  External$ThreeDSecureDetails, // output type of this zod object
  z.ZodTypeDef,
  ThreeDSecureDetails // the object to be transformed
> = z
  .object({
    authenticationFlow: z
      .enum(["challenge", "frictionless"])
      .nullable()
      .optional(),
    electronicCommerceIndicator: z
      .enum(["01", "02", "05", "06", "07"])
      .nullable()
      .optional(),
    result: z
      .enum([
        "attempt_acknowledged",
        "authenticated",
        "exempted",
        "failed",
        "not_supported",
        "processing_error",
      ])
      .nullable()
      .optional(),
    resultReason: z
      .enum([
        "abandoned",
        "bypassed",
        "canceled",
        "card_not_enrolled",
        "network_not_supported",
        "protocol_error",
        "rejected",
      ])
      .nullable()
      .optional(),
    transactionId: z.string().nullable().optional(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authenticationFlow: "authentication_flow",
      electronicCommerceIndicator: "electronic_commerce_indicator",
      result: "result",
      resultReason: "result_reason",
      transactionId: "transaction_id",
      version: "version",
    });
  });

export const Schemas$ThreeDSecureDetails = {
  in: SchemaIn$ThreeDSecureDetails,
  out: SchemaOut$ThreeDSecureDetails,
};
