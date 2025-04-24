import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemListCreatedObj0
 */
export type InvoiceItemListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * InvoiceItemListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemListCreatedObj0
 */
const SchemaIn$InvoiceItemListCreatedObj0: z.ZodType<
  InvoiceItemListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemListCreatedObj0
 */
const SchemaOut$InvoiceItemListCreatedObj0: z.ZodType<
  External$InvoiceItemListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$InvoiceItemListCreatedObj0 = {
  in: SchemaIn$InvoiceItemListCreatedObj0,
  out: SchemaOut$InvoiceItemListCreatedObj0,
};
