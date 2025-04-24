import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EventListCreatedObj0
 */
export type EventListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * EventListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventListCreatedObj0
 */
const SchemaIn$EventListCreatedObj0: z.ZodType<
  EventListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventListCreatedObj0
 */
const SchemaOut$EventListCreatedObj0: z.ZodType<
  External$EventListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  EventListCreatedObj0 // the object to be transformed
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

export const Schemas$EventListCreatedObj0 = {
  in: SchemaIn$EventListCreatedObj0,
  out: SchemaOut$EventListCreatedObj0,
};
