import {
  CouponUpdateBodyCurrencyOptionsAdditionalProps,
  External$CouponUpdateBodyCurrencyOptionsAdditionalProps,
  Schemas$CouponUpdateBodyCurrencyOptionsAdditionalProps,
} from "./coupon-update-body-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type CouponUpdateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | CouponUpdateBodyCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * CouponUpdateBodyCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponUpdateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | External$CouponUpdateBodyCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponUpdateBodyCurrencyOptions
 */
const SchemaIn$CouponUpdateBodyCurrencyOptions: z.ZodType<
  CouponUpdateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$CouponUpdateBodyCurrencyOptionsAdditionalProps.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponUpdateBodyCurrencyOptions
 */
const SchemaOut$CouponUpdateBodyCurrencyOptions: z.ZodType<
  External$CouponUpdateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  CouponUpdateBodyCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$CouponUpdateBodyCurrencyOptionsAdditionalProps.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponUpdateBodyCurrencyOptions = {
  in: SchemaIn$CouponUpdateBodyCurrencyOptions,
  out: SchemaOut$CouponUpdateBodyCurrencyOptions,
};
