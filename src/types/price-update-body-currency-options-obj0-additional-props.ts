import {
  External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount,
  PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount,
  Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount,
} from "./price-update-body-currency-options-obj0-additional-props-custom-unit-amount";
import {
  External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem,
  PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem,
  Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem,
} from "./price-update-body-currency-options-obj0-additional-props-tiers-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceUpdateBodyCurrencyOptionsObj0AdditionalProps
 */
export type PriceUpdateBodyCurrencyOptionsObj0AdditionalProps = {
  customUnitAmount?:
    | PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?:
    | PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem[]
    | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * PriceUpdateBodyCurrencyOptionsObj0AdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps = {
  custom_unit_amount?:
    | External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?:
    | External$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem[]
    | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceUpdateBodyCurrencyOptionsObj0AdditionalProps
 */
const SchemaIn$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps: z.ZodType<
  PriceUpdateBodyCurrencyOptionsObj0AdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_unit_amount:
      Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(
        Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps
 */
const SchemaOut$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps: z.ZodType<
  External$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  PriceUpdateBodyCurrencyOptionsObj0AdditionalProps // the object to be transformed
> = z
  .object({
    customUnitAmount:
      Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsCustomUnitAmount.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(
        Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalPropsTiersItem.out,
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

export const Schemas$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps = {
  in: SchemaIn$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps,
  out: SchemaOut$PriceUpdateBodyCurrencyOptionsObj0AdditionalProps,
};
