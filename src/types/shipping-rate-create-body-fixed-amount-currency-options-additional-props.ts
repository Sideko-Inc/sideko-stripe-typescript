import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
export type ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps = {
  amount: number;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
};

/**
 * @internal
 * ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_behavior: "taxBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxBehavior: "tax_behavior",
    });
  });

export const Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps,
  };
