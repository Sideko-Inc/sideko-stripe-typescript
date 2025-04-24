import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item
 */
export type SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item,
  };
