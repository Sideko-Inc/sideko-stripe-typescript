import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerListCreatedObj0
 */
export type CustomerListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * CustomerListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerListCreatedObj0
 */
const SchemaIn$CustomerListCreatedObj0: z.ZodType<
  CustomerListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerListCreatedObj0
 */
const SchemaOut$CustomerListCreatedObj0: z.ZodType<
  External$CustomerListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerListCreatedObj0 // the object to be transformed
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

export const Schemas$CustomerListCreatedObj0 = {
  in: SchemaIn$CustomerListCreatedObj0,
  out: SchemaOut$CustomerListCreatedObj0,
};
