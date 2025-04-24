import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionPhoneNumberCollection = {
  /**
   * Indicates whether phone number collection is enabled for the session
   */
  enabled: boolean;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionPhoneNumberCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionPhoneNumberCollection
 */
const SchemaIn$PaymentPagesCheckoutSessionPhoneNumberCollection: z.ZodType<
  PaymentPagesCheckoutSessionPhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionPhoneNumberCollection
 */
const SchemaOut$PaymentPagesCheckoutSessionPhoneNumberCollection: z.ZodType<
  External$PaymentPagesCheckoutSessionPhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionPhoneNumberCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionPhoneNumberCollection = {
  in: SchemaIn$PaymentPagesCheckoutSessionPhoneNumberCollection,
  out: SchemaOut$PaymentPagesCheckoutSessionPhoneNumberCollection,
};
