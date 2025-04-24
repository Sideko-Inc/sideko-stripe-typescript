import {
  External$PaymentIntentCreateBodyShippingAddress,
  PaymentIntentCreateBodyShippingAddress,
  Schemas$PaymentIntentCreateBodyShippingAddress,
} from "./payment-intent-create-body-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping information for this PaymentIntent.
 */
export type PaymentIntentCreateBodyShipping = {
  address: PaymentIntentCreateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyShipping = {
  address: External$PaymentIntentCreateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyShipping
 */
const SchemaIn$PaymentIntentCreateBodyShipping: z.ZodType<
  PaymentIntentCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$PaymentIntentCreateBodyShippingAddress.in,
    carrier: z.string().optional(),
    name: z.string(),
    phone: z.string().optional(),
    tracking_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      carrier: "carrier",
      name: "name",
      phone: "phone",
      tracking_number: "trackingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyShipping
 */
const SchemaOut$PaymentIntentCreateBodyShipping: z.ZodType<
  External$PaymentIntentCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$PaymentIntentCreateBodyShippingAddress.out,
    carrier: z.string().optional(),
    name: z.string(),
    phone: z.string().optional(),
    trackingNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      carrier: "carrier",
      name: "name",
      phone: "phone",
      trackingNumber: "tracking_number",
    });
  });

export const Schemas$PaymentIntentCreateBodyShipping = {
  in: SchemaIn$PaymentIntentCreateBodyShipping,
  out: SchemaOut$PaymentIntentCreateBodyShipping,
};
