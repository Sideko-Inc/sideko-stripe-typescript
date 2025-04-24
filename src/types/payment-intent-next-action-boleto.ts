import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionBoleto = {
  /**
   * The timestamp after which the boleto expires.
   */
  expiresAt?: number | null | undefined;
  /**
   * The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher.
   */
  hostedVoucherUrl?: string | null | undefined;
  /**
   * The boleto number.
   */
  number?: string | null | undefined;
  /**
   * The URL to the downloadable boleto voucher PDF.
   */
  pdf?: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionBoleto = {
  expires_at?: number | null | undefined;
  hosted_voucher_url?: string | null | undefined;
  number?: string | null | undefined;
  pdf?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionBoleto
 */
const SchemaIn$PaymentIntentNextActionBoleto: z.ZodType<
  PaymentIntentNextActionBoleto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_at: z.number().int().nullable().optional(),
    hosted_voucher_url: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    pdf: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_at: "expiresAt",
      hosted_voucher_url: "hostedVoucherUrl",
      number: "number",
      pdf: "pdf",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionBoleto
 */
const SchemaOut$PaymentIntentNextActionBoleto: z.ZodType<
  External$PaymentIntentNextActionBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionBoleto // the object to be transformed
> = z
  .object({
    expiresAt: z.number().int().nullable().optional(),
    hostedVoucherUrl: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    pdf: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAt: "expires_at",
      hostedVoucherUrl: "hosted_voucher_url",
      number: "number",
      pdf: "pdf",
    });
  });

export const Schemas$PaymentIntentNextActionBoleto = {
  in: SchemaIn$PaymentIntentNextActionBoleto,
  out: SchemaOut$PaymentIntentNextActionBoleto,
};
