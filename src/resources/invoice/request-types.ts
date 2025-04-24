import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$InvoiceCreateBody,
  InvoiceCreateBody,
  Schemas$InvoiceCreateBody,
} from "@sideko-inc/stripe/types/invoice-create-body";
import {
  External$InvoiceFinalizeBody,
  InvoiceFinalizeBody,
  Schemas$InvoiceFinalizeBody,
} from "@sideko-inc/stripe/types/invoice-finalize-body";
import {
  External$InvoiceListCreatedObj0,
  InvoiceListCreatedObj0,
  Schemas$InvoiceListCreatedObj0,
} from "@sideko-inc/stripe/types/invoice-list-created-obj0";
import {
  External$InvoiceListDueDateObj0,
  InvoiceListDueDateObj0,
  Schemas$InvoiceListDueDateObj0,
} from "@sideko-inc/stripe/types/invoice-list-due-date-obj0";
import {
  External$InvoiceMarkUncollectibleBody,
  InvoiceMarkUncollectibleBody,
  Schemas$InvoiceMarkUncollectibleBody,
} from "@sideko-inc/stripe/types/invoice-mark-uncollectible-body";
import {
  External$InvoicePayBody,
  InvoicePayBody,
  Schemas$InvoicePayBody,
} from "@sideko-inc/stripe/types/invoice-pay-body";
import {
  External$InvoicePreviewBody,
  InvoicePreviewBody,
  Schemas$InvoicePreviewBody,
} from "@sideko-inc/stripe/types/invoice-preview-body";
import {
  External$InvoiceSendBody,
  InvoiceSendBody,
  Schemas$InvoiceSendBody,
} from "@sideko-inc/stripe/types/invoice-send-body";
import {
  External$InvoiceUpdateBody,
  InvoiceUpdateBody,
  Schemas$InvoiceUpdateBody,
} from "@sideko-inc/stripe/types/invoice-update-body";
import {
  External$InvoiceVoidBody,
  InvoiceVoidBody,
  Schemas$InvoiceVoidBody,
} from "@sideko-inc/stripe/types/invoice-void-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  invoice: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * Only return invoices that were created during the given date interval.
   */
  created?: (InvoiceListCreatedObj0 | number) | undefined;
  /**
   * Only return invoices for the customer specified by this customer ID.
   */
  customer?: string | undefined;
  dueDate?: (InvoiceListDueDateObj0 | number) | undefined;
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
  /**
   * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
   */
  status?: ("draft" | "open" | "paid" | "uncollectible" | "void") | undefined;
  /**
   * Only return invoices for the subscription specified by this subscription ID.
   */
  subscription?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  created?: (External$InvoiceListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  due_date?: (External$InvoiceListDueDateObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("draft" | "open" | "paid" | "uncollectible" | "void") | undefined;
  subscription?: string | undefined;
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
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    created: z
      .union([Schemas$InvoiceListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    due_date: z
      .union([Schemas$InvoiceListDueDateObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collection_method: "collectionMethod",
      created: "created",
      customer: "customer",
      due_date: "dueDate",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
      subscription: "subscription",
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
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    created: z
      .union([Schemas$InvoiceListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    dueDate: z
      .union([Schemas$InvoiceListDueDateObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      collectionMethod: "collection_method",
      created: "created",
      customer: "customer",
      dueDate: "due_date",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
      subscription: "subscription",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * SearchRequest
 */
export type SearchRequest = {
  /**
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).
   */
  query: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string | undefined;
};

/**
 * @internal
 * SearchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SearchRequest = {
  query: string;
  expand?: string[] | undefined;
  limit?: number | undefined;
  page?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SearchRequest
 */
const SchemaIn$SearchRequest: z.ZodType<
  SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SearchRequest
 */
const SchemaOut$SearchRequest: z.ZodType<
  External$SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  SearchRequest // the object to be transformed
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

export const Schemas$SearchRequest = {
  in: SchemaIn$SearchRequest,
  out: SchemaOut$SearchRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  invoice: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  invoice: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    invoice: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: InvoiceCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$InvoiceCreateBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * PreviewRequest
 */
export type PreviewRequest = {
  data?: InvoicePreviewBody | undefined;
};

/**
 * @internal
 * PreviewRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PreviewRequest = {
  data?: External$InvoicePreviewBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PreviewRequest
 */
const SchemaIn$PreviewRequest: z.ZodType<
  PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoicePreviewBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PreviewRequest
 */
const SchemaOut$PreviewRequest: z.ZodType<
  External$PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  PreviewRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoicePreviewBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$PreviewRequest = {
  in: SchemaIn$PreviewRequest,
  out: SchemaOut$PreviewRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: InvoiceUpdateBody | undefined;
  invoice: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$InvoiceUpdateBody | undefined;
  invoice: string;
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
    data: Schemas$InvoiceUpdateBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
    data: Schemas$InvoiceUpdateBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * FinalizeRequest
 */
export type FinalizeRequest = {
  data?: InvoiceFinalizeBody | undefined;
  invoice: string;
};

/**
 * @internal
 * FinalizeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinalizeRequest = {
  data?: External$InvoiceFinalizeBody | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinalizeRequest
 */
const SchemaIn$FinalizeRequest: z.ZodType<
  FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceFinalizeBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinalizeRequest
 */
const SchemaOut$FinalizeRequest: z.ZodType<
  External$FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  FinalizeRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceFinalizeBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$FinalizeRequest = {
  in: SchemaIn$FinalizeRequest,
  out: SchemaOut$FinalizeRequest,
};

/**
 * MarkUncollectibleRequest
 */
export type MarkUncollectibleRequest = {
  data?: InvoiceMarkUncollectibleBody | undefined;
  invoice: string;
};

/**
 * @internal
 * MarkUncollectibleRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MarkUncollectibleRequest = {
  data?: External$InvoiceMarkUncollectibleBody | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MarkUncollectibleRequest
 */
const SchemaIn$MarkUncollectibleRequest: z.ZodType<
  MarkUncollectibleRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceMarkUncollectibleBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MarkUncollectibleRequest
 */
const SchemaOut$MarkUncollectibleRequest: z.ZodType<
  External$MarkUncollectibleRequest, // output type of this zod object
  z.ZodTypeDef,
  MarkUncollectibleRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceMarkUncollectibleBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$MarkUncollectibleRequest = {
  in: SchemaIn$MarkUncollectibleRequest,
  out: SchemaOut$MarkUncollectibleRequest,
};

/**
 * PayRequest
 */
export type PayRequest = {
  data?: InvoicePayBody | undefined;
  invoice: string;
};

/**
 * @internal
 * PayRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayRequest = {
  data?: External$InvoicePayBody | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayRequest
 */
const SchemaIn$PayRequest: z.ZodType<
  PayRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoicePayBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayRequest
 */
const SchemaOut$PayRequest: z.ZodType<
  External$PayRequest, // output type of this zod object
  z.ZodTypeDef,
  PayRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoicePayBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$PayRequest = {
  in: SchemaIn$PayRequest,
  out: SchemaOut$PayRequest,
};

/**
 * SendRequest
 */
export type SendRequest = {
  data?: InvoiceSendBody | undefined;
  invoice: string;
};

/**
 * @internal
 * SendRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SendRequest = {
  data?: External$InvoiceSendBody | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SendRequest
 */
const SchemaIn$SendRequest: z.ZodType<
  SendRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceSendBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SendRequest
 */
const SchemaOut$SendRequest: z.ZodType<
  External$SendRequest, // output type of this zod object
  z.ZodTypeDef,
  SendRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceSendBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$SendRequest = {
  in: SchemaIn$SendRequest,
  out: SchemaOut$SendRequest,
};

/**
 * VoidRequest
 */
export type VoidRequest = {
  data?: InvoiceVoidBody | undefined;
  invoice: string;
};

/**
 * @internal
 * VoidRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VoidRequest = {
  data?: External$InvoiceVoidBody | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VoidRequest
 */
const SchemaIn$VoidRequest: z.ZodType<
  VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$InvoiceVoidBody.in.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VoidRequest
 */
const SchemaOut$VoidRequest: z.ZodType<
  External$VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  VoidRequest // the object to be transformed
> = z
  .object({
    data: Schemas$InvoiceVoidBody.out.optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
    });
  });

export const Schemas$VoidRequest = {
  in: SchemaIn$VoidRequest,
  out: SchemaOut$VoidRequest,
};
