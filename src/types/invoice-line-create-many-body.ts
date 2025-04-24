import {
  External$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
} from "./invoice-line-create-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineCreateManyBodyLinesItem,
  InvoiceLineCreateManyBodyLinesItem,
  Schemas$InvoiceLineCreateManyBodyLinesItem,
} from "./invoice-line-create-many-body-lines-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBody
 */
export type InvoiceLineCreateManyBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?:
    | (InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to add.
   */
  lines: InvoiceLineCreateManyBodyLinesItem[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string) | undefined)
    | InvoiceLineCreateManyBodyLinesItem[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBody = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineCreateManyBodyLinesItem[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | (External$InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
        | undefined
      )
    | External$InvoiceLineCreateManyBodyLinesItem[]
    | External$InvoiceLineCreateManyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBody
 */
const SchemaIn$InvoiceLineCreateManyBody: z.ZodType<
  InvoiceLineCreateManyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineCreateManyBodyLinesItem.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBody
 */
const SchemaOut$InvoiceLineCreateManyBody: z.ZodType<
  External$InvoiceLineCreateManyBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineCreateManyBodyLinesItem.out),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
    });
  });

export const Schemas$InvoiceLineCreateManyBody = {
  in: SchemaIn$InvoiceLineCreateManyBody,
  out: SchemaOut$InvoiceLineCreateManyBody,
};
