import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyMetadataObj0
 */
export type SubscriptionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SubscriptionUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyMetadataObj0
 */
const SchemaIn$SubscriptionUpdateBodyMetadataObj0: z.ZodType<
  SubscriptionUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyMetadataObj0
 */
const SchemaOut$SubscriptionUpdateBodyMetadataObj0: z.ZodType<
  External$SubscriptionUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionUpdateBodyMetadataObj0 = {
  in: SchemaIn$SubscriptionUpdateBodyMetadataObj0,
  out: SchemaOut$SubscriptionUpdateBodyMetadataObj0,
};
