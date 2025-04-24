import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanCreateBodyProductObj0Metadata
 */
export type PlanCreateBodyProductObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PlanCreateBodyProductObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanCreateBodyProductObj0Metadata = {
  [additionalProperty: string]:
    | External$PlanCreateBodyProductObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanCreateBodyProductObj0Metadata
 */
const SchemaIn$PlanCreateBodyProductObj0Metadata: z.ZodType<
  PlanCreateBodyProductObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanCreateBodyProductObj0Metadata
 */
const SchemaOut$PlanCreateBodyProductObj0Metadata: z.ZodType<
  External$PlanCreateBodyProductObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  PlanCreateBodyProductObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PlanCreateBodyProductObj0Metadata = {
  in: SchemaIn$PlanCreateBodyProductObj0Metadata,
  out: SchemaOut$PlanCreateBodyProductObj0Metadata,
};
