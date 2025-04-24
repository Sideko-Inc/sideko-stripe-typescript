import {
  AccountUpdateBodySettingsCardPaymentsDeclineOn,
  External$AccountUpdateBodySettingsCardPaymentsDeclineOn,
  Schemas$AccountUpdateBodySettingsCardPaymentsDeclineOn,
} from "./account-update-body-settings-card-payments-decline-on";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsCardPayments
 */
export type AccountUpdateBodySettingsCardPayments = {
  declineOn?: AccountUpdateBodySettingsCardPaymentsDeclineOn | undefined;
  statementDescriptorPrefix?: string | undefined;
  statementDescriptorPrefixKana?: (string | string) | undefined;
  statementDescriptorPrefixKanji?: (string | string) | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsCardPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsCardPayments = {
  decline_on?:
    | External$AccountUpdateBodySettingsCardPaymentsDeclineOn
    | undefined;
  statement_descriptor_prefix?: string | undefined;
  statement_descriptor_prefix_kana?: (string | string) | undefined;
  statement_descriptor_prefix_kanji?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsCardPayments
 */
const SchemaIn$AccountUpdateBodySettingsCardPayments: z.ZodType<
  AccountUpdateBodySettingsCardPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    decline_on:
      Schemas$AccountUpdateBodySettingsCardPaymentsDeclineOn.in.optional(),
    statement_descriptor_prefix: z.string().optional(),
    statement_descriptor_prefix_kana: z
      .union([z.string(), z.string()])
      .optional(),
    statement_descriptor_prefix_kanji: z
      .union([z.string(), z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      decline_on: "declineOn",
      statement_descriptor_prefix: "statementDescriptorPrefix",
      statement_descriptor_prefix_kana: "statementDescriptorPrefixKana",
      statement_descriptor_prefix_kanji: "statementDescriptorPrefixKanji",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsCardPayments
 */
const SchemaOut$AccountUpdateBodySettingsCardPayments: z.ZodType<
  External$AccountUpdateBodySettingsCardPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsCardPayments // the object to be transformed
> = z
  .object({
    declineOn:
      Schemas$AccountUpdateBodySettingsCardPaymentsDeclineOn.out.optional(),
    statementDescriptorPrefix: z.string().optional(),
    statementDescriptorPrefixKana: z.union([z.string(), z.string()]).optional(),
    statementDescriptorPrefixKanji: z
      .union([z.string(), z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      declineOn: "decline_on",
      statementDescriptorPrefix: "statement_descriptor_prefix",
      statementDescriptorPrefixKana: "statement_descriptor_prefix_kana",
      statementDescriptorPrefixKanji: "statement_descriptor_prefix_kanji",
    });
  });

export const Schemas$AccountUpdateBodySettingsCardPayments = {
  in: SchemaIn$AccountUpdateBodySettingsCardPayments,
  out: SchemaOut$AccountUpdateBodySettingsCardPayments,
};
