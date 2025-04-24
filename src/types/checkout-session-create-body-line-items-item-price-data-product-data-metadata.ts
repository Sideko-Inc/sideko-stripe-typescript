import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
 */
export type CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata =
  {
    [additionalProperty: string]: string | null | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata =
  {
    [additionalProperty: string]:
      | External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata =
  {
    in: SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata,
    out: SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata,
  };
