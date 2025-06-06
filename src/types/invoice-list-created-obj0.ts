import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceListCreatedObj0
 */
export type InvoiceListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * InvoiceListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceListCreatedObj0
 */
const SchemaIn$InvoiceListCreatedObj0: z.ZodType<
  InvoiceListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceListCreatedObj0
 */
const SchemaOut$InvoiceListCreatedObj0: z.ZodType<
  External$InvoiceListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceListCreatedObj0 // the object to be transformed
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

export const Schemas$InvoiceListCreatedObj0 = {
  in: SchemaIn$InvoiceListCreatedObj0,
  out: SchemaOut$InvoiceListCreatedObj0,
};
