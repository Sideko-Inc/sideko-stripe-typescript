import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardApplePay = {
  /**
   * Apple Pay Eligibility
   */
  eligible: boolean;
  /**
   * Reason the card is ineligible for Apple Pay
   */
  ineligibleReason?:
    | (
        | "missing_agreement"
        | "missing_cardholder_contact"
        | "unsupported_region"
      )
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardApplePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardApplePay = {
  eligible: boolean;
  ineligible_reason?:
    | (
        | "missing_agreement"
        | "missing_cardholder_contact"
        | "unsupported_region"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardApplePay
 */
const SchemaIn$IssuingCardApplePay: z.ZodType<
  IssuingCardApplePay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eligible: z.boolean(),
    ineligible_reason: z
      .enum([
        "missing_agreement",
        "missing_cardholder_contact",
        "unsupported_region",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eligible: "eligible",
      ineligible_reason: "ineligibleReason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardApplePay
 */
const SchemaOut$IssuingCardApplePay: z.ZodType<
  External$IssuingCardApplePay, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardApplePay // the object to be transformed
> = z
  .object({
    eligible: z.boolean(),
    ineligibleReason: z
      .enum([
        "missing_agreement",
        "missing_cardholder_contact",
        "unsupported_region",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eligible: "eligible",
      ineligibleReason: "ineligible_reason",
    });
  });

export const Schemas$IssuingCardApplePay = {
  in: SchemaIn$IssuingCardApplePay,
  out: SchemaOut$IssuingCardApplePay,
};
