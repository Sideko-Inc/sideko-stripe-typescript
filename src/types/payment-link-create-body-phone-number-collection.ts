import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls phone number collection settings during checkout.
 *
 * We recommend that you review your privacy policy and check with your legal contacts.
 */
export type PaymentLinkCreateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * @internal
 * PaymentLinkCreateBodyPhoneNumberCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyPhoneNumberCollection = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyPhoneNumberCollection
 */
const SchemaIn$PaymentLinkCreateBodyPhoneNumberCollection: z.ZodType<
  PaymentLinkCreateBodyPhoneNumberCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyPhoneNumberCollection
 */
const SchemaOut$PaymentLinkCreateBodyPhoneNumberCollection: z.ZodType<
  External$PaymentLinkCreateBodyPhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyPhoneNumberCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PaymentLinkCreateBodyPhoneNumberCollection = {
  in: SchemaIn$PaymentLinkCreateBodyPhoneNumberCollection,
  out: SchemaOut$PaymentLinkCreateBodyPhoneNumberCollection,
};
