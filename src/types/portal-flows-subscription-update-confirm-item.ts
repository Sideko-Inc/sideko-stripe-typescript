import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsSubscriptionUpdateConfirmItem = {
  /**
   * The ID of the [subscription item](https://stripe.com/docs/api/subscriptions/object#subscription_object-items-data-id) to be updated.
   */
  id?: string | null | undefined;
  /**
   * The price the customer should subscribe to through this flow. The price must also be included in the configuration's [`features.subscription_update.products`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-features-subscription_update-products).
   */
  price?: string | null | undefined;
  /**
   * [Quantity](https://stripe.com/docs/subscriptions/quantities) for this item that the customer should subscribe to through this flow.
   */
  quantity?: number | undefined;
};

/**
 * @internal
 * PortalFlowsSubscriptionUpdateConfirmItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsSubscriptionUpdateConfirmItem = {
  id?: string | null | undefined;
  price?: string | null | undefined;
  quantity?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsSubscriptionUpdateConfirmItem
 */
const SchemaIn$PortalFlowsSubscriptionUpdateConfirmItem: z.ZodType<
  PortalFlowsSubscriptionUpdateConfirmItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string().nullable().optional(),
    price: z.string().nullable().optional(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      price: "price",
      quantity: "quantity",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsSubscriptionUpdateConfirmItem
 */
const SchemaOut$PortalFlowsSubscriptionUpdateConfirmItem: z.ZodType<
  External$PortalFlowsSubscriptionUpdateConfirmItem, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsSubscriptionUpdateConfirmItem // the object to be transformed
> = z
  .object({
    id: z.string().nullable().optional(),
    price: z.string().nullable().optional(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      price: "price",
      quantity: "quantity",
    });
  });

export const Schemas$PortalFlowsSubscriptionUpdateConfirmItem = {
  in: SchemaIn$PortalFlowsSubscriptionUpdateConfirmItem,
  out: SchemaOut$PortalFlowsSubscriptionUpdateConfirmItem,
};
