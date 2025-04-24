import {
  External$SourceUpdateBodySourceOrderShippingAddress,
  Schemas$SourceUpdateBodySourceOrderShippingAddress,
  SourceUpdateBodySourceOrderShippingAddress,
} from "./source-update-body-source-order-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBodySourceOrderShipping
 */
export type SourceUpdateBodySourceOrderShipping = {
  address: SourceUpdateBodySourceOrderShippingAddress;
  carrier?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * SourceUpdateBodySourceOrderShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodySourceOrderShipping = {
  address: External$SourceUpdateBodySourceOrderShippingAddress;
  carrier?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodySourceOrderShipping
 */
const SchemaIn$SourceUpdateBodySourceOrderShipping: z.ZodType<
  SourceUpdateBodySourceOrderShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$SourceUpdateBodySourceOrderShippingAddress.in,
    carrier: z.string().optional(),
    name: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodySourceOrderShipping
 */
const SchemaOut$SourceUpdateBodySourceOrderShipping: z.ZodType<
  External$SourceUpdateBodySourceOrderShipping, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodySourceOrderShipping // the object to be transformed
> = z
  .object({
    address: Schemas$SourceUpdateBodySourceOrderShippingAddress.out,
    carrier: z.string().optional(),
    name: z.string().optional(),
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

export const Schemas$SourceUpdateBodySourceOrderShipping = {
  in: SchemaIn$SourceUpdateBodySourceOrderShipping,
  out: SchemaOut$SourceUpdateBodySourceOrderShipping,
};
