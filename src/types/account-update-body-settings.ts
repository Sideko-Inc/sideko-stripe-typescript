import {
  AccountUpdateBodySettingsBacsDebitPayments,
  External$AccountUpdateBodySettingsBacsDebitPayments,
  Schemas$AccountUpdateBodySettingsBacsDebitPayments,
} from "./account-update-body-settings-bacs-debit-payments";
import {
  AccountUpdateBodySettingsBranding,
  External$AccountUpdateBodySettingsBranding,
  Schemas$AccountUpdateBodySettingsBranding,
} from "./account-update-body-settings-branding";
import {
  AccountUpdateBodySettingsCardIssuing,
  External$AccountUpdateBodySettingsCardIssuing,
  Schemas$AccountUpdateBodySettingsCardIssuing,
} from "./account-update-body-settings-card-issuing";
import {
  AccountUpdateBodySettingsCardPayments,
  External$AccountUpdateBodySettingsCardPayments,
  Schemas$AccountUpdateBodySettingsCardPayments,
} from "./account-update-body-settings-card-payments";
import {
  AccountUpdateBodySettingsInvoices,
  External$AccountUpdateBodySettingsInvoices,
  Schemas$AccountUpdateBodySettingsInvoices,
} from "./account-update-body-settings-invoices";
import {
  AccountUpdateBodySettingsPayments,
  External$AccountUpdateBodySettingsPayments,
  Schemas$AccountUpdateBodySettingsPayments,
} from "./account-update-body-settings-payments";
import {
  AccountUpdateBodySettingsPayouts,
  External$AccountUpdateBodySettingsPayouts,
  Schemas$AccountUpdateBodySettingsPayouts,
} from "./account-update-body-settings-payouts";
import {
  AccountUpdateBodySettingsTreasury,
  External$AccountUpdateBodySettingsTreasury,
  Schemas$AccountUpdateBodySettingsTreasury,
} from "./account-update-body-settings-treasury";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options for customizing how the account functions within Stripe.
 */
export type AccountUpdateBodySettings = {
  bacsDebitPayments?: AccountUpdateBodySettingsBacsDebitPayments | undefined;
  branding?: AccountUpdateBodySettingsBranding | undefined;
  cardIssuing?: AccountUpdateBodySettingsCardIssuing | undefined;
  cardPayments?: AccountUpdateBodySettingsCardPayments | undefined;
  invoices?: AccountUpdateBodySettingsInvoices | undefined;
  payments?: AccountUpdateBodySettingsPayments | undefined;
  payouts?: AccountUpdateBodySettingsPayouts | undefined;
  treasury?: AccountUpdateBodySettingsTreasury | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettings = {
  bacs_debit_payments?:
    | External$AccountUpdateBodySettingsBacsDebitPayments
    | undefined;
  branding?: External$AccountUpdateBodySettingsBranding | undefined;
  card_issuing?: External$AccountUpdateBodySettingsCardIssuing | undefined;
  card_payments?: External$AccountUpdateBodySettingsCardPayments | undefined;
  invoices?: External$AccountUpdateBodySettingsInvoices | undefined;
  payments?: External$AccountUpdateBodySettingsPayments | undefined;
  payouts?: External$AccountUpdateBodySettingsPayouts | undefined;
  treasury?: External$AccountUpdateBodySettingsTreasury | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettings
 */
const SchemaIn$AccountUpdateBodySettings: z.ZodType<
  AccountUpdateBodySettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bacs_debit_payments:
      Schemas$AccountUpdateBodySettingsBacsDebitPayments.in.optional(),
    branding: Schemas$AccountUpdateBodySettingsBranding.in.optional(),
    card_issuing: Schemas$AccountUpdateBodySettingsCardIssuing.in.optional(),
    card_payments: Schemas$AccountUpdateBodySettingsCardPayments.in.optional(),
    invoices: Schemas$AccountUpdateBodySettingsInvoices.in.optional(),
    payments: Schemas$AccountUpdateBodySettingsPayments.in.optional(),
    payouts: Schemas$AccountUpdateBodySettingsPayouts.in.optional(),
    treasury: Schemas$AccountUpdateBodySettingsTreasury.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bacs_debit_payments: "bacsDebitPayments",
      branding: "branding",
      card_issuing: "cardIssuing",
      card_payments: "cardPayments",
      invoices: "invoices",
      payments: "payments",
      payouts: "payouts",
      treasury: "treasury",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettings
 */
const SchemaOut$AccountUpdateBodySettings: z.ZodType<
  External$AccountUpdateBodySettings, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettings // the object to be transformed
> = z
  .object({
    bacsDebitPayments:
      Schemas$AccountUpdateBodySettingsBacsDebitPayments.out.optional(),
    branding: Schemas$AccountUpdateBodySettingsBranding.out.optional(),
    cardIssuing: Schemas$AccountUpdateBodySettingsCardIssuing.out.optional(),
    cardPayments: Schemas$AccountUpdateBodySettingsCardPayments.out.optional(),
    invoices: Schemas$AccountUpdateBodySettingsInvoices.out.optional(),
    payments: Schemas$AccountUpdateBodySettingsPayments.out.optional(),
    payouts: Schemas$AccountUpdateBodySettingsPayouts.out.optional(),
    treasury: Schemas$AccountUpdateBodySettingsTreasury.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bacsDebitPayments: "bacs_debit_payments",
      branding: "branding",
      cardIssuing: "card_issuing",
      cardPayments: "card_payments",
      invoices: "invoices",
      payments: "payments",
      payouts: "payouts",
      treasury: "treasury",
    });
  });

export const Schemas$AccountUpdateBodySettings = {
  in: SchemaIn$AccountUpdateBodySettings,
  out: SchemaOut$AccountUpdateBodySettings,
};
