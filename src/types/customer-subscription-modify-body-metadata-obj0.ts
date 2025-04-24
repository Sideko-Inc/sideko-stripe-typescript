import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyMetadataObj0
 */
export type CustomerSubscriptionModifyBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerSubscriptionModifyBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyMetadataObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyMetadataObj0: z.ZodType<
  CustomerSubscriptionModifyBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyMetadataObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyMetadataObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerSubscriptionModifyBodyMetadataObj0 = {
  in: SchemaIn$CustomerSubscriptionModifyBodyMetadataObj0,
  out: SchemaOut$CustomerSubscriptionModifyBodyMetadataObj0,
};
