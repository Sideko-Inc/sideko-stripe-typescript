import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.
 */
export type ForwardingRequestListCreated = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ForwardingRequestListCreated without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequestListCreated = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequestListCreated
 */
const SchemaIn$ForwardingRequestListCreated: z.ZodType<
  ForwardingRequestListCreated, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequestListCreated
 */
const SchemaOut$ForwardingRequestListCreated: z.ZodType<
  External$ForwardingRequestListCreated, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequestListCreated // the object to be transformed
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

export const Schemas$ForwardingRequestListCreated = {
  in: SchemaIn$ForwardingRequestListCreated,
  out: SchemaOut$ForwardingRequestListCreated,
};
