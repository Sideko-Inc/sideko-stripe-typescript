import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardGooglePay = {
  /**
   * Google Pay Eligibility
   */
  eligible: boolean;
  /**
   * Reason the card is ineligible for Google Pay
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
 * IssuingCardGooglePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardGooglePay = {
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
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardGooglePay
 */
const SchemaIn$IssuingCardGooglePay: z.ZodType<
  IssuingCardGooglePay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardGooglePay
 */
const SchemaOut$IssuingCardGooglePay: z.ZodType<
  External$IssuingCardGooglePay, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardGooglePay // the object to be transformed
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

export const Schemas$IssuingCardGooglePay = {
  in: SchemaIn$IssuingCardGooglePay,
  out: SchemaOut$IssuingCardGooglePay,
};
