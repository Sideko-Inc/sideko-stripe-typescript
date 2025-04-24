import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
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

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  };
