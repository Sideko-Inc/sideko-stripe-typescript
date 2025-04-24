import {
  CheckoutSessionCreateBodyInvoiceCreationInvoiceData,
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceData,
  Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceData,
} from "./checkout-session-create-body-invoice-creation-invoice-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Generate a post-purchase Invoice for one-time payments.
 */
export type CheckoutSessionCreateBodyInvoiceCreation = {
  enabled: boolean;
  invoiceData?: CheckoutSessionCreateBodyInvoiceCreationInvoiceData | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreation = {
  enabled: boolean;
  invoice_data?:
    | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreation
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreation: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    invoice_data:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoice_data: "invoiceData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreation
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreation: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreation // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    invoiceData:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoiceData: "invoice_data",
    });
  });

export const Schemas$CheckoutSessionCreateBodyInvoiceCreation = {
  in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreation,
  out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreation,
};
