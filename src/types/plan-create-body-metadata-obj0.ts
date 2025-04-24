import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanCreateBodyMetadataObj0
 */
export type PlanCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PlanCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PlanCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanCreateBodyMetadataObj0
 */
const SchemaIn$PlanCreateBodyMetadataObj0: z.ZodType<
  PlanCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanCreateBodyMetadataObj0
 */
const SchemaOut$PlanCreateBodyMetadataObj0: z.ZodType<
  External$PlanCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PlanCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PlanCreateBodyMetadataObj0 = {
  in: SchemaIn$PlanCreateBodyMetadataObj0,
  out: SchemaOut$PlanCreateBodyMetadataObj0,
};
