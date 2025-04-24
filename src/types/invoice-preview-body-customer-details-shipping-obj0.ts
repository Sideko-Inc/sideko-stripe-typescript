import {
  External$InvoicePreviewBodyCustomerDetailsShippingObj0Address,
  InvoicePreviewBodyCustomerDetailsShippingObj0Address,
  Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0Address,
} from "./invoice-preview-body-customer-details-shipping-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyCustomerDetailsShippingObj0
 */
export type InvoicePreviewBodyCustomerDetailsShippingObj0 = {
  address: InvoicePreviewBodyCustomerDetailsShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyCustomerDetailsShippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyCustomerDetailsShippingObj0 = {
  address: External$InvoicePreviewBodyCustomerDetailsShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyCustomerDetailsShippingObj0
 */
const SchemaIn$InvoicePreviewBodyCustomerDetailsShippingObj0: z.ZodType<
  InvoicePreviewBodyCustomerDetailsShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0Address.in,
    name: z.string(),
    phone: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyCustomerDetailsShippingObj0
 */
const SchemaOut$InvoicePreviewBodyCustomerDetailsShippingObj0: z.ZodType<
  External$InvoicePreviewBodyCustomerDetailsShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyCustomerDetailsShippingObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0Address.out,
    name: z.string(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0 = {
  in: SchemaIn$InvoicePreviewBodyCustomerDetailsShippingObj0,
  out: SchemaOut$InvoicePreviewBodyCustomerDetailsShippingObj0,
};
