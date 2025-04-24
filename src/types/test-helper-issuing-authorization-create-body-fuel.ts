import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about fuel that was purchased with this transaction.
 */
export type TestHelperIssuingAuthorizationCreateBodyFuel = {
  industryProductCode?: string | undefined;
  quantityDecimal?: string | undefined;
  type?:
    | (
        | "diesel"
        | "other"
        | "unleaded_plus"
        | "unleaded_regular"
        | "unleaded_super"
      )
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
    | undefined;
  unitCostDecimal?: string | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFuel = {
  industry_product_code?: string | undefined;
  quantity_decimal?: string | undefined;
  type?:
    | (
        | "diesel"
        | "other"
        | "unleaded_plus"
        | "unleaded_regular"
        | "unleaded_super"
      )
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
    | undefined;
  unit_cost_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFuel: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFuel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    industry_product_code: z.string().optional(),
    quantity_decimal: z.string().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
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
      .optional(),
    unit_cost_decimal: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFuel // the object to be transformed
> = z
  .object({
    industryProductCode: z.string().optional(),
    quantityDecimal: z.string().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
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
      .optional(),
    unitCostDecimal: z.string().optional(),
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

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFuel = {
  in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFuel,
  out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFuel,
};
