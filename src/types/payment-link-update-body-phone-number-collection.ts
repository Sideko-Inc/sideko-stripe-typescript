import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls phone number collection settings during checkout.
 *
 * We recommend that you review your privacy policy and check with your legal contacts.
 */
export type PaymentLinkUpdateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * @internal
 * PaymentLinkUpdateBodyPhoneNumberCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyPhoneNumberCollection
 */
const SchemaIn$PaymentLinkUpdateBodyPhoneNumberCollection: z.ZodType<
  PaymentLinkUpdateBodyPhoneNumberCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyPhoneNumberCollection
 */
const SchemaOut$PaymentLinkUpdateBodyPhoneNumberCollection: z.ZodType<
  External$PaymentLinkUpdateBodyPhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyPhoneNumberCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PaymentLinkUpdateBodyPhoneNumberCollection = {
  in: SchemaIn$PaymentLinkUpdateBodyPhoneNumberCollection,
  out: SchemaOut$PaymentLinkUpdateBodyPhoneNumberCollection,
};
