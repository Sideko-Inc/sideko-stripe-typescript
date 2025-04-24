import {
  BillingCreditGrantsResourceAmount,
  External$BillingCreditGrantsResourceAmount,
  Schemas$BillingCreditGrantsResourceAmount,
} from "./billing-credit-grants-resource-amount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CreditBalance = {
  availableBalance: BillingCreditGrantsResourceAmount;
  ledgerBalance: BillingCreditGrantsResourceAmount;
};

/**
 * @internal
 * CreditBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditBalance = {
  available_balance: External$BillingCreditGrantsResourceAmount;
  ledger_balance: External$BillingCreditGrantsResourceAmount;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditBalance
 */
const SchemaIn$CreditBalance: z.ZodType<
  CreditBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available_balance: Schemas$BillingCreditGrantsResourceAmount.in,
    ledger_balance: Schemas$BillingCreditGrantsResourceAmount.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available_balance: "availableBalance",
      ledger_balance: "ledgerBalance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditBalance
 */
const SchemaOut$CreditBalance: z.ZodType<
  External$CreditBalance, // output type of this zod object
  z.ZodTypeDef,
  CreditBalance // the object to be transformed
> = z
  .object({
    availableBalance: Schemas$BillingCreditGrantsResourceAmount.out,
    ledgerBalance: Schemas$BillingCreditGrantsResourceAmount.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availableBalance: "available_balance",
      ledgerBalance: "ledger_balance",
    });
  });

export const Schemas$CreditBalance = {
  in: SchemaIn$CreditBalance,
  out: SchemaOut$CreditBalance,
};
