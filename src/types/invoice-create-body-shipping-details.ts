import {
  External$InvoiceCreateBodyShippingDetailsAddress,
  InvoiceCreateBodyShippingDetailsAddress,
  Schemas$InvoiceCreateBodyShippingDetailsAddress,
} from "./invoice-create-body-shipping-details-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
 */
export type InvoiceCreateBodyShippingDetails = {
  address: InvoiceCreateBodyShippingDetailsAddress;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingDetails = {
  address: External$InvoiceCreateBodyShippingDetailsAddress;
  name: string;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingDetails
 */
const SchemaIn$InvoiceCreateBodyShippingDetails: z.ZodType<
  InvoiceCreateBodyShippingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$InvoiceCreateBodyShippingDetailsAddress.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingDetails
 */
const SchemaOut$InvoiceCreateBodyShippingDetails: z.ZodType<
  External$InvoiceCreateBodyShippingDetails, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingDetails // the object to be transformed
> = z
  .object({
    address: Schemas$InvoiceCreateBodyShippingDetailsAddress.out,
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

export const Schemas$InvoiceCreateBodyShippingDetails = {
  in: SchemaIn$InvoiceCreateBodyShippingDetails,
  out: SchemaOut$InvoiceCreateBodyShippingDetails,
};
