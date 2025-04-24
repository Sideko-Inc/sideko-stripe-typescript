import {
  ChargeUpdateBodyShippingAddress,
  External$ChargeUpdateBodyShippingAddress,
  Schemas$ChargeUpdateBodyShippingAddress,
} from "./charge-update-body-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
 */
export type ChargeUpdateBodyShipping = {
  address: ChargeUpdateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * ChargeUpdateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeUpdateBodyShipping = {
  address: External$ChargeUpdateBodyShippingAddress;
  carrier?: string | undefined;
  name: string;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeUpdateBodyShipping
 */
const SchemaIn$ChargeUpdateBodyShipping: z.ZodType<
  ChargeUpdateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$ChargeUpdateBodyShippingAddress.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeUpdateBodyShipping
 */
const SchemaOut$ChargeUpdateBodyShipping: z.ZodType<
  External$ChargeUpdateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  ChargeUpdateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$ChargeUpdateBodyShippingAddress.out,
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

export const Schemas$ChargeUpdateBodyShipping = {
  in: SchemaIn$ChargeUpdateBodyShipping,
  out: SchemaOut$ChargeUpdateBodyShipping,
};
