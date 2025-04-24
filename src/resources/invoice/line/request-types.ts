import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-create-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineCreateManyBodyLinesItem,
  InvoiceLineCreateManyBodyLinesItem,
  Schemas$InvoiceLineCreateManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-create-many-body-lines-item";
import {
  External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-remove-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineRemoveManyBodyLinesItem,
  InvoiceLineRemoveManyBodyLinesItem,
  Schemas$InvoiceLineRemoveManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-remove-many-body-lines-item";
import {
  External$InvoiceLineUpdateBody,
  InvoiceLineUpdateBody,
  Schemas$InvoiceLineUpdateBody,
} from "@sideko-inc/stripe/types/invoice-line-update-body";
import {
  External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-update-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineUpdateManyBodyLinesItem,
  InvoiceLineUpdateManyBodyLinesItem,
  Schemas$InvoiceLineUpdateManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-update-many-body-lines-item";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  invoice: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  invoice: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    invoice: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * CreateManyRequest
 */
export type CreateManyRequest = {
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
  invoice: string;
};

/**
 * @internal
 * CreateManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineCreateManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManyRequest
 */
const SchemaIn$CreateManyRequest: z.ZodType<
  CreateManyRequest, // output type of this zod object
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManyRequest
 */
const SchemaOut$CreateManyRequest: z.ZodType<
  External$CreateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateManyRequest // the object to be transformed
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$CreateManyRequest = {
  in: SchemaIn$CreateManyRequest,
  out: SchemaOut$CreateManyRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: InvoiceLineUpdateBody | undefined;
  /**
   * Invoice ID of line item
   */
  invoice: string;
  /**
   * Invoice line item ID
   */
  lineItemId: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$InvoiceLineUpdateBody | undefined;
  invoice: string;
  line_item_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceLineUpdateBody.in.optional(),
    invoice: z.string(),
    line_item_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
      line_item_id: "lineItemId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceLineUpdateBody.out.optional(),
    invoice: z.string(),
    lineItemId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
      lineItemId: "line_item_id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * RemoveManyRequest
 */
export type RemoveManyRequest = {
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
  invoice: string;
};

/**
 * @internal
 * RemoveManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RemoveManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineRemoveManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RemoveManyRequest
 */
const SchemaIn$RemoveManyRequest: z.ZodType<
  RemoveManyRequest, // output type of this zod object
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RemoveManyRequest
 */
const SchemaOut$RemoveManyRequest: z.ZodType<
  External$RemoveManyRequest, // output type of this zod object
  z.ZodTypeDef,
  RemoveManyRequest // the object to be transformed
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$RemoveManyRequest = {
  in: SchemaIn$RemoveManyRequest,
  out: SchemaOut$RemoveManyRequest,
};

/**
 * UpdateManyRequest
 */
export type UpdateManyRequest = {
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
  invoice: string;
};

/**
 * @internal
 * UpdateManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineUpdateManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateManyRequest
 */
const SchemaIn$UpdateManyRequest: z.ZodType<
  UpdateManyRequest, // output type of this zod object
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateManyRequest
 */
const SchemaOut$UpdateManyRequest: z.ZodType<
  External$UpdateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateManyRequest // the object to be transformed
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$UpdateManyRequest = {
  in: SchemaIn$UpdateManyRequest,
  out: SchemaOut$UpdateManyRequest,
};
