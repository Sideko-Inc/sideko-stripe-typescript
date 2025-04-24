import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountListCreatedObj0
 */
export type AccountListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * AccountListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountListCreatedObj0
 */
const SchemaIn$AccountListCreatedObj0: z.ZodType<
  AccountListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountListCreatedObj0
 */
const SchemaOut$AccountListCreatedObj0: z.ZodType<
  External$AccountListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountListCreatedObj0 // the object to be transformed
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

export const Schemas$AccountListCreatedObj0 = {
  in: SchemaIn$AccountListCreatedObj0,
  out: SchemaOut$AccountListCreatedObj0,
};
