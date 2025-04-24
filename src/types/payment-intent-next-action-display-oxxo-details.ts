import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionDisplayOxxoDetails = {
  /**
   * The timestamp after which the OXXO voucher expires.
   */
  expiresAfter?: number | null | undefined;
  /**
   * The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
   */
  hostedVoucherUrl?: string | null | undefined;
  /**
   * OXXO reference number.
   */
  number?: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionDisplayOxxoDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionDisplayOxxoDetails = {
  expires_after?: number | null | undefined;
  hosted_voucher_url?: string | null | undefined;
  number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionDisplayOxxoDetails
 */
const SchemaIn$PaymentIntentNextActionDisplayOxxoDetails: z.ZodType<
  PaymentIntentNextActionDisplayOxxoDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after: z.number().int().nullable().optional(),
    hosted_voucher_url: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after: "expiresAfter",
      hosted_voucher_url: "hostedVoucherUrl",
      number: "number",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionDisplayOxxoDetails
 */
const SchemaOut$PaymentIntentNextActionDisplayOxxoDetails: z.ZodType<
  External$PaymentIntentNextActionDisplayOxxoDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionDisplayOxxoDetails // the object to be transformed
> = z
  .object({
    expiresAfter: z.number().int().nullable().optional(),
    hostedVoucherUrl: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfter: "expires_after",
      hostedVoucherUrl: "hosted_voucher_url",
      number: "number",
    });
  });

export const Schemas$PaymentIntentNextActionDisplayOxxoDetails = {
  in: SchemaIn$PaymentIntentNextActionDisplayOxxoDetails,
  out: SchemaOut$PaymentIntentNextActionDisplayOxxoDetails,
};
