import {
  CustomUnitAmount,
  External$CustomUnitAmount,
  Schemas$CustomUnitAmount,
} from "./custom-unit-amount";
import { External$PriceTier, PriceTier, Schemas$PriceTier } from "./price-tier";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CurrencyOption = {
  customUnitAmount?: CustomUnitAmount | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: PriceTier[] | undefined;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
   */
  unitAmount?: number | null | undefined;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
   */
  unitAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * CurrencyOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CurrencyOption = {
  custom_unit_amount?: External$CustomUnitAmount | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  tiers?: External$PriceTier[] | undefined;
  unit_amount?: number | null | undefined;
  unit_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CurrencyOption
 */
const SchemaIn$CurrencyOption: z.ZodType<
  CurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_unit_amount: Schemas$CustomUnitAmount.in.optional(),
    tax_behavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    tiers: z.array(Schemas$PriceTier.in).optional(),
    unit_amount: z.number().int().nullable().optional(),
    unit_amount_decimal: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CurrencyOption
 */
const SchemaOut$CurrencyOption: z.ZodType<
  External$CurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  CurrencyOption // the object to be transformed
> = z
  .object({
    customUnitAmount: Schemas$CustomUnitAmount.out.optional(),
    taxBehavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    tiers: z.array(Schemas$PriceTier.out).optional(),
    unitAmount: z.number().int().nullable().optional(),
    unitAmountDecimal: z.string().nullable().optional(),
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

export const Schemas$CurrencyOption = {
  in: SchemaIn$CurrencyOption,
  out: SchemaOut$CurrencyOption,
};
