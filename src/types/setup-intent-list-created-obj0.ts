import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentListCreatedObj0
 */
export type SetupIntentListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SetupIntentListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentListCreatedObj0
 */
const SchemaIn$SetupIntentListCreatedObj0: z.ZodType<
  SetupIntentListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentListCreatedObj0
 */
const SchemaOut$SetupIntentListCreatedObj0: z.ZodType<
  External$SetupIntentListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentListCreatedObj0 // the object to be transformed
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

export const Schemas$SetupIntentListCreatedObj0 = {
  in: SchemaIn$SetupIntentListCreatedObj0,
  out: SchemaOut$SetupIntentListCreatedObj0,
};
