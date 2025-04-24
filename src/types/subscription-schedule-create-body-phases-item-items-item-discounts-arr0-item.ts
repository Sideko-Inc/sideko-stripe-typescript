import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item
 */
export type SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotionCode?: string | undefined;
  };

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotion_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item // the object to be transformed
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotionCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item,
  };
