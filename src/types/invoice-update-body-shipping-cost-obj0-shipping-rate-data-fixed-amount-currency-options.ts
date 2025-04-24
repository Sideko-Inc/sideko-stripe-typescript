import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
      | null
      | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions,
  };
