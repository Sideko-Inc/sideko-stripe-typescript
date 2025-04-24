import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileLinkListCreatedObj0
 */
export type FileLinkListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * FileLinkListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinkListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinkListCreatedObj0
 */
const SchemaIn$FileLinkListCreatedObj0: z.ZodType<
  FileLinkListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinkListCreatedObj0
 */
const SchemaOut$FileLinkListCreatedObj0: z.ZodType<
  External$FileLinkListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  FileLinkListCreatedObj0 // the object to be transformed
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

export const Schemas$FileLinkListCreatedObj0 = {
  in: SchemaIn$FileLinkListCreatedObj0,
  out: SchemaOut$FileLinkListCreatedObj0,
};
