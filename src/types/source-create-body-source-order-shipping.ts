import {
  External$SourceCreateBodySourceOrderShippingAddress,
  Schemas$SourceCreateBodySourceOrderShippingAddress,
  SourceCreateBodySourceOrderShippingAddress,
} from "./source-create-body-source-order-shipping-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBodySourceOrderShipping
 */
export type SourceCreateBodySourceOrderShipping = {
  address: SourceCreateBodySourceOrderShippingAddress;
  carrier?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  trackingNumber?: string | undefined;
};

/**
 * @internal
 * SourceCreateBodySourceOrderShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodySourceOrderShipping = {
  address: External$SourceCreateBodySourceOrderShippingAddress;
  carrier?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  tracking_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodySourceOrderShipping
 */
const SchemaIn$SourceCreateBodySourceOrderShipping: z.ZodType<
  SourceCreateBodySourceOrderShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$SourceCreateBodySourceOrderShippingAddress.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodySourceOrderShipping
 */
const SchemaOut$SourceCreateBodySourceOrderShipping: z.ZodType<
  External$SourceCreateBodySourceOrderShipping, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodySourceOrderShipping // the object to be transformed
> = z
  .object({
    address: Schemas$SourceCreateBodySourceOrderShippingAddress.out,
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

export const Schemas$SourceCreateBodySourceOrderShipping = {
  in: SchemaIn$SourceCreateBodySourceOrderShipping,
  out: SchemaOut$SourceCreateBodySourceOrderShipping,
};
