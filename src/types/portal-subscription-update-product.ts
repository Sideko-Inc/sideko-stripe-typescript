import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalSubscriptionUpdateProduct = {
  /**
   * The list of price IDs which, when subscribed to, a subscription can be updated.
   */
  prices: string[];
  /**
   * The product ID.
   */
  product: string;
};

/**
 * @internal
 * PortalSubscriptionUpdateProduct without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalSubscriptionUpdateProduct = {
  prices: string[];
  product: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalSubscriptionUpdateProduct
 */
const SchemaIn$PortalSubscriptionUpdateProduct: z.ZodType<
  PortalSubscriptionUpdateProduct, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    prices: z.array(z.string()),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prices: "prices",
      product: "product",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalSubscriptionUpdateProduct
 */
const SchemaOut$PortalSubscriptionUpdateProduct: z.ZodType<
  External$PortalSubscriptionUpdateProduct, // output type of this zod object
  z.ZodTypeDef,
  PortalSubscriptionUpdateProduct // the object to be transformed
> = z
  .object({
    prices: z.array(z.string()),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prices: "prices",
      product: "product",
    });
  });

export const Schemas$PortalSubscriptionUpdateProduct = {
  in: SchemaIn$PortalSubscriptionUpdateProduct,
  out: SchemaOut$PortalSubscriptionUpdateProduct,
};
