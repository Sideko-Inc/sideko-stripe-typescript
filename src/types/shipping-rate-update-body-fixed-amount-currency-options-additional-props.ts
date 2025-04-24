import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
export type ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps = {
  amount?: number | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
};

/**
 * @internal
 * ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount?: number | undefined;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxBehavior: "tax_behavior",
    });
  });

export const Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps,
  };
