import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyCustomerDetailsTax
 */
export type InvoicePreviewBodyCustomerDetailsTax = {
  ipAddress?: (string | string) | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyCustomerDetailsTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyCustomerDetailsTax = {
  ip_address?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyCustomerDetailsTax
 */
const SchemaIn$InvoicePreviewBodyCustomerDetailsTax: z.ZodType<
  InvoicePreviewBodyCustomerDetailsTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyCustomerDetailsTax
 */
const SchemaOut$InvoicePreviewBodyCustomerDetailsTax: z.ZodType<
  External$InvoicePreviewBodyCustomerDetailsTax, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyCustomerDetailsTax // the object to be transformed
> = z
  .object({
    ipAddress: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
    });
  });

export const Schemas$InvoicePreviewBodyCustomerDetailsTax = {
  in: SchemaIn$InvoicePreviewBodyCustomerDetailsTax,
  out: SchemaOut$InvoicePreviewBodyCustomerDetailsTax,
};
