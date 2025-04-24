import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFraudChallenge = {
  /**
   * The method by which the fraud challenge was delivered to the cardholder.
   */
  channel: "sms";
  /**
   * The status of the fraud challenge.
   */
  status: "expired" | "pending" | "rejected" | "undeliverable" | "verified";
  /**
   * If the challenge is not deliverable, the reason why.
   */
  undeliverableReason?:
    | ("no_phone_number" | "unsupported_phone_number")
    | null
    | undefined;
};

/**
 * @internal
 * IssuingAuthorizationFraudChallenge without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFraudChallenge = {
  channel: "sms";
  status: "expired" | "pending" | "rejected" | "undeliverable" | "verified";
  undeliverable_reason?:
    | ("no_phone_number" | "unsupported_phone_number")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFraudChallenge
 */
const SchemaIn$IssuingAuthorizationFraudChallenge: z.ZodType<
  IssuingAuthorizationFraudChallenge, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    channel: z.enum(["sms"]),
    status: z.enum([
      "expired",
      "pending",
      "rejected",
      "undeliverable",
      "verified",
    ]),
    undeliverable_reason: z
      .enum(["no_phone_number", "unsupported_phone_number"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      channel: "channel",
      status: "status",
      undeliverable_reason: "undeliverableReason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFraudChallenge
 */
const SchemaOut$IssuingAuthorizationFraudChallenge: z.ZodType<
  External$IssuingAuthorizationFraudChallenge, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFraudChallenge // the object to be transformed
> = z
  .object({
    channel: z.enum(["sms"]),
    status: z.enum([
      "expired",
      "pending",
      "rejected",
      "undeliverable",
      "verified",
    ]),
    undeliverableReason: z
      .enum(["no_phone_number", "unsupported_phone_number"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      channel: "channel",
      status: "status",
      undeliverableReason: "undeliverable_reason",
    });
  });

export const Schemas$IssuingAuthorizationFraudChallenge = {
  in: SchemaIn$IssuingAuthorizationFraudChallenge,
  out: SchemaOut$IssuingAuthorizationFraudChallenge,
};
