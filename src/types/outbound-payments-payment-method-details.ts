import {
  External$OutboundPaymentsPaymentMethodDetailsFinancialAccount,
  OutboundPaymentsPaymentMethodDetailsFinancialAccount,
  Schemas$OutboundPaymentsPaymentMethodDetailsFinancialAccount,
} from "./outbound-payments-payment-method-details-financial-account";
import {
  External$OutboundPaymentsPaymentMethodDetailsUsBankAccount,
  OutboundPaymentsPaymentMethodDetailsUsBankAccount,
  Schemas$OutboundPaymentsPaymentMethodDetailsUsBankAccount,
} from "./outbound-payments-payment-method-details-us-bank-account";
import {
  External$TreasurySharedResourceBillingDetails,
  Schemas$TreasurySharedResourceBillingDetails,
  TreasurySharedResourceBillingDetails,
} from "./treasury-shared-resource-billing-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type OutboundPaymentsPaymentMethodDetails = {
  billingDetails: TreasurySharedResourceBillingDetails;
  financialAccount?:
    | OutboundPaymentsPaymentMethodDetailsFinancialAccount
    | undefined;
  /**
   * The type of the payment method used in the OutboundPayment.
   */
  type: "financial_account" | "us_bank_account";
  usBankAccount?: OutboundPaymentsPaymentMethodDetailsUsBankAccount | undefined;
};

/**
 * @internal
 * OutboundPaymentsPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutboundPaymentsPaymentMethodDetails = {
  billing_details: External$TreasurySharedResourceBillingDetails;
  financial_account?:
    | External$OutboundPaymentsPaymentMethodDetailsFinancialAccount
    | undefined;
  type: "financial_account" | "us_bank_account";
  us_bank_account?:
    | External$OutboundPaymentsPaymentMethodDetailsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutboundPaymentsPaymentMethodDetails
 */
const SchemaIn$OutboundPaymentsPaymentMethodDetails: z.ZodType<
  OutboundPaymentsPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_details: Schemas$TreasurySharedResourceBillingDetails.in,
    financial_account:
      Schemas$OutboundPaymentsPaymentMethodDetailsFinancialAccount.in.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    us_bank_account: z.lazy(() =>
      Schemas$OutboundPaymentsPaymentMethodDetailsUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutboundPaymentsPaymentMethodDetails
 */
const SchemaOut$OutboundPaymentsPaymentMethodDetails: z.ZodType<
  External$OutboundPaymentsPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  OutboundPaymentsPaymentMethodDetails // the object to be transformed
> = z
  .object({
    billingDetails: Schemas$TreasurySharedResourceBillingDetails.out,
    financialAccount:
      Schemas$OutboundPaymentsPaymentMethodDetailsFinancialAccount.out.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    usBankAccount: z.lazy(() =>
      Schemas$OutboundPaymentsPaymentMethodDetailsUsBankAccount.out.optional(),
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

export const Schemas$OutboundPaymentsPaymentMethodDetails = {
  in: SchemaIn$OutboundPaymentsPaymentMethodDetails,
  out: SchemaOut$OutboundPaymentsPaymentMethodDetails,
};
