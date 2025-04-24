import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyMetadataObj0
 */
export type CustomerSubscriptionCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerSubscriptionCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyMetadataObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyMetadataObj0: z.ZodType<
  CustomerSubscriptionCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyMetadataObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyMetadataObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerSubscriptionCreateBodyMetadataObj0 = {
  in: SchemaIn$CustomerSubscriptionCreateBodyMetadataObj0,
  out: SchemaOut$CustomerSubscriptionCreateBodyMetadataObj0,
};
