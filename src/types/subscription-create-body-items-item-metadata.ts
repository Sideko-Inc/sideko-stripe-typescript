import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyItemsItemMetadata
 */
export type SubscriptionCreateBodyItemsItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyItemsItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyItemsItemMetadata = {
  [additionalProperty: string]:
    | External$SubscriptionCreateBodyItemsItemMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyItemsItemMetadata
 */
const SchemaIn$SubscriptionCreateBodyItemsItemMetadata: z.ZodType<
  SubscriptionCreateBodyItemsItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyItemsItemMetadata
 */
const SchemaOut$SubscriptionCreateBodyItemsItemMetadata: z.ZodType<
  External$SubscriptionCreateBodyItemsItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyItemsItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionCreateBodyItemsItemMetadata = {
  in: SchemaIn$SubscriptionCreateBodyItemsItemMetadata,
  out: SchemaOut$SubscriptionCreateBodyItemsItemMetadata,
};
