import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  };
