import {
  External$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount,
  PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount,
  Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount,
} from "./price-create-body-currency-options-additional-props-custom-unit-amount";
import {
  External$PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem,
  PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem,
  Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem,
} from "./price-create-body-currency-options-additional-props-tiers-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceCreateBodyCurrencyOptionsAdditionalProps
 */
export type PriceCreateBodyCurrencyOptionsAdditionalProps = {
  customUnitAmount?:
    | PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?: PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem[] | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * PriceCreateBodyCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyCurrencyOptionsAdditionalProps = {
  custom_unit_amount?:
    | External$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?:
    | External$PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem[]
    | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyCurrencyOptionsAdditionalProps
 */
const SchemaIn$PriceCreateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  PriceCreateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_unit_amount:
      Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem.in)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyCurrencyOptionsAdditionalProps
 */
const SchemaOut$PriceCreateBodyCurrencyOptionsAdditionalProps: z.ZodType<
  External$PriceCreateBodyCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    customUnitAmount:
      Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsCustomUnitAmount.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z
      .array(Schemas$PriceCreateBodyCurrencyOptionsAdditionalPropsTiersItem.out)
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

export const Schemas$PriceCreateBodyCurrencyOptionsAdditionalProps = {
  in: SchemaIn$PriceCreateBodyCurrencyOptionsAdditionalProps,
  out: SchemaOut$PriceCreateBodyCurrencyOptionsAdditionalProps,
};
