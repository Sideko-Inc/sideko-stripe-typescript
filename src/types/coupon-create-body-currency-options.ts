import {
  CouponCreateBodyCurrencyOptionsAdditionalProps,
  External$CouponCreateBodyCurrencyOptionsAdditionalProps,
  Schemas$CouponCreateBodyCurrencyOptionsAdditionalProps,
} from "./coupon-create-body-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type CouponCreateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | CouponCreateBodyCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * CouponCreateBodyCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCreateBodyCurrencyOptions = {
  [additionalProperty: string]:
    | External$CouponCreateBodyCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCreateBodyCurrencyOptions
 */
const SchemaIn$CouponCreateBodyCurrencyOptions: z.ZodType<
  CouponCreateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$CouponCreateBodyCurrencyOptionsAdditionalProps.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCreateBodyCurrencyOptions
 */
const SchemaOut$CouponCreateBodyCurrencyOptions: z.ZodType<
  External$CouponCreateBodyCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  CouponCreateBodyCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$CouponCreateBodyCurrencyOptionsAdditionalProps.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponCreateBodyCurrencyOptions = {
  in: SchemaIn$CouponCreateBodyCurrencyOptions,
  out: SchemaOut$CouponCreateBodyCurrencyOptions,
};
