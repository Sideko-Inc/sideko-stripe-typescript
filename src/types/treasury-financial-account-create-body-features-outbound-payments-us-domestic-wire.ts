import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire,
  };
