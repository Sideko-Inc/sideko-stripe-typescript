import {
  External$OutboundTransfersPaymentMethodDetailsFinancialAccount,
  OutboundTransfersPaymentMethodDetailsFinancialAccount,
  Schemas$OutboundTransfersPaymentMethodDetailsFinancialAccount,
} from "./outbound-transfers-payment-method-details-financial-account";
import {
  External$OutboundTransfersPaymentMethodDetailsUsBankAccount,
  OutboundTransfersPaymentMethodDetailsUsBankAccount,
  Schemas$OutboundTransfersPaymentMethodDetailsUsBankAccount,
} from "./outbound-transfers-payment-method-details-us-bank-account";
import {
  External$TreasurySharedResourceBillingDetails,
  Schemas$TreasurySharedResourceBillingDetails,
  TreasurySharedResourceBillingDetails,
} from "./treasury-shared-resource-billing-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type OutboundTransfersPaymentMethodDetails = {
  billingDetails: TreasurySharedResourceBillingDetails;
  financialAccount?:
    | OutboundTransfersPaymentMethodDetailsFinancialAccount
    | undefined;
  /**
   * The type of the payment method used in the OutboundTransfer.
   */
  type: "financial_account" | "us_bank_account";
  usBankAccount?:
    | OutboundTransfersPaymentMethodDetailsUsBankAccount
    | undefined;
};

/**
 * @internal
 * OutboundTransfersPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutboundTransfersPaymentMethodDetails = {
  billing_details: External$TreasurySharedResourceBillingDetails;
  financial_account?:
    | External$OutboundTransfersPaymentMethodDetailsFinancialAccount
    | undefined;
  type: "financial_account" | "us_bank_account";
  us_bank_account?:
    | External$OutboundTransfersPaymentMethodDetailsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutboundTransfersPaymentMethodDetails
 */
const SchemaIn$OutboundTransfersPaymentMethodDetails: z.ZodType<
  OutboundTransfersPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_details: Schemas$TreasurySharedResourceBillingDetails.in,
    financial_account:
      Schemas$OutboundTransfersPaymentMethodDetailsFinancialAccount.in.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    us_bank_account: z.lazy(() =>
      Schemas$OutboundTransfersPaymentMethodDetailsUsBankAccount.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_details: "billingDetails",
      financial_account: "financialAccount",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutboundTransfersPaymentMethodDetails
 */
const SchemaOut$OutboundTransfersPaymentMethodDetails: z.ZodType<
  External$OutboundTransfersPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  OutboundTransfersPaymentMethodDetails // the object to be transformed
> = z
  .object({
    billingDetails: Schemas$TreasurySharedResourceBillingDetails.out,
    financialAccount:
      Schemas$OutboundTransfersPaymentMethodDetailsFinancialAccount.out.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    usBankAccount: z.lazy(() =>
      Schemas$OutboundTransfersPaymentMethodDetailsUsBankAccount.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingDetails: "billing_details",
      financialAccount: "financial_account",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$OutboundTransfersPaymentMethodDetails = {
  in: SchemaIn$OutboundTransfersPaymentMethodDetails,
  out: SchemaOut$OutboundTransfersPaymentMethodDetails,
};
