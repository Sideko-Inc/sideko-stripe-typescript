import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransferListCreatedObj0
 */
export type TransferListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TransferListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferListCreatedObj0
 */
const SchemaIn$TransferListCreatedObj0: z.ZodType<
  TransferListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferListCreatedObj0
 */
const SchemaOut$TransferListCreatedObj0: z.ZodType<
  External$TransferListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TransferListCreatedObj0 // the object to be transformed
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

export const Schemas$TransferListCreatedObj0 = {
  in: SchemaIn$TransferListCreatedObj0,
  out: SchemaOut$TransferListCreatedObj0,
};
