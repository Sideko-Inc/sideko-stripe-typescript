import {
  CouponCurrencyOption,
  External$CouponCurrencyOption,
  Schemas$CouponCurrencyOption,
} from "./coupon-currency-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type CouponCurrencyOptions = {
  [additionalProperty: string]: CouponCurrencyOption | null | undefined;
};

/**
 * @internal
 * CouponCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCurrencyOptions = {
  [additionalProperty: string]:
    | External$CouponCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCurrencyOptions
 */
const SchemaIn$CouponCurrencyOptions: z.ZodType<
  CouponCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$CouponCurrencyOption.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCurrencyOptions
 */
const SchemaOut$CouponCurrencyOptions: z.ZodType<
  External$CouponCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  CouponCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$CouponCurrencyOption.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponCurrencyOptions = {
  in: SchemaIn$CouponCurrencyOptions,
  out: SchemaOut$CouponCurrencyOptions,
};
