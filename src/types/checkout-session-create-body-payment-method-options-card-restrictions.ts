import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions = {
  brandsBlocked?:
    | ("american_express" | "discover_global_network" | "mastercard" | "visa")[]
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions =
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
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCardRestrictions,
  };
