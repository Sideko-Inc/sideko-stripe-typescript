import {
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceData,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceData,
  Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceData,
} from "./payment-link-update-body-invoice-creation-invoice-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Generate a post-purchase Invoice for one-time payments.
 */
export type PaymentLinkUpdateBodyInvoiceCreation = {
  enabled: boolean;
  invoiceData?: PaymentLinkUpdateBodyInvoiceCreationInvoiceData | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreation = {
  enabled: boolean;
  invoice_data?:
    | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreation
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreation: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    invoice_data:
      Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoice_data: "invoiceData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreation
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreation: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreation // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    invoiceData:
      Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoiceData: "invoice_data",
    });
  });

export const Schemas$PaymentLinkUpdateBodyInvoiceCreation = {
  in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreation,
  out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreation,
};
