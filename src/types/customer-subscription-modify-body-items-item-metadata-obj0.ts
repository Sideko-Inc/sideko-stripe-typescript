import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyItemsItemMetadataObj0
 */
export type CustomerSubscriptionModifyBodyItemsItemMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyItemsItemMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyItemsItemMetadataObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyItemsItemMetadataObj0: z.ZodType<
  CustomerSubscriptionModifyBodyItemsItemMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyItemsItemMetadataObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyItemsItemMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerSubscriptionModifyBodyItemsItemMetadataObj0 = {
  in: SchemaIn$CustomerSubscriptionModifyBodyItemsItemMetadataObj0,
  out: SchemaOut$CustomerSubscriptionModifyBodyItemsItemMetadataObj0,
};
