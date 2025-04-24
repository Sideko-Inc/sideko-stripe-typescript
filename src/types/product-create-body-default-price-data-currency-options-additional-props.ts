import {
  External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount,
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount,
  Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount,
} from "./product-create-body-default-price-data-currency-options-additional-props-custom-unit-amount";
import {
  External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem,
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem,
  Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem,
} from "./product-create-body-default-price-data-currency-options-additional-props-tiers-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps
 */
export type ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps = {
  customUnitAmount?:
    | ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?:
    | ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem[]
    | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps =
  {
    custom_unit_amount?:
      | External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount
      | undefined;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    tiers?:
      | External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem[]
      | undefined;
    unit_amount?: number | undefined;
    unit_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps
 */
const SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps: z.ZodType<
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_unit_amount:
      Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(
        Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem.in,
      )
      .optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_unit_amount: "customUnitAmount",
      tax_behavior: "taxBehavior",
      tiers: "tiers",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps
 */
const SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps: z.ZodType<
  External$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    customUnitAmount:
      Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsCustomUnitAmount.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(
        Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalPropsTiersItem.out,
      )
      .optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customUnitAmount: "custom_unit_amount",
      taxBehavior: "tax_behavior",
      tiers: "tiers",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps,
    out: SchemaOut$ProductCreateBodyDefaultPriceDataCurrencyOptionsAdditionalProps,
  };
