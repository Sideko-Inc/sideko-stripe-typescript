import {
  BillingCreditGrantsResourceAmount,
  External$BillingCreditGrantsResourceAmount,
  Schemas$BillingCreditGrantsResourceAmount,
} from "./billing-credit-grants-resource-amount";
import {
  BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided,
  External$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided,
  Schemas$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided,
} from "./billing-credit-grants-resource-balance-credits-application-invoice-voided";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceBalanceCredit = {
  amount: BillingCreditGrantsResourceAmount;
  creditsApplicationInvoiceVoided?:
    | BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided
    | undefined;
  /**
   * The type of credit transaction.
   */
  type: "credits_application_invoice_voided" | "credits_granted";
};

/**
 * @internal
 * BillingCreditGrantsResourceBalanceCredit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceBalanceCredit = {
  amount: External$BillingCreditGrantsResourceAmount;
  credits_application_invoice_voided?:
    | External$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided
    | undefined;
  type: "credits_application_invoice_voided" | "credits_granted";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceBalanceCredit
 */
const SchemaIn$BillingCreditGrantsResourceBalanceCredit: z.ZodType<
  BillingCreditGrantsResourceBalanceCredit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.in,
    credits_application_invoice_voided: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided.in.optional(),
    ),
    type: z.enum(["credits_application_invoice_voided", "credits_granted"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      credits_application_invoice_voided: "creditsApplicationInvoiceVoided",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceBalanceCredit
 */
const SchemaOut$BillingCreditGrantsResourceBalanceCredit: z.ZodType<
  External$BillingCreditGrantsResourceBalanceCredit, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceBalanceCredit // the object to be transformed
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.out,
    creditsApplicationInvoiceVoided: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided.out.optional(),
    ),
    type: z.enum(["credits_application_invoice_voided", "credits_granted"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      creditsApplicationInvoiceVoided: "credits_application_invoice_voided",
      type: "type",
    });
  });

export const Schemas$BillingCreditGrantsResourceBalanceCredit = {
  in: SchemaIn$BillingCreditGrantsResourceBalanceCredit,
  out: SchemaOut$BillingCreditGrantsResourceBalanceCredit,
};
