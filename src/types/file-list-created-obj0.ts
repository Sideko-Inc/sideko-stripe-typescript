import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileListCreatedObj0
 */
export type FileListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * FileListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileListCreatedObj0
 */
const SchemaIn$FileListCreatedObj0: z.ZodType<
  FileListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileListCreatedObj0
 */
const SchemaOut$FileListCreatedObj0: z.ZodType<
  External$FileListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  FileListCreatedObj0 // the object to be transformed
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

export const Schemas$FileListCreatedObj0 = {
  in: SchemaIn$FileListCreatedObj0,
  out: SchemaOut$FileListCreatedObj0,
};
