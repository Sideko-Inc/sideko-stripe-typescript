import {
  External$InvoicePayment,
  InvoicePayment,
  Schemas$InvoicePayment,
} from "./invoice-payment";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payments for this invoice
 */
export type InvoicePayments = {
  /**
   * Details about each object.
   */
  data: InvoicePayment[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * InvoicePayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePayments = {
  data: External$InvoicePayment[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePayments
 */
const SchemaIn$InvoicePayments: z.ZodType<
  InvoicePayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$InvoicePayment.in)),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePayments
 */
const SchemaOut$InvoicePayments: z.ZodType<
  External$InvoicePayments, // output type of this zod object
  z.ZodTypeDef,
  InvoicePayments // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$InvoicePayment.out)),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$InvoicePayments = {
  in: SchemaIn$InvoicePayments,
  out: SchemaOut$InvoicePayments,
};
