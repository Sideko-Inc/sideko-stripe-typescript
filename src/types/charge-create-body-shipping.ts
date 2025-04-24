import {
  ChargeCreateBodyShippingAddress,
  External$ChargeCreateBodyShippingAddress,
  Schemas$ChargeCreateBodyShippingAddress,
} from "./charge-create-body-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
 */
export type ChargeCreateBodyShipping = {
  address: ChargeCreateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * ChargeCreateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyShipping = {
  address: External$ChargeCreateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyShipping
 */
const SchemaIn$ChargeCreateBodyShipping: z.ZodType<
  ChargeCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$ChargeCreateBodyShippingAddress.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyShipping
 */
const SchemaOut$ChargeCreateBodyShipping: z.ZodType<
  External$ChargeCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$ChargeCreateBodyShippingAddress.out,
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

export const Schemas$ChargeCreateBodyShipping = {
  in: SchemaIn$ChargeCreateBodyShipping,
  out: SchemaOut$ChargeCreateBodyShipping,
};
