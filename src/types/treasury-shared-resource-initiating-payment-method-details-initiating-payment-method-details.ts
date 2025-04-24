import {
  External$ReceivedPaymentMethodDetailsFinancialAccount,
  ReceivedPaymentMethodDetailsFinancialAccount,
  Schemas$ReceivedPaymentMethodDetailsFinancialAccount,
} from "./received-payment-method-details-financial-account";
import {
  External$TreasurySharedResourceBillingDetails,
  Schemas$TreasurySharedResourceBillingDetails,
  TreasurySharedResourceBillingDetails,
} from "./treasury-shared-resource-billing-details";
import {
  External$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
  Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
  TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
} from "./treasury-shared-resource-initiating-payment-method-details-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails =
  {
    /**
     * Set when `type` is `balance`.
     */
    balance?: "payments" | undefined;
    billingDetails: TreasurySharedResourceBillingDetails;
    financialAccount?: ReceivedPaymentMethodDetailsFinancialAccount | undefined;
    /**
     * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
     */
    issuingCard?: string | undefined;
    /**
     * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
     */
    type:
      | "balance"
      | "financial_account"
      | "issuing_card"
      | "stripe"
      | "us_bank_account";
    usBankAccount?:
      | TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * @internal
 * TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails =
  {
    balance?: "payments" | undefined;
    billing_details: External$TreasurySharedResourceBillingDetails;
    financial_account?:
      | External$ReceivedPaymentMethodDetailsFinancialAccount
      | undefined;
    issuing_card?: string | undefined;
    type:
      | "balance"
      | "financial_account"
      | "issuing_card"
      | "stripe"
      | "us_bank_account";
    us_bank_account?:
      | External$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
 */
const SchemaIn$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails: z.ZodType<
  TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    balance: z.enum(["payments"]).optional(),
    billing_details: Schemas$TreasurySharedResourceBillingDetails.in,
    financial_account:
      Schemas$ReceivedPaymentMethodDetailsFinancialAccount.in.optional(),
    issuing_card: z.string().optional(),
    type: z.enum([
      "balance",
      "financial_account",
      "issuing_card",
      "stripe",
      "us_bank_account",
    ]),
    us_bank_account:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balance: "balance",
      billing_details: "billingDetails",
      financial_account: "financialAccount",
      issuing_card: "issuingCard",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
 */
const SchemaOut$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails: z.ZodType<
  External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails // the object to be transformed
> = z
  .object({
    balance: z.enum(["payments"]).optional(),
    billingDetails: Schemas$TreasurySharedResourceBillingDetails.out,
    financialAccount:
      Schemas$ReceivedPaymentMethodDetailsFinancialAccount.out.optional(),
    issuingCard: z.string().optional(),
    type: z.enum([
      "balance",
      "financial_account",
      "issuing_card",
      "stripe",
      "us_bank_account",
    ]),
    usBankAccount:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balance: "balance",
      billingDetails: "billing_details",
      financialAccount: "financial_account",
      issuingCard: "issuing_card",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails =
  {
    in: SchemaIn$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
    out: SchemaOut$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
  };
