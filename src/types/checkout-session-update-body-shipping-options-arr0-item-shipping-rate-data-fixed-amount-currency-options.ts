import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
      | null
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions,
  };
