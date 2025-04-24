import {
  External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
} from "./invoice-line-update-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineUpdateManyBodyLinesItem,
  InvoiceLineUpdateManyBodyLinesItem,
  Schemas$InvoiceLineUpdateManyBodyLinesItem,
} from "./invoice-line-update-many-body-lines-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBody
 */
export type InvoiceLineUpdateManyBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  invoiceMetadata?:
    | (InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to update.
   */
  lines: InvoiceLineUpdateManyBodyLinesItem[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string) | undefined)
    | InvoiceLineUpdateManyBodyLinesItem[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBody = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineUpdateManyBodyLinesItem[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | (External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
        | undefined
      )
    | External$InvoiceLineUpdateManyBodyLinesItem[]
    | External$InvoiceLineUpdateManyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBody
 */
const SchemaIn$InvoiceLineUpdateManyBody: z.ZodType<
  InvoiceLineUpdateManyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineUpdateManyBodyLinesItem.in),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBody
 */
const SchemaOut$InvoiceLineUpdateManyBody: z.ZodType<
  External$InvoiceLineUpdateManyBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineUpdateManyBodyLinesItem.out),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
    });
  });

export const Schemas$InvoiceLineUpdateManyBody = {
  in: SchemaIn$InvoiceLineUpdateManyBody,
  out: SchemaOut$InvoiceLineUpdateManyBody,
};
