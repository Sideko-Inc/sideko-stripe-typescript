import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
      | null
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions,
  };
