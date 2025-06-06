import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyAfterExpirationRecovery
 */
export type CheckoutSessionCreateBodyAfterExpirationRecovery = {
  allowPromotionCodes?: boolean | undefined;
  enabled: boolean;
};

/**
 * @internal
 * CheckoutSessionCreateBodyAfterExpirationRecovery without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyAfterExpirationRecovery = {
  allow_promotion_codes?: boolean | undefined;
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyAfterExpirationRecovery
 */
const SchemaIn$CheckoutSessionCreateBodyAfterExpirationRecovery: z.ZodType<
  CheckoutSessionCreateBodyAfterExpirationRecovery, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_promotion_codes: z.boolean().optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_promotion_codes: "allowPromotionCodes",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyAfterExpirationRecovery
 */
const SchemaOut$CheckoutSessionCreateBodyAfterExpirationRecovery: z.ZodType<
  External$CheckoutSessionCreateBodyAfterExpirationRecovery, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyAfterExpirationRecovery // the object to be transformed
> = z
  .object({
    allowPromotionCodes: z.boolean().optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowPromotionCodes: "allow_promotion_codes",
      enabled: "enabled",
    });
  });

export const Schemas$CheckoutSessionCreateBodyAfterExpirationRecovery = {
  in: SchemaIn$CheckoutSessionCreateBodyAfterExpirationRecovery,
  out: SchemaOut$CheckoutSessionCreateBodyAfterExpirationRecovery,
};
