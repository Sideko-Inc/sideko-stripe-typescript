import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanListCreatedObj0
 */
export type PlanListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * PlanListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanListCreatedObj0
 */
const SchemaIn$PlanListCreatedObj0: z.ZodType<
  PlanListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanListCreatedObj0
 */
const SchemaOut$PlanListCreatedObj0: z.ZodType<
  External$PlanListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  PlanListCreatedObj0 // the object to be transformed
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

export const Schemas$PlanListCreatedObj0 = {
  in: SchemaIn$PlanListCreatedObj0,
  out: SchemaOut$PlanListCreatedObj0,
};
