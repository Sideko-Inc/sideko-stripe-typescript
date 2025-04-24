import {
  CheckoutSessionCreateBodyPaymentIntentDataShippingAddress,
  External$CheckoutSessionCreateBodyPaymentIntentDataShippingAddress,
  Schemas$CheckoutSessionCreateBodyPaymentIntentDataShippingAddress,
} from "./checkout-session-create-body-payment-intent-data-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentIntentDataShipping
 */
export type CheckoutSessionCreateBodyPaymentIntentDataShipping = {
  address: CheckoutSessionCreateBodyPaymentIntentDataShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentIntentDataShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentIntentDataShipping = {
  address: External$CheckoutSessionCreateBodyPaymentIntentDataShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentIntentDataShipping
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataShipping: z.ZodType<
  CheckoutSessionCreateBodyPaymentIntentDataShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataShippingAddress.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentIntentDataShipping
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataShipping: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentIntentDataShipping, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentIntentDataShipping // the object to be transformed
> = z
  .object({
    address:
      Schemas$CheckoutSessionCreateBodyPaymentIntentDataShippingAddress.out,
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

export const Schemas$CheckoutSessionCreateBodyPaymentIntentDataShipping = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataShipping,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataShipping,
};
