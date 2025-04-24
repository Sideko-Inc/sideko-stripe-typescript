import {
  External$InvoiceUpdateBodyShippingDetailsObj0Address,
  InvoiceUpdateBodyShippingDetailsObj0Address,
  Schemas$InvoiceUpdateBodyShippingDetailsObj0Address,
} from "./invoice-update-body-shipping-details-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingDetailsObj0
 */
export type InvoiceUpdateBodyShippingDetailsObj0 = {
  address: InvoiceUpdateBodyShippingDetailsObj0Address;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyShippingDetailsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingDetailsObj0 = {
  address: External$InvoiceUpdateBodyShippingDetailsObj0Address;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingDetailsObj0
 */
const SchemaIn$InvoiceUpdateBodyShippingDetailsObj0: z.ZodType<
  InvoiceUpdateBodyShippingDetailsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$InvoiceUpdateBodyShippingDetailsObj0Address.in,
    name: z.string(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingDetailsObj0
 */
const SchemaOut$InvoiceUpdateBodyShippingDetailsObj0: z.ZodType<
  External$InvoiceUpdateBodyShippingDetailsObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingDetailsObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$InvoiceUpdateBodyShippingDetailsObj0Address.out,
    name: z.string(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingDetailsObj0 = {
  in: SchemaIn$InvoiceUpdateBodyShippingDetailsObj0,
  out: SchemaOut$InvoiceUpdateBodyShippingDetailsObj0,
};
