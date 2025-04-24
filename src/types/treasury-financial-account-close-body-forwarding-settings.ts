import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
 */
export type TreasuryFinancialAccountCloseBodyForwardingSettings = {
  financialAccount?: string | undefined;
  paymentMethod?: string | undefined;
  type: "financial_account" | "payment_method";
};

/**
 * @internal
 * TreasuryFinancialAccountCloseBodyForwardingSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCloseBodyForwardingSettings = {
  financial_account?: string | undefined;
  payment_method?: string | undefined;
  type: "financial_account" | "payment_method";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCloseBodyForwardingSettings
 */
const SchemaIn$TreasuryFinancialAccountCloseBodyForwardingSettings: z.ZodType<
  TreasuryFinancialAccountCloseBodyForwardingSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string().optional(),
    payment_method: z.string().optional(),
    type: z.enum(["financial_account", "payment_method"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      payment_method: "paymentMethod",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCloseBodyForwardingSettings
 */
const SchemaOut$TreasuryFinancialAccountCloseBodyForwardingSettings: z.ZodType<
  External$TreasuryFinancialAccountCloseBodyForwardingSettings, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCloseBodyForwardingSettings // the object to be transformed
> = z
  .object({
    financialAccount: z.string().optional(),
    paymentMethod: z.string().optional(),
    type: z.enum(["financial_account", "payment_method"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      paymentMethod: "payment_method",
      type: "type",
    });
  });

export const Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings = {
  in: SchemaIn$TreasuryFinancialAccountCloseBodyForwardingSettings,
  out: SchemaOut$TreasuryFinancialAccountCloseBodyForwardingSettings,
};
