import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch,
} from "./treasury-financial-account-create-body-features-outbound-payments-ach";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire,
} from "./treasury-financial-account-create-body-features-outbound-payments-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments = {
  ach?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments =
  {
    ach?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments,
  };
