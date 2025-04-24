import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CouponCurrencyOption = {
  /**
   * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
   */
  amountOff: number;
};

/**
 * @internal
 * CouponCurrencyOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCurrencyOption = {
  amount_off: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCurrencyOption
 */
const SchemaIn$CouponCurrencyOption: z.ZodType<
  CouponCurrencyOption, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCurrencyOption
 */
const SchemaOut$CouponCurrencyOption: z.ZodType<
  External$CouponCurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  CouponCurrencyOption // the object to be transformed
> = z
  .object({
    amountOff: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
    });
  });

export const Schemas$CouponCurrencyOption = {
  in: SchemaIn$CouponCurrencyOption,
  out: SchemaOut$CouponCurrencyOption,
};
