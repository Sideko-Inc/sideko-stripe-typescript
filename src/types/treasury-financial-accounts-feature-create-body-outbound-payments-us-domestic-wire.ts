import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire,
  };
