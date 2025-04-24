import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionAfterExpirationRecovery = {
  /**
   * Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false`
   */
  allowPromotionCodes: boolean;
  /**
   * If `true`, a recovery url will be generated to recover this Checkout Session if it
   * expires before a transaction is completed. It will be attached to the
   * Checkout Session object upon expiration.
   */
  enabled: boolean;
  /**
   * The timestamp at which the recovery URL will expire.
   */
  expiresAt?: number | null | undefined;
  /**
   * URL that creates a new Checkout Session when clicked that is a copy of this expired Checkout Session
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionAfterExpirationRecovery without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionAfterExpirationRecovery = {
  allow_promotion_codes: boolean;
  enabled: boolean;
  expires_at?: number | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionAfterExpirationRecovery
 */
const SchemaIn$PaymentPagesCheckoutSessionAfterExpirationRecovery: z.ZodType<
  PaymentPagesCheckoutSessionAfterExpirationRecovery, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_promotion_codes: z.boolean(),
    enabled: z.boolean(),
    expires_at: z.number().int().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_promotion_codes: "allowPromotionCodes",
      enabled: "enabled",
      expires_at: "expiresAt",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionAfterExpirationRecovery
 */
const SchemaOut$PaymentPagesCheckoutSessionAfterExpirationRecovery: z.ZodType<
  External$PaymentPagesCheckoutSessionAfterExpirationRecovery, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionAfterExpirationRecovery // the object to be transformed
> = z
  .object({
    allowPromotionCodes: z.boolean(),
    enabled: z.boolean(),
    expiresAt: z.number().int().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowPromotionCodes: "allow_promotion_codes",
      enabled: "enabled",
      expiresAt: "expires_at",
      url: "url",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionAfterExpirationRecovery = {
  in: SchemaIn$PaymentPagesCheckoutSessionAfterExpirationRecovery,
  out: SchemaOut$PaymentPagesCheckoutSessionAfterExpirationRecovery,
};
