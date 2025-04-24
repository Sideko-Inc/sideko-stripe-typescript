import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RadarEarlyFraudWarningListCreatedObj0
 */
export type RadarEarlyFraudWarningListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * RadarEarlyFraudWarningListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarEarlyFraudWarningListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarEarlyFraudWarningListCreatedObj0
 */
const SchemaIn$RadarEarlyFraudWarningListCreatedObj0: z.ZodType<
  RadarEarlyFraudWarningListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarEarlyFraudWarningListCreatedObj0
 */
const SchemaOut$RadarEarlyFraudWarningListCreatedObj0: z.ZodType<
  External$RadarEarlyFraudWarningListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  RadarEarlyFraudWarningListCreatedObj0 // the object to be transformed
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

export const Schemas$RadarEarlyFraudWarningListCreatedObj0 = {
  in: SchemaIn$RadarEarlyFraudWarningListCreatedObj0,
  out: SchemaOut$RadarEarlyFraudWarningListCreatedObj0,
};
