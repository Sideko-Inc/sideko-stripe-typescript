import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeUpdateBodyMetadataObj0
 */
export type PromotionCodeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PromotionCodeUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PromotionCodeUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeUpdateBodyMetadataObj0
 */
const SchemaIn$PromotionCodeUpdateBodyMetadataObj0: z.ZodType<
  PromotionCodeUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeUpdateBodyMetadataObj0
 */
const SchemaOut$PromotionCodeUpdateBodyMetadataObj0: z.ZodType<
  External$PromotionCodeUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PromotionCodeUpdateBodyMetadataObj0 = {
  in: SchemaIn$PromotionCodeUpdateBodyMetadataObj0,
  out: SchemaOut$PromotionCodeUpdateBodyMetadataObj0,
};
