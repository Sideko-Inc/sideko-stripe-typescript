import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionDisplayMultibancoDetails = {
  /**
   * Entity number associated with this Multibanco payment.
   */
  entity?: string | null | undefined;
  /**
   * The timestamp at which the Multibanco voucher expires.
   */
  expiresAt?: number | null | undefined;
  /**
   * The URL for the hosted Multibanco voucher page, which allows customers to view a Multibanco voucher.
   */
  hostedVoucherUrl?: string | null | undefined;
  /**
   * Reference number associated with this Multibanco payment.
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionDisplayMultibancoDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionDisplayMultibancoDetails = {
  entity?: string | null | undefined;
  expires_at?: number | null | undefined;
  hosted_voucher_url?: string | null | undefined;
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionDisplayMultibancoDetails
 */
const SchemaIn$PaymentIntentNextActionDisplayMultibancoDetails: z.ZodType<
  PaymentIntentNextActionDisplayMultibancoDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    entity: z.string().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    hosted_voucher_url: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      expires_at: "expiresAt",
      hosted_voucher_url: "hostedVoucherUrl",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionDisplayMultibancoDetails
 */
const SchemaOut$PaymentIntentNextActionDisplayMultibancoDetails: z.ZodType<
  External$PaymentIntentNextActionDisplayMultibancoDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionDisplayMultibancoDetails // the object to be transformed
> = z
  .object({
    entity: z.string().nullable().optional(),
    expiresAt: z.number().int().nullable().optional(),
    hostedVoucherUrl: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      expiresAt: "expires_at",
      hostedVoucherUrl: "hosted_voucher_url",
      reference: "reference",
    });
  });

export const Schemas$PaymentIntentNextActionDisplayMultibancoDetails = {
  in: SchemaIn$PaymentIntentNextActionDisplayMultibancoDetails,
  out: SchemaOut$PaymentIntentNextActionDisplayMultibancoDetails,
};
