import {
  AccountCreateBodySettingsBacsDebitPayments,
  External$AccountCreateBodySettingsBacsDebitPayments,
  Schemas$AccountCreateBodySettingsBacsDebitPayments,
} from "./account-create-body-settings-bacs-debit-payments";
import {
  AccountCreateBodySettingsBranding,
  External$AccountCreateBodySettingsBranding,
  Schemas$AccountCreateBodySettingsBranding,
} from "./account-create-body-settings-branding";
import {
  AccountCreateBodySettingsCardIssuing,
  External$AccountCreateBodySettingsCardIssuing,
  Schemas$AccountCreateBodySettingsCardIssuing,
} from "./account-create-body-settings-card-issuing";
import {
  AccountCreateBodySettingsCardPayments,
  External$AccountCreateBodySettingsCardPayments,
  Schemas$AccountCreateBodySettingsCardPayments,
} from "./account-create-body-settings-card-payments";
import {
  AccountCreateBodySettingsInvoices,
  External$AccountCreateBodySettingsInvoices,
  Schemas$AccountCreateBodySettingsInvoices,
} from "./account-create-body-settings-invoices";
import {
  AccountCreateBodySettingsPayments,
  External$AccountCreateBodySettingsPayments,
  Schemas$AccountCreateBodySettingsPayments,
} from "./account-create-body-settings-payments";
import {
  AccountCreateBodySettingsPayouts,
  External$AccountCreateBodySettingsPayouts,
  Schemas$AccountCreateBodySettingsPayouts,
} from "./account-create-body-settings-payouts";
import {
  AccountCreateBodySettingsTreasury,
  External$AccountCreateBodySettingsTreasury,
  Schemas$AccountCreateBodySettingsTreasury,
} from "./account-create-body-settings-treasury";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options for customizing how the account functions within Stripe.
 */
export type AccountCreateBodySettings = {
  bacsDebitPayments?: AccountCreateBodySettingsBacsDebitPayments | undefined;
  branding?: AccountCreateBodySettingsBranding | undefined;
  cardIssuing?: AccountCreateBodySettingsCardIssuing | undefined;
  cardPayments?: AccountCreateBodySettingsCardPayments | undefined;
  invoices?: AccountCreateBodySettingsInvoices | undefined;
  payments?: AccountCreateBodySettingsPayments | undefined;
  payouts?: AccountCreateBodySettingsPayouts | undefined;
  treasury?: AccountCreateBodySettingsTreasury | undefined;
};

/**
 * @internal
 * AccountCreateBodySettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettings = {
  bacs_debit_payments?:
    | External$AccountCreateBodySettingsBacsDebitPayments
    | undefined;
  branding?: External$AccountCreateBodySettingsBranding | undefined;
  card_issuing?: External$AccountCreateBodySettingsCardIssuing | undefined;
  card_payments?: External$AccountCreateBodySettingsCardPayments | undefined;
  invoices?: External$AccountCreateBodySettingsInvoices | undefined;
  payments?: External$AccountCreateBodySettingsPayments | undefined;
  payouts?: External$AccountCreateBodySettingsPayouts | undefined;
  treasury?: External$AccountCreateBodySettingsTreasury | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettings
 */
const SchemaIn$AccountCreateBodySettings: z.ZodType<
  AccountCreateBodySettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bacs_debit_payments:
      Schemas$AccountCreateBodySettingsBacsDebitPayments.in.optional(),
    branding: Schemas$AccountCreateBodySettingsBranding.in.optional(),
    card_issuing: Schemas$AccountCreateBodySettingsCardIssuing.in.optional(),
    card_payments: Schemas$AccountCreateBodySettingsCardPayments.in.optional(),
    invoices: Schemas$AccountCreateBodySettingsInvoices.in.optional(),
    payments: Schemas$AccountCreateBodySettingsPayments.in.optional(),
    payouts: Schemas$AccountCreateBodySettingsPayouts.in.optional(),
    treasury: Schemas$AccountCreateBodySettingsTreasury.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettings
 */
const SchemaOut$AccountCreateBodySettings: z.ZodType<
  External$AccountCreateBodySettings, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettings // the object to be transformed
> = z
  .object({
    bacsDebitPayments:
      Schemas$AccountCreateBodySettingsBacsDebitPayments.out.optional(),
    branding: Schemas$AccountCreateBodySettingsBranding.out.optional(),
    cardIssuing: Schemas$AccountCreateBodySettingsCardIssuing.out.optional(),
    cardPayments: Schemas$AccountCreateBodySettingsCardPayments.out.optional(),
    invoices: Schemas$AccountCreateBodySettingsInvoices.out.optional(),
    payments: Schemas$AccountCreateBodySettingsPayments.out.optional(),
    payouts: Schemas$AccountCreateBodySettingsPayouts.out.optional(),
    treasury: Schemas$AccountCreateBodySettingsTreasury.out.optional(),
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

export const Schemas$AccountCreateBodySettings = {
  in: SchemaIn$AccountCreateBodySettings,
  out: SchemaOut$AccountCreateBodySettings,
};
