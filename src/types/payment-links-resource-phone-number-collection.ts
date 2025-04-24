import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourcePhoneNumberCollection = {
  /**
   * If `true`, a phone number will be collected during checkout.
   */
  enabled: boolean;
};

/**
 * @internal
 * PaymentLinksResourcePhoneNumberCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourcePhoneNumberCollection = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourcePhoneNumberCollection
 */
const SchemaIn$PaymentLinksResourcePhoneNumberCollection: z.ZodType<
  PaymentLinksResourcePhoneNumberCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourcePhoneNumberCollection
 */
const SchemaOut$PaymentLinksResourcePhoneNumberCollection: z.ZodType<
  External$PaymentLinksResourcePhoneNumberCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourcePhoneNumberCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PaymentLinksResourcePhoneNumberCollection = {
  in: SchemaIn$PaymentLinksResourcePhoneNumberCollection,
  out: SchemaOut$PaymentLinksResourcePhoneNumberCollection,
};
