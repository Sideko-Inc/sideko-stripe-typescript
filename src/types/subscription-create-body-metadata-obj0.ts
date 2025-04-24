import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyMetadataObj0
 */
export type SubscriptionCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SubscriptionCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyMetadataObj0
 */
const SchemaIn$SubscriptionCreateBodyMetadataObj0: z.ZodType<
  SubscriptionCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyMetadataObj0
 */
const SchemaOut$SubscriptionCreateBodyMetadataObj0: z.ZodType<
  External$SubscriptionCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionCreateBodyMetadataObj0 = {
  in: SchemaIn$SubscriptionCreateBodyMetadataObj0,
  out: SchemaOut$SubscriptionCreateBodyMetadataObj0,
};
