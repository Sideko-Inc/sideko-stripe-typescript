import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire,
  };
