import {
  AccountSessionsCreateBodyComponentsAccountManagement,
  External$AccountSessionsCreateBodyComponentsAccountManagement,
  Schemas$AccountSessionsCreateBodyComponentsAccountManagement,
} from "./account-sessions-create-body-components-account-management";
import {
  AccountSessionsCreateBodyComponentsAccountOnboarding,
  External$AccountSessionsCreateBodyComponentsAccountOnboarding,
  Schemas$AccountSessionsCreateBodyComponentsAccountOnboarding,
} from "./account-sessions-create-body-components-account-onboarding";
import {
  AccountSessionsCreateBodyComponentsBalances,
  External$AccountSessionsCreateBodyComponentsBalances,
  Schemas$AccountSessionsCreateBodyComponentsBalances,
} from "./account-sessions-create-body-components-balances";
import {
  AccountSessionsCreateBodyComponentsDocuments,
  External$AccountSessionsCreateBodyComponentsDocuments,
  Schemas$AccountSessionsCreateBodyComponentsDocuments,
} from "./account-sessions-create-body-components-documents";
import {
  AccountSessionsCreateBodyComponentsFinancialAccount,
  External$AccountSessionsCreateBodyComponentsFinancialAccount,
  Schemas$AccountSessionsCreateBodyComponentsFinancialAccount,
} from "./account-sessions-create-body-components-financial-account";
import {
  AccountSessionsCreateBodyComponentsFinancialAccountTransactions,
  External$AccountSessionsCreateBodyComponentsFinancialAccountTransactions,
  Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactions,
} from "./account-sessions-create-body-components-financial-account-transactions";
import {
  AccountSessionsCreateBodyComponentsIssuingCard,
  External$AccountSessionsCreateBodyComponentsIssuingCard,
  Schemas$AccountSessionsCreateBodyComponentsIssuingCard,
} from "./account-sessions-create-body-components-issuing-card";
import {
  AccountSessionsCreateBodyComponentsIssuingCardsList,
  External$AccountSessionsCreateBodyComponentsIssuingCardsList,
  Schemas$AccountSessionsCreateBodyComponentsIssuingCardsList,
} from "./account-sessions-create-body-components-issuing-cards-list";
import {
  AccountSessionsCreateBodyComponentsNotificationBanner,
  External$AccountSessionsCreateBodyComponentsNotificationBanner,
  Schemas$AccountSessionsCreateBodyComponentsNotificationBanner,
} from "./account-sessions-create-body-components-notification-banner";
import {
  AccountSessionsCreateBodyComponentsPaymentDetails,
  External$AccountSessionsCreateBodyComponentsPaymentDetails,
  Schemas$AccountSessionsCreateBodyComponentsPaymentDetails,
} from "./account-sessions-create-body-components-payment-details";
import {
  AccountSessionsCreateBodyComponentsPayments,
  External$AccountSessionsCreateBodyComponentsPayments,
  Schemas$AccountSessionsCreateBodyComponentsPayments,
} from "./account-sessions-create-body-components-payments";
import {
  AccountSessionsCreateBodyComponentsPayouts,
  External$AccountSessionsCreateBodyComponentsPayouts,
  Schemas$AccountSessionsCreateBodyComponentsPayouts,
} from "./account-sessions-create-body-components-payouts";
import {
  AccountSessionsCreateBodyComponentsPayoutsList,
  External$AccountSessionsCreateBodyComponentsPayoutsList,
  Schemas$AccountSessionsCreateBodyComponentsPayoutsList,
} from "./account-sessions-create-body-components-payouts-list";
import {
  AccountSessionsCreateBodyComponentsTaxRegistrations,
  External$AccountSessionsCreateBodyComponentsTaxRegistrations,
  Schemas$AccountSessionsCreateBodyComponentsTaxRegistrations,
} from "./account-sessions-create-body-components-tax-registrations";
import {
  AccountSessionsCreateBodyComponentsTaxSettings,
  External$AccountSessionsCreateBodyComponentsTaxSettings,
  Schemas$AccountSessionsCreateBodyComponentsTaxSettings,
} from "./account-sessions-create-body-components-tax-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
 */
export type AccountSessionsCreateBodyComponents = {
  accountManagement?:
    | AccountSessionsCreateBodyComponentsAccountManagement
    | undefined;
  accountOnboarding?:
    | AccountSessionsCreateBodyComponentsAccountOnboarding
    | undefined;
  balances?: AccountSessionsCreateBodyComponentsBalances | undefined;
  documents?: AccountSessionsCreateBodyComponentsDocuments | undefined;
  financialAccount?:
    | AccountSessionsCreateBodyComponentsFinancialAccount
    | undefined;
  financialAccountTransactions?:
    | AccountSessionsCreateBodyComponentsFinancialAccountTransactions
    | undefined;
  issuingCard?: AccountSessionsCreateBodyComponentsIssuingCard | undefined;
  issuingCardsList?:
    | AccountSessionsCreateBodyComponentsIssuingCardsList
    | undefined;
  notificationBanner?:
    | AccountSessionsCreateBodyComponentsNotificationBanner
    | undefined;
  paymentDetails?:
    | AccountSessionsCreateBodyComponentsPaymentDetails
    | undefined;
  payments?: AccountSessionsCreateBodyComponentsPayments | undefined;
  payouts?: AccountSessionsCreateBodyComponentsPayouts | undefined;
  payoutsList?: AccountSessionsCreateBodyComponentsPayoutsList | undefined;
  taxRegistrations?:
    | AccountSessionsCreateBodyComponentsTaxRegistrations
    | undefined;
  taxSettings?: AccountSessionsCreateBodyComponentsTaxSettings | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponents without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponents = {
  account_management?:
    | External$AccountSessionsCreateBodyComponentsAccountManagement
    | undefined;
  account_onboarding?:
    | External$AccountSessionsCreateBodyComponentsAccountOnboarding
    | undefined;
  balances?: External$AccountSessionsCreateBodyComponentsBalances | undefined;
  documents?: External$AccountSessionsCreateBodyComponentsDocuments | undefined;
  financial_account?:
    | External$AccountSessionsCreateBodyComponentsFinancialAccount
    | undefined;
  financial_account_transactions?:
    | External$AccountSessionsCreateBodyComponentsFinancialAccountTransactions
    | undefined;
  issuing_card?:
    | External$AccountSessionsCreateBodyComponentsIssuingCard
    | undefined;
  issuing_cards_list?:
    | External$AccountSessionsCreateBodyComponentsIssuingCardsList
    | undefined;
  notification_banner?:
    | External$AccountSessionsCreateBodyComponentsNotificationBanner
    | undefined;
  payment_details?:
    | External$AccountSessionsCreateBodyComponentsPaymentDetails
    | undefined;
  payments?: External$AccountSessionsCreateBodyComponentsPayments | undefined;
  payouts?: External$AccountSessionsCreateBodyComponentsPayouts | undefined;
  payouts_list?:
    | External$AccountSessionsCreateBodyComponentsPayoutsList
    | undefined;
  tax_registrations?:
    | External$AccountSessionsCreateBodyComponentsTaxRegistrations
    | undefined;
  tax_settings?:
    | External$AccountSessionsCreateBodyComponentsTaxSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponents
 */
const SchemaIn$AccountSessionsCreateBodyComponents: z.ZodType<
  AccountSessionsCreateBodyComponents, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_management:
      Schemas$AccountSessionsCreateBodyComponentsAccountManagement.in.optional(),
    account_onboarding:
      Schemas$AccountSessionsCreateBodyComponentsAccountOnboarding.in.optional(),
    balances: Schemas$AccountSessionsCreateBodyComponentsBalances.in.optional(),
    documents:
      Schemas$AccountSessionsCreateBodyComponentsDocuments.in.optional(),
    financial_account:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccount.in.optional(),
    financial_account_transactions:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactions.in.optional(),
    issuing_card:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCard.in.optional(),
    issuing_cards_list:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardsList.in.optional(),
    notification_banner:
      Schemas$AccountSessionsCreateBodyComponentsNotificationBanner.in.optional(),
    payment_details:
      Schemas$AccountSessionsCreateBodyComponentsPaymentDetails.in.optional(),
    payments: Schemas$AccountSessionsCreateBodyComponentsPayments.in.optional(),
    payouts: Schemas$AccountSessionsCreateBodyComponentsPayouts.in.optional(),
    payouts_list:
      Schemas$AccountSessionsCreateBodyComponentsPayoutsList.in.optional(),
    tax_registrations:
      Schemas$AccountSessionsCreateBodyComponentsTaxRegistrations.in.optional(),
    tax_settings:
      Schemas$AccountSessionsCreateBodyComponentsTaxSettings.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponents
 */
const SchemaOut$AccountSessionsCreateBodyComponents: z.ZodType<
  External$AccountSessionsCreateBodyComponents, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponents // the object to be transformed
> = z
  .object({
    accountManagement:
      Schemas$AccountSessionsCreateBodyComponentsAccountManagement.out.optional(),
    accountOnboarding:
      Schemas$AccountSessionsCreateBodyComponentsAccountOnboarding.out.optional(),
    balances:
      Schemas$AccountSessionsCreateBodyComponentsBalances.out.optional(),
    documents:
      Schemas$AccountSessionsCreateBodyComponentsDocuments.out.optional(),
    financialAccount:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccount.out.optional(),
    financialAccountTransactions:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactions.out.optional(),
    issuingCard:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCard.out.optional(),
    issuingCardsList:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardsList.out.optional(),
    notificationBanner:
      Schemas$AccountSessionsCreateBodyComponentsNotificationBanner.out.optional(),
    paymentDetails:
      Schemas$AccountSessionsCreateBodyComponentsPaymentDetails.out.optional(),
    payments:
      Schemas$AccountSessionsCreateBodyComponentsPayments.out.optional(),
    payouts: Schemas$AccountSessionsCreateBodyComponentsPayouts.out.optional(),
    payoutsList:
      Schemas$AccountSessionsCreateBodyComponentsPayoutsList.out.optional(),
    taxRegistrations:
      Schemas$AccountSessionsCreateBodyComponentsTaxRegistrations.out.optional(),
    taxSettings:
      Schemas$AccountSessionsCreateBodyComponentsTaxSettings.out.optional(),
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

export const Schemas$AccountSessionsCreateBodyComponents = {
  in: SchemaIn$AccountSessionsCreateBodyComponents,
  out: SchemaOut$AccountSessionsCreateBodyComponents,
};
