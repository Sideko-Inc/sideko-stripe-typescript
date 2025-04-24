import {
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
 */
export type InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
      | null
      | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions =
  {
    [additionalProperty: string]:
      | External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions,
  };
