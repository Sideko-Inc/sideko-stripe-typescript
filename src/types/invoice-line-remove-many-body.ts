import {
  External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
} from "./invoice-line-remove-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineRemoveManyBodyLinesItem,
  InvoiceLineRemoveManyBodyLinesItem,
  Schemas$InvoiceLineRemoveManyBodyLinesItem,
} from "./invoice-line-remove-many-body-lines-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineRemoveManyBody
 */
export type InvoiceLineRemoveManyBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?:
    | (InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to remove.
   */
  lines: InvoiceLineRemoveManyBodyLinesItem[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string) | undefined)
    | InvoiceLineRemoveManyBodyLinesItem[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceLineRemoveManyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineRemoveManyBody = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineRemoveManyBodyLinesItem[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | (External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
        | undefined
      )
    | External$InvoiceLineRemoveManyBodyLinesItem[]
    | External$InvoiceLineRemoveManyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineRemoveManyBody
 */
const SchemaIn$InvoiceLineRemoveManyBody: z.ZodType<
  InvoiceLineRemoveManyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineRemoveManyBodyLinesItem.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineRemoveManyBody
 */
const SchemaOut$InvoiceLineRemoveManyBody: z.ZodType<
  External$InvoiceLineRemoveManyBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineRemoveManyBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineRemoveManyBodyLinesItem.out),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
    });
  });

export const Schemas$InvoiceLineRemoveManyBody = {
  in: SchemaIn$InvoiceLineRemoveManyBody,
  out: SchemaOut$InvoiceLineRemoveManyBody,
};
