import {
  External$ProductCreateBodyDefaultPriceDataCurrencyOptions,
  ProductCreateBodyDefaultPriceDataCurrencyOptions,
  Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptions,
} from "./product-create-body-default-price-data-currency-options";
import {
  External$ProductCreateBodyDefaultPriceDataCustomUnitAmount,
  ProductCreateBodyDefaultPriceDataCustomUnitAmount,
  Schemas$ProductCreateBodyDefaultPriceDataCustomUnitAmount,
} from "./product-create-body-default-price-data-custom-unit-amount";
import {
  External$ProductCreateBodyDefaultPriceDataMetadata,
  ProductCreateBodyDefaultPriceDataMetadata,
  Schemas$ProductCreateBodyDefaultPriceDataMetadata,
} from "./product-create-body-default-price-data-metadata";
import {
  External$ProductCreateBodyDefaultPriceDataRecurring,
  ProductCreateBodyDefaultPriceDataRecurring,
  Schemas$ProductCreateBodyDefaultPriceDataRecurring,
} from "./product-create-body-default-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object. This Price will be set as the default price for this product.
 */
export type ProductCreateBodyDefaultPriceData = {
  currency: string;
  currencyOptions?:
    | ProductCreateBodyDefaultPriceDataCurrencyOptions
    | undefined;
  customUnitAmount?:
    | ProductCreateBodyDefaultPriceDataCustomUnitAmount
    | undefined;
  metadata?: ProductCreateBodyDefaultPriceDataMetadata | undefined;
  recurring?: ProductCreateBodyDefaultPriceDataRecurring | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * ProductCreateBodyDefaultPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyDefaultPriceData = {
  currency: string;
  currency_options?:
    | External$ProductCreateBodyDefaultPriceDataCurrencyOptions
    | undefined;
  custom_unit_amount?:
    | External$ProductCreateBodyDefaultPriceDataCustomUnitAmount
    | undefined;
  metadata?: External$ProductCreateBodyDefaultPriceDataMetadata | undefined;
  recurring?: External$ProductCreateBodyDefaultPriceDataRecurring | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyDefaultPriceData
 */
const SchemaIn$ProductCreateBodyDefaultPriceData: z.ZodType<
  ProductCreateBodyDefaultPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    currency_options:
      Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptions.in.optional(),
    custom_unit_amount:
      Schemas$ProductCreateBodyDefaultPriceDataCustomUnitAmount.in.optional(),
    metadata: Schemas$ProductCreateBodyDefaultPriceDataMetadata.in.optional(),
    recurring: Schemas$ProductCreateBodyDefaultPriceDataRecurring.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      currency_options: "currencyOptions",
      custom_unit_amount: "customUnitAmount",
      metadata: "metadata",
      recurring: "recurring",
      tax_behavior: "taxBehavior",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyDefaultPriceData
 */
const SchemaOut$ProductCreateBodyDefaultPriceData: z.ZodType<
  External$ProductCreateBodyDefaultPriceData, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyDefaultPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    currencyOptions:
      Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptions.out.optional(),
    customUnitAmount:
      Schemas$ProductCreateBodyDefaultPriceDataCustomUnitAmount.out.optional(),
    metadata: Schemas$ProductCreateBodyDefaultPriceDataMetadata.out.optional(),
    recurring:
      Schemas$ProductCreateBodyDefaultPriceDataRecurring.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      currencyOptions: "currency_options",
      customUnitAmount: "custom_unit_amount",
      metadata: "metadata",
      recurring: "recurring",
      taxBehavior: "tax_behavior",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$ProductCreateBodyDefaultPriceData = {
  in: SchemaIn$ProductCreateBodyDefaultPriceData,
  out: SchemaOut$ProductCreateBodyDefaultPriceData,
};
