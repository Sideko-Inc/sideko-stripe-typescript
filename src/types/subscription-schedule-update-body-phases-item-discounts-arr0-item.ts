import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item
 */
export type SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item,
  };
