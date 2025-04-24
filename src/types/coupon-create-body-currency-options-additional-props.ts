import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponCreateBodyCurrencyOptionsAdditionalProps
 */
export type CouponCreateBodyCurrencyOptionsAdditionalProps = {
  amountOff: number;
};

/**
 * @internal
 * CouponCreateBodyCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCreateBodyCurrencyOptionsAdditionalProps = {
  amount_off: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCreateBodyCurrencyOptionsAdditionalProps
 */
const SchemaIn$CouponCreateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  CouponCreateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCreateBodyCurrencyOptionsAdditionalProps
 */
const SchemaOut$CouponCreateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  External$CouponCreateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  CouponCreateBodyCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    amountOff: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
    });
  });

export const Schemas$CouponCreateBodyCurrencyOptionsAdditionalProps = {
  in: SchemaIn$CouponCreateBodyCurrencyOptionsAdditionalProps,
  out: SchemaOut$CouponCreateBodyCurrencyOptionsAdditionalProps,
};
