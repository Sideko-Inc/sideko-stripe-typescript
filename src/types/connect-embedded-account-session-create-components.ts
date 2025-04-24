import {
  ConnectEmbeddedAccountConfigClaim,
  External$ConnectEmbeddedAccountConfigClaim,
  Schemas$ConnectEmbeddedAccountConfigClaim,
} from "./connect-embedded-account-config-claim";
import {
  ConnectEmbeddedBaseConfigClaim,
  External$ConnectEmbeddedBaseConfigClaim,
  Schemas$ConnectEmbeddedBaseConfigClaim,
} from "./connect-embedded-base-config-claim";
import {
  ConnectEmbeddedFinancialAccountConfigClaim,
  External$ConnectEmbeddedFinancialAccountConfigClaim,
  Schemas$ConnectEmbeddedFinancialAccountConfigClaim,
} from "./connect-embedded-financial-account-config-claim";
import {
  ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
  External$ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
  Schemas$ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
} from "./connect-embedded-financial-account-transactions-config-claim";
import {
  ConnectEmbeddedIssuingCardConfigClaim,
  External$ConnectEmbeddedIssuingCardConfigClaim,
  Schemas$ConnectEmbeddedIssuingCardConfigClaim,
} from "./connect-embedded-issuing-card-config-claim";
import {
  ConnectEmbeddedIssuingCardsListConfigClaim,
  External$ConnectEmbeddedIssuingCardsListConfigClaim,
  Schemas$ConnectEmbeddedIssuingCardsListConfigClaim,
} from "./connect-embedded-issuing-cards-list-config-claim";
import {
  ConnectEmbeddedPaymentsConfigClaim,
  External$ConnectEmbeddedPaymentsConfigClaim,
  Schemas$ConnectEmbeddedPaymentsConfigClaim,
} from "./connect-embedded-payments-config-claim";
import {
  ConnectEmbeddedPayoutsConfig,
  External$ConnectEmbeddedPayoutsConfig,
  Schemas$ConnectEmbeddedPayoutsConfig,
} from "./connect-embedded-payouts-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedAccountSessionCreateComponents = {
  accountManagement: ConnectEmbeddedAccountConfigClaim;
  accountOnboarding: ConnectEmbeddedAccountConfigClaim;
  balances: ConnectEmbeddedPayoutsConfig;
  documents: ConnectEmbeddedBaseConfigClaim;
  financialAccount: ConnectEmbeddedFinancialAccountConfigClaim;
  financialAccountTransactions: ConnectEmbeddedFinancialAccountTransactionsConfigClaim;
  issuingCard: ConnectEmbeddedIssuingCardConfigClaim;
  issuingCardsList: ConnectEmbeddedIssuingCardsListConfigClaim;
  notificationBanner: ConnectEmbeddedAccountConfigClaim;
  paymentDetails: ConnectEmbeddedPaymentsConfigClaim;
  payments: ConnectEmbeddedPaymentsConfigClaim;
  payouts: ConnectEmbeddedPayoutsConfig;
  payoutsList: ConnectEmbeddedBaseConfigClaim;
  taxRegistrations: ConnectEmbeddedBaseConfigClaim;
  taxSettings: ConnectEmbeddedBaseConfigClaim;
};

/**
 * @internal
 * ConnectEmbeddedAccountSessionCreateComponents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedAccountSessionCreateComponents = {
  account_management: External$ConnectEmbeddedAccountConfigClaim;
  account_onboarding: External$ConnectEmbeddedAccountConfigClaim;
  balances: External$ConnectEmbeddedPayoutsConfig;
  documents: External$ConnectEmbeddedBaseConfigClaim;
  financial_account: External$ConnectEmbeddedFinancialAccountConfigClaim;
  financial_account_transactions: External$ConnectEmbeddedFinancialAccountTransactionsConfigClaim;
  issuing_card: External$ConnectEmbeddedIssuingCardConfigClaim;
  issuing_cards_list: External$ConnectEmbeddedIssuingCardsListConfigClaim;
  notification_banner: External$ConnectEmbeddedAccountConfigClaim;
  payment_details: External$ConnectEmbeddedPaymentsConfigClaim;
  payments: External$ConnectEmbeddedPaymentsConfigClaim;
  payouts: External$ConnectEmbeddedPayoutsConfig;
  payouts_list: External$ConnectEmbeddedBaseConfigClaim;
  tax_registrations: External$ConnectEmbeddedBaseConfigClaim;
  tax_settings: External$ConnectEmbeddedBaseConfigClaim;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedAccountSessionCreateComponents
 */
const SchemaIn$ConnectEmbeddedAccountSessionCreateComponents: z.ZodType<
  ConnectEmbeddedAccountSessionCreateComponents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_management: Schemas$ConnectEmbeddedAccountConfigClaim.in,
    account_onboarding: Schemas$ConnectEmbeddedAccountConfigClaim.in,
    balances: Schemas$ConnectEmbeddedPayoutsConfig.in,
    documents: Schemas$ConnectEmbeddedBaseConfigClaim.in,
    financial_account: Schemas$ConnectEmbeddedFinancialAccountConfigClaim.in,
    financial_account_transactions:
      Schemas$ConnectEmbeddedFinancialAccountTransactionsConfigClaim.in,
    issuing_card: Schemas$ConnectEmbeddedIssuingCardConfigClaim.in,
    issuing_cards_list: Schemas$ConnectEmbeddedIssuingCardsListConfigClaim.in,
    notification_banner: Schemas$ConnectEmbeddedAccountConfigClaim.in,
    payment_details: Schemas$ConnectEmbeddedPaymentsConfigClaim.in,
    payments: Schemas$ConnectEmbeddedPaymentsConfigClaim.in,
    payouts: Schemas$ConnectEmbeddedPayoutsConfig.in,
    payouts_list: Schemas$ConnectEmbeddedBaseConfigClaim.in,
    tax_registrations: Schemas$ConnectEmbeddedBaseConfigClaim.in,
    tax_settings: Schemas$ConnectEmbeddedBaseConfigClaim.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_management: "accountManagement",
      account_onboarding: "accountOnboarding",
      balances: "balances",
      documents: "documents",
      financial_account: "financialAccount",
      financial_account_transactions: "financialAccountTransactions",
      issuing_card: "issuingCard",
      issuing_cards_list: "issuingCardsList",
      notification_banner: "notificationBanner",
      payment_details: "paymentDetails",
      payments: "payments",
      payouts: "payouts",
      payouts_list: "payoutsList",
      tax_registrations: "taxRegistrations",
      tax_settings: "taxSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedAccountSessionCreateComponents
 */
const SchemaOut$ConnectEmbeddedAccountSessionCreateComponents: z.ZodType<
  External$ConnectEmbeddedAccountSessionCreateComponents, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedAccountSessionCreateComponents // the object to be transformed
> = z
  .object({
    accountManagement: Schemas$ConnectEmbeddedAccountConfigClaim.out,
    accountOnboarding: Schemas$ConnectEmbeddedAccountConfigClaim.out,
    balances: Schemas$ConnectEmbeddedPayoutsConfig.out,
    documents: Schemas$ConnectEmbeddedBaseConfigClaim.out,
    financialAccount: Schemas$ConnectEmbeddedFinancialAccountConfigClaim.out,
    financialAccountTransactions:
      Schemas$ConnectEmbeddedFinancialAccountTransactionsConfigClaim.out,
    issuingCard: Schemas$ConnectEmbeddedIssuingCardConfigClaim.out,
    issuingCardsList: Schemas$ConnectEmbeddedIssuingCardsListConfigClaim.out,
    notificationBanner: Schemas$ConnectEmbeddedAccountConfigClaim.out,
    paymentDetails: Schemas$ConnectEmbeddedPaymentsConfigClaim.out,
    payments: Schemas$ConnectEmbeddedPaymentsConfigClaim.out,
    payouts: Schemas$ConnectEmbeddedPayoutsConfig.out,
    payoutsList: Schemas$ConnectEmbeddedBaseConfigClaim.out,
    taxRegistrations: Schemas$ConnectEmbeddedBaseConfigClaim.out,
    taxSettings: Schemas$ConnectEmbeddedBaseConfigClaim.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountManagement: "account_management",
      accountOnboarding: "account_onboarding",
      balances: "balances",
      documents: "documents",
      financialAccount: "financial_account",
      financialAccountTransactions: "financial_account_transactions",
      issuingCard: "issuing_card",
      issuingCardsList: "issuing_cards_list",
      notificationBanner: "notification_banner",
      paymentDetails: "payment_details",
      payments: "payments",
      payouts: "payouts",
      payoutsList: "payouts_list",
      taxRegistrations: "tax_registrations",
      taxSettings: "tax_settings",
    });
  });

export const Schemas$ConnectEmbeddedAccountSessionCreateComponents = {
  in: SchemaIn$ConnectEmbeddedAccountSessionCreateComponents,
  out: SchemaOut$ConnectEmbeddedAccountSessionCreateComponents,
};
