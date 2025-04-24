import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls phone number collection settings for the session.
 *
 * We recommend that you review your privacy policy and check with your legal contacts
 * before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
 */
export type CheckoutSessionCreateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPhoneNumberCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPhoneNumberCollection
 */
const SchemaIn$CheckoutSessionCreateBodyPhoneNumberCollection: z.ZodType<
  CheckoutSessionCreateBodyPhoneNumberCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPhoneNumberCollection
 */
const SchemaOut$CheckoutSessionCreateBodyPhoneNumberCollection: z.ZodType<
  External$CheckoutSessionCreateBodyPhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPhoneNumberCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPhoneNumberCollection = {
  in: SchemaIn$CheckoutSessionCreateBodyPhoneNumberCollection,
  out: SchemaOut$CheckoutSessionCreateBodyPhoneNumberCollection,
};
