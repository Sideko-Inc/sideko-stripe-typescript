import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFuelData = {
  /**
   * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
   */
  industryProductCode?: string | null | undefined;
  /**
   * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
   */
  quantityDecimal?: string | null | undefined;
  /**
   * The type of fuel that was purchased.
   */
  type?:
    | (
        | "diesel"
        | "other"
        | "unleaded_plus"
        | "unleaded_regular"
        | "unleaded_super"
      )
    | null
    | undefined;
  /**
   * The units for `quantity_decimal`.
   */
  unit?:
    | (
        | "charging_minute"
        | "imperial_gallon"
        | "kilogram"
        | "kilowatt_hour"
        | "liter"
        | "other"
        | "pound"
        | "us_gallon"
      )
    | null
    | undefined;
  /**
   * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
   */
  unitCostDecimal?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationFuelData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFuelData = {
  industry_product_code?: string | null | undefined;
  quantity_decimal?: string | null | undefined;
  type?:
    | (
        | "diesel"
        | "other"
        | "unleaded_plus"
        | "unleaded_regular"
        | "unleaded_super"
      )
    | null
    | undefined;
  unit?:
    | (
        | "charging_minute"
        | "imperial_gallon"
        | "kilogram"
        | "kilowatt_hour"
        | "liter"
        | "other"
        | "pound"
        | "us_gallon"
      )
    | null
    | undefined;
  unit_cost_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFuelData
 */
const SchemaIn$IssuingAuthorizationFuelData: z.ZodType<
  IssuingAuthorizationFuelData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    industry_product_code: z.string().nullable().optional(),
    quantity_decimal: z.string().nullable().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
      .nullable()
      .optional(),
    unit: z
      .enum([
        "charging_minute",
        "imperial_gallon",
        "kilogram",
        "kilowatt_hour",
        "liter",
        "other",
        "pound",
        "us_gallon",
      ])
      .nullable()
      .optional(),
    unit_cost_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industry_product_code: "industryProductCode",
      quantity_decimal: "quantityDecimal",
      type: "type",
      unit: "unit",
      unit_cost_decimal: "unitCostDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFuelData
 */
const SchemaOut$IssuingAuthorizationFuelData: z.ZodType<
  External$IssuingAuthorizationFuelData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFuelData // the object to be transformed
> = z
  .object({
    industryProductCode: z.string().nullable().optional(),
    quantityDecimal: z.string().nullable().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
      .nullable()
      .optional(),
    unit: z
      .enum([
        "charging_minute",
        "imperial_gallon",
        "kilogram",
        "kilowatt_hour",
        "liter",
        "other",
        "pound",
        "us_gallon",
      ])
      .nullable()
      .optional(),
    unitCostDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industryProductCode: "industry_product_code",
      quantityDecimal: "quantity_decimal",
      type: "type",
      unit: "unit",
      unitCostDecimal: "unit_cost_decimal",
    });
  });

export const Schemas$IssuingAuthorizationFuelData = {
  in: SchemaIn$IssuingAuthorizationFuelData,
  out: SchemaOut$IssuingAuthorizationFuelData,
};
