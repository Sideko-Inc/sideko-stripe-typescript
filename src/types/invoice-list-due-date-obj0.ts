import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceListDueDateObj0
 */
export type InvoiceListDueDateObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * InvoiceListDueDateObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceListDueDateObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceListDueDateObj0
 */
const SchemaIn$InvoiceListDueDateObj0: z.ZodType<
  InvoiceListDueDateObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceListDueDateObj0
 */
const SchemaOut$InvoiceListDueDateObj0: z.ZodType<
  External$InvoiceListDueDateObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceListDueDateObj0 // the object to be transformed
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

export const Schemas$InvoiceListDueDateObj0 = {
  in: SchemaIn$InvoiceListDueDateObj0,
  out: SchemaOut$InvoiceListDueDateObj0,
};
