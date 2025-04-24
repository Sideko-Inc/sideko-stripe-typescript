import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanUpdateBodyMetadataObj0
 */
export type PlanUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PlanUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PlanUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanUpdateBodyMetadataObj0
 */
const SchemaIn$PlanUpdateBodyMetadataObj0: z.ZodType<
  PlanUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanUpdateBodyMetadataObj0
 */
const SchemaOut$PlanUpdateBodyMetadataObj0: z.ZodType<
  External$PlanUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PlanUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PlanUpdateBodyMetadataObj0 = {
  in: SchemaIn$PlanUpdateBodyMetadataObj0,
  out: SchemaOut$PlanUpdateBodyMetadataObj0,
};
