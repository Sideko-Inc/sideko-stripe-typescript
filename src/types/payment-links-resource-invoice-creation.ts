import {
  External$PaymentLinksResourceInvoiceSettings,
  PaymentLinksResourceInvoiceSettings,
  Schemas$PaymentLinksResourceInvoiceSettings,
} from "./payment-links-resource-invoice-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceInvoiceCreation = {
  /**
   * Enable creating an invoice on successful payment.
   */
  enabled: boolean;
  invoiceData?: PaymentLinksResourceInvoiceSettings | undefined;
};

/**
 * @internal
 * PaymentLinksResourceInvoiceCreation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceInvoiceCreation = {
  enabled: boolean;
  invoice_data?: External$PaymentLinksResourceInvoiceSettings | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceInvoiceCreation
 */
const SchemaIn$PaymentLinksResourceInvoiceCreation: z.ZodType<
  PaymentLinksResourceInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    invoice_data: z.lazy(() =>
      Schemas$PaymentLinksResourceInvoiceSettings.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoice_data: "invoiceData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceInvoiceCreation
 */
const SchemaOut$PaymentLinksResourceInvoiceCreation: z.ZodType<
  External$PaymentLinksResourceInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceInvoiceCreation // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    invoiceData: z.lazy(() =>
      Schemas$PaymentLinksResourceInvoiceSettings.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoiceData: "invoice_data",
    });
  });

export const Schemas$PaymentLinksResourceInvoiceCreation = {
  in: SchemaIn$PaymentLinksResourceInvoiceCreation,
  out: SchemaOut$PaymentLinksResourceInvoiceCreation,
};
