import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch,
} from "./treasury-financial-accounts-feature-create-body-outbound-payments-ach";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire,
} from "./treasury-financial-accounts-feature-create-body-outbound-payments-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments = {
  ach?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments =
  {
    ach?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
  };
