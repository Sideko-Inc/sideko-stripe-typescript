import {
  External$PaymentIntentConfirmBodyShippingObj0Address,
  PaymentIntentConfirmBodyShippingObj0Address,
  Schemas$PaymentIntentConfirmBodyShippingObj0Address,
} from "./payment-intent-confirm-body-shipping-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyShippingObj0
 */
export type PaymentIntentConfirmBodyShippingObj0 = {
  address: PaymentIntentConfirmBodyShippingObj0Address;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyShippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyShippingObj0 = {
  address: External$PaymentIntentConfirmBodyShippingObj0Address;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyShippingObj0
 */
const SchemaIn$PaymentIntentConfirmBodyShippingObj0: z.ZodType<
  PaymentIntentConfirmBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$PaymentIntentConfirmBodyShippingObj0Address.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyShippingObj0
 */
const SchemaOut$PaymentIntentConfirmBodyShippingObj0: z.ZodType<
  External$PaymentIntentConfirmBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyShippingObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$PaymentIntentConfirmBodyShippingObj0Address.out,
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

export const Schemas$PaymentIntentConfirmBodyShippingObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyShippingObj0,
  out: SchemaOut$PaymentIntentConfirmBodyShippingObj0,
};
