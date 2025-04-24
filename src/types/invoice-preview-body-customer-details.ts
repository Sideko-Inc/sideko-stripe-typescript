import {
  External$InvoicePreviewBodyCustomerDetailsAddressObj0,
  InvoicePreviewBodyCustomerDetailsAddressObj0,
  Schemas$InvoicePreviewBodyCustomerDetailsAddressObj0,
} from "./invoice-preview-body-customer-details-address-obj0";
import {
  External$InvoicePreviewBodyCustomerDetailsShippingObj0,
  InvoicePreviewBodyCustomerDetailsShippingObj0,
  Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0,
} from "./invoice-preview-body-customer-details-shipping-obj0";
import {
  External$InvoicePreviewBodyCustomerDetailsTax,
  InvoicePreviewBodyCustomerDetailsTax,
  Schemas$InvoicePreviewBodyCustomerDetailsTax,
} from "./invoice-preview-body-customer-details-tax";
import {
  External$InvoicePreviewBodyCustomerDetailsTaxIdsItem,
  InvoicePreviewBodyCustomerDetailsTaxIdsItem,
  Schemas$InvoicePreviewBodyCustomerDetailsTaxIdsItem,
} from "./invoice-preview-body-customer-details-tax-ids-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
 */
export type InvoicePreviewBodyCustomerDetails = {
  address?: (InvoicePreviewBodyCustomerDetailsAddressObj0 | string) | undefined;
  shipping?:
    | (InvoicePreviewBodyCustomerDetailsShippingObj0 | string)
    | undefined;
  tax?: InvoicePreviewBodyCustomerDetailsTax | undefined;
  taxExempt?: ("exempt" | "none" | "reverse") | undefined;
  taxIds?: InvoicePreviewBodyCustomerDetailsTaxIdsItem[] | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyCustomerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyCustomerDetails = {
  address?:
    | (External$InvoicePreviewBodyCustomerDetailsAddressObj0 | string)
    | undefined;
  shipping?:
    | (External$InvoicePreviewBodyCustomerDetailsShippingObj0 | string)
    | undefined;
  tax?: External$InvoicePreviewBodyCustomerDetailsTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | undefined;
  tax_ids?: External$InvoicePreviewBodyCustomerDetailsTaxIdsItem[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyCustomerDetails
 */
const SchemaIn$InvoicePreviewBodyCustomerDetails: z.ZodType<
  InvoicePreviewBodyCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$InvoicePreviewBodyCustomerDetailsAddressObj0.in,
        z.string(),
      ])
      .optional(),
    shipping: z
      .union([
        Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0.in,
        z.string(),
      ])
      .optional(),
    tax: Schemas$InvoicePreviewBodyCustomerDetailsTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).optional(),
    tax_ids: z
      .array(Schemas$InvoicePreviewBodyCustomerDetailsTaxIdsItem.in)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      shipping: "shipping",
      tax: "tax",
      tax_exempt: "taxExempt",
      tax_ids: "taxIds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyCustomerDetails
 */
const SchemaOut$InvoicePreviewBodyCustomerDetails: z.ZodType<
  External$InvoicePreviewBodyCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyCustomerDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$InvoicePreviewBodyCustomerDetailsAddressObj0.out,
        z.string(),
      ])
      .optional(),
    shipping: z
      .union([
        Schemas$InvoicePreviewBodyCustomerDetailsShippingObj0.out,
        z.string(),
      ])
      .optional(),
    tax: Schemas$InvoicePreviewBodyCustomerDetailsTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).optional(),
    taxIds: z
      .array(Schemas$InvoicePreviewBodyCustomerDetailsTaxIdsItem.out)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      shipping: "shipping",
      tax: "tax",
      taxExempt: "tax_exempt",
      taxIds: "tax_ids",
    });
  });

export const Schemas$InvoicePreviewBodyCustomerDetails = {
  in: SchemaIn$InvoicePreviewBodyCustomerDetails,
  out: SchemaOut$InvoicePreviewBodyCustomerDetails,
};
