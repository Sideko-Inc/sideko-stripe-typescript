import {
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceData,
  PaymentLinkCreateBodyInvoiceCreationInvoiceData,
  Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceData,
} from "./payment-link-create-body-invoice-creation-invoice-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Generate a post-purchase Invoice for one-time payments.
 */
export type PaymentLinkCreateBodyInvoiceCreation = {
  enabled: boolean;
  invoiceData?: PaymentLinkCreateBodyInvoiceCreationInvoiceData | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreation = {
  enabled: boolean;
  invoice_data?:
    | External$PaymentLinkCreateBodyInvoiceCreationInvoiceData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreation
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreation: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    invoice_data:
      Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoice_data: "invoiceData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreation
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreation: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreation // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    invoiceData:
      Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoiceData: "invoice_data",
    });
  });

export const Schemas$PaymentLinkCreateBodyInvoiceCreation = {
  in: SchemaIn$PaymentLinkCreateBodyInvoiceCreation,
  out: SchemaOut$PaymentLinkCreateBodyInvoiceCreation,
};
