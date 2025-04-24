import {
  AccountBacsDebitPaymentsSettings,
  External$AccountBacsDebitPaymentsSettings,
  Schemas$AccountBacsDebitPaymentsSettings,
} from "./account-bacs-debit-payments-settings";
import {
  AccountBrandingSettings,
  External$AccountBrandingSettings,
  Schemas$AccountBrandingSettings,
} from "./account-branding-settings";
import {
  AccountCardIssuingSettings,
  External$AccountCardIssuingSettings,
  Schemas$AccountCardIssuingSettings,
} from "./account-card-issuing-settings";
import {
  AccountCardPaymentsSettings,
  External$AccountCardPaymentsSettings,
  Schemas$AccountCardPaymentsSettings,
} from "./account-card-payments-settings";
import {
  AccountDashboardSettings,
  External$AccountDashboardSettings,
  Schemas$AccountDashboardSettings,
} from "./account-dashboard-settings";
import {
  AccountInvoicesSettings,
  External$AccountInvoicesSettings,
  Schemas$AccountInvoicesSettings,
} from "./account-invoices-settings";
import {
  AccountPaymentsSettings,
  External$AccountPaymentsSettings,
  Schemas$AccountPaymentsSettings,
} from "./account-payments-settings";
import {
  AccountPayoutSettings,
  External$AccountPayoutSettings,
  Schemas$AccountPayoutSettings,
} from "./account-payout-settings";
import {
  AccountSepaDebitPaymentsSettings,
  External$AccountSepaDebitPaymentsSettings,
  Schemas$AccountSepaDebitPaymentsSettings,
} from "./account-sepa-debit-payments-settings";
import {
  AccountTreasurySettings,
  External$AccountTreasurySettings,
  Schemas$AccountTreasurySettings,
} from "./account-treasury-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountSettings = {
  bacsDebitPayments?: AccountBacsDebitPaymentsSettings | undefined;
  branding: AccountBrandingSettings;
  cardIssuing?: AccountCardIssuingSettings | undefined;
  cardPayments: AccountCardPaymentsSettings;
  dashboard: AccountDashboardSettings;
  invoices?: AccountInvoicesSettings | undefined;
  payments: AccountPaymentsSettings;
  payouts?: AccountPayoutSettings | undefined;
  sepaDebitPayments?: AccountSepaDebitPaymentsSettings | undefined;
  treasury?: AccountTreasurySettings | undefined;
};

/**
 * @internal
 * AccountSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSettings = {
  bacs_debit_payments?: External$AccountBacsDebitPaymentsSettings | undefined;
  branding: External$AccountBrandingSettings;
  card_issuing?: External$AccountCardIssuingSettings | undefined;
  card_payments: External$AccountCardPaymentsSettings;
  dashboard: External$AccountDashboardSettings;
  invoices?: External$AccountInvoicesSettings | undefined;
  payments: External$AccountPaymentsSettings;
  payouts?: External$AccountPayoutSettings | undefined;
  sepa_debit_payments?: External$AccountSepaDebitPaymentsSettings | undefined;
  treasury?: External$AccountTreasurySettings | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSettings
 */
const SchemaIn$AccountSettings: z.ZodType<
  AccountSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bacs_debit_payments: Schemas$AccountBacsDebitPaymentsSettings.in.optional(),
    branding: z.lazy(() => Schemas$AccountBrandingSettings.in),
    card_issuing: Schemas$AccountCardIssuingSettings.in.optional(),
    card_payments: Schemas$AccountCardPaymentsSettings.in,
    dashboard: Schemas$AccountDashboardSettings.in,
    invoices: z.lazy(() => Schemas$AccountInvoicesSettings.in.optional()),
    payments: Schemas$AccountPaymentsSettings.in,
    payouts: Schemas$AccountPayoutSettings.in.optional(),
    sepa_debit_payments: Schemas$AccountSepaDebitPaymentsSettings.in.optional(),
    treasury: Schemas$AccountTreasurySettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bacs_debit_payments: "bacsDebitPayments",
      branding: "branding",
      card_issuing: "cardIssuing",
      card_payments: "cardPayments",
      dashboard: "dashboard",
      invoices: "invoices",
      payments: "payments",
      payouts: "payouts",
      sepa_debit_payments: "sepaDebitPayments",
      treasury: "treasury",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSettings
 */
const SchemaOut$AccountSettings: z.ZodType<
  External$AccountSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountSettings // the object to be transformed
> = z
  .object({
    bacsDebitPayments: Schemas$AccountBacsDebitPaymentsSettings.out.optional(),
    branding: z.lazy(() => Schemas$AccountBrandingSettings.out),
    cardIssuing: Schemas$AccountCardIssuingSettings.out.optional(),
    cardPayments: Schemas$AccountCardPaymentsSettings.out,
    dashboard: Schemas$AccountDashboardSettings.out,
    invoices: z.lazy(() => Schemas$AccountInvoicesSettings.out.optional()),
    payments: Schemas$AccountPaymentsSettings.out,
    payouts: Schemas$AccountPayoutSettings.out.optional(),
    sepaDebitPayments: Schemas$AccountSepaDebitPaymentsSettings.out.optional(),
    treasury: Schemas$AccountTreasurySettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bacsDebitPayments: "bacs_debit_payments",
      branding: "branding",
      cardIssuing: "card_issuing",
      cardPayments: "card_payments",
      dashboard: "dashboard",
      invoices: "invoices",
      payments: "payments",
      payouts: "payouts",
      sepaDebitPayments: "sepa_debit_payments",
      treasury: "treasury",
    });
  });

export const Schemas$AccountSettings = {
  in: SchemaIn$AccountSettings,
  out: SchemaOut$AccountSettings,
};
