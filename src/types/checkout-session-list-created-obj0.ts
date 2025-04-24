import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionListCreatedObj0
 */
export type CheckoutSessionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionListCreatedObj0
 */
const SchemaIn$CheckoutSessionListCreatedObj0: z.ZodType<
  CheckoutSessionListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionListCreatedObj0
 */
const SchemaOut$CheckoutSessionListCreatedObj0: z.ZodType<
  External$CheckoutSessionListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionListCreatedObj0 // the object to be transformed
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

export const Schemas$CheckoutSessionListCreatedObj0 = {
  in: SchemaIn$CheckoutSessionListCreatedObj0,
  out: SchemaOut$CheckoutSessionListCreatedObj0,
};
