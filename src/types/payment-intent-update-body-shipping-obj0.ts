import {
  External$PaymentIntentUpdateBodyShippingObj0Address,
  PaymentIntentUpdateBodyShippingObj0Address,
  Schemas$PaymentIntentUpdateBodyShippingObj0Address,
} from "./payment-intent-update-body-shipping-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyShippingObj0
 */
export type PaymentIntentUpdateBodyShippingObj0 = {
  address: PaymentIntentUpdateBodyShippingObj0Address;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyShippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyShippingObj0 = {
  address: External$PaymentIntentUpdateBodyShippingObj0Address;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyShippingObj0
 */
const SchemaIn$PaymentIntentUpdateBodyShippingObj0: z.ZodType<
  PaymentIntentUpdateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$PaymentIntentUpdateBodyShippingObj0Address.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyShippingObj0
 */
const SchemaOut$PaymentIntentUpdateBodyShippingObj0: z.ZodType<
  External$PaymentIntentUpdateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyShippingObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$PaymentIntentUpdateBodyShippingObj0Address.out,
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

export const Schemas$PaymentIntentUpdateBodyShippingObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyShippingObj0,
  out: SchemaOut$PaymentIntentUpdateBodyShippingObj0,
};
