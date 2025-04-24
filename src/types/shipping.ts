import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Shipping = {
  address?: Address | undefined;
  /**
   * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
   */
  carrier?: string | null | undefined;
  /**
   * Recipient name.
   */
  name?: string | undefined;
  /**
   * Recipient phone (including extension).
   */
  phone?: string | null | undefined;
  /**
   * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
   */
  trackingNumber?: string | null | undefined;
};

/**
 * @internal
 * Shipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Shipping = {
  address?: External$Address | undefined;
  carrier?: string | null | undefined;
  name?: string | undefined;
  phone?: string | null | undefined;
  tracking_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Shipping
 */
const SchemaIn$Shipping: z.ZodType<
  Shipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    carrier: z.string().nullable().optional(),
    name: z.string().optional(),
    phone: z.string().nullable().optional(),
    tracking_number: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Shipping
 */
const SchemaOut$Shipping: z.ZodType<
  External$Shipping, // output type of this zod object
  z.ZodTypeDef,
  Shipping // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    carrier: z.string().nullable().optional(),
    name: z.string().optional(),
    phone: z.string().nullable().optional(),
    trackingNumber: z.string().nullable().optional(),
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

export const Schemas$Shipping = {
  in: SchemaIn$Shipping,
  out: SchemaOut$Shipping,
};
