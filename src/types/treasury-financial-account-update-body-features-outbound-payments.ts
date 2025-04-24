import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch,
} from "./treasury-financial-account-update-body-features-outbound-payments-ach";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire,
} from "./treasury-financial-account-update-body-features-outbound-payments-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments = {
  ach?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments =
  {
    ach?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments,
  };
