import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item
 */
export type SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotionCode?: string | undefined;
  };

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item,
  };
