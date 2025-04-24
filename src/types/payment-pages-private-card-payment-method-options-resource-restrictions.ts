import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions = {
  /**
   * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
   */
  brandsBlocked?:
    | ("american_express" | "discover_global_network" | "mastercard" | "visa")[]
    | undefined;
};

/**
 * @internal
 * PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions =
  {
    brands_blocked?:
      | (
          | "american_express"
          | "discover_global_network"
          | "mastercard"
          | "visa"
        )[]
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
 */
const SchemaIn$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions: z.ZodType<
  PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brands_blocked: z
      .array(
        z.enum([
          "american_express",
          "discover_global_network",
          "mastercard",
          "visa",
        ]),
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brands_blocked: "brandsBlocked",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
 */
const SchemaOut$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions: z.ZodType<
  External$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions // the object to be transformed
> = z
  .object({
    brandsBlocked: z
      .array(
        z.enum([
          "american_express",
          "discover_global_network",
          "mastercard",
          "visa",
        ]),
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brandsBlocked: "brands_blocked",
    });
  });

export const Schemas$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions =
  {
    in: SchemaIn$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions,
    out: SchemaOut$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions,
  };
