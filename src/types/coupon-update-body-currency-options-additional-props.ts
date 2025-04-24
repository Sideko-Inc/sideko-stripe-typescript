import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponUpdateBodyCurrencyOptionsAdditionalProps
 */
export type CouponUpdateBodyCurrencyOptionsAdditionalProps = {
  amountOff: number;
};

/**
 * @internal
 * CouponUpdateBodyCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponUpdateBodyCurrencyOptionsAdditionalProps = {
  amount_off: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponUpdateBodyCurrencyOptionsAdditionalProps
 */
const SchemaIn$CouponUpdateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  CouponUpdateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_off: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_off: "amountOff",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponUpdateBodyCurrencyOptionsAdditionalProps
 */
const SchemaOut$CouponUpdateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  External$CouponUpdateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  CouponUpdateBodyCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    amountOff: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
    });
  });

export const Schemas$CouponUpdateBodyCurrencyOptionsAdditionalProps = {
  in: SchemaIn$CouponUpdateBodyCurrencyOptionsAdditionalProps,
  out: SchemaOut$CouponUpdateBodyCurrencyOptionsAdditionalProps,
};
