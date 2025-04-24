import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyItemsItemMetadata
 */
export type CustomerSubscriptionCreateBodyItemsItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyItemsItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyItemsItemMetadata = {
  [additionalProperty: string]:
    | External$CustomerSubscriptionCreateBodyItemsItemMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyItemsItemMetadata
 */
const SchemaIn$CustomerSubscriptionCreateBodyItemsItemMetadata: z.ZodType<
  CustomerSubscriptionCreateBodyItemsItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyItemsItemMetadata
 */
const SchemaOut$CustomerSubscriptionCreateBodyItemsItemMetadata: z.ZodType<
  External$CustomerSubscriptionCreateBodyItemsItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyItemsItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerSubscriptionCreateBodyItemsItemMetadata = {
  in: SchemaIn$CustomerSubscriptionCreateBodyItemsItemMetadata,
  out: SchemaOut$CustomerSubscriptionCreateBodyItemsItemMetadata,
};
