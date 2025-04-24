import {
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata,
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata,
  Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata,
} from "./checkout-session-create-body-line-items-item-price-data-product-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItemPriceDataProductData
 */
export type CheckoutSessionCreateBodyLineItemsItemPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
    | undefined;
  name: string;
  taxCode?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItemPriceDataProductData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData =
  {
    description?: string | undefined;
    images?: string[] | undefined;
    metadata?:
      | External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata
      | undefined;
    name: string;
    tax_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItemPriceDataProductData
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata.in.optional(),
    name: z.string(),
    tax_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      images: "images",
      metadata: "metadata",
      name: "name",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItemPriceDataProductData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductDataMetadata.out.optional(),
    name: z.string(),
    taxCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      images: "images",
      metadata: "metadata",
      name: "name",
      taxCode: "tax_code",
    });
  });

export const Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData =
  {
    in: SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData,
    out: SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataProductData,
  };
