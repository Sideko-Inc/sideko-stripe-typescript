import {
  AccountDeclineChargeOn,
  External$AccountDeclineChargeOn,
  Schemas$AccountDeclineChargeOn,
} from "./account-decline-charge-on";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountCardPaymentsSettings = {
  declineOn?: AccountDeclineChargeOn | undefined;
  /**
   * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefix?: string | null | undefined;
  /**
   * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefixKana?: string | null | undefined;
  /**
   * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
   */
  statementDescriptorPrefixKanji?: string | null | undefined;
};

/**
 * @internal
 * AccountCardPaymentsSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCardPaymentsSettings = {
  decline_on?: External$AccountDeclineChargeOn | undefined;
  statement_descriptor_prefix?: string | null | undefined;
  statement_descriptor_prefix_kana?: string | null | undefined;
  statement_descriptor_prefix_kanji?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCardPaymentsSettings
 */
const SchemaIn$AccountCardPaymentsSettings: z.ZodType<
  AccountCardPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    decline_on: Schemas$AccountDeclineChargeOn.in.optional(),
    statement_descriptor_prefix: z.string().nullable().optional(),
    statement_descriptor_prefix_kana: z.string().nullable().optional(),
    statement_descriptor_prefix_kanji: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCardPaymentsSettings
 */
const SchemaOut$AccountCardPaymentsSettings: z.ZodType<
  External$AccountCardPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountCardPaymentsSettings // the object to be transformed
> = z
  .object({
    declineOn: Schemas$AccountDeclineChargeOn.out.optional(),
    statementDescriptorPrefix: z.string().nullable().optional(),
    statementDescriptorPrefixKana: z.string().nullable().optional(),
    statementDescriptorPrefixKanji: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      declineOn: "decline_on",
      statementDescriptorPrefix: "statement_descriptor_prefix",
      statementDescriptorPrefixKana: "statement_descriptor_prefix_kana",
      statementDescriptorPrefixKanji: "statement_descriptor_prefix_kanji",
    });
  });

export const Schemas$AccountCardPaymentsSettings = {
  in: SchemaIn$AccountCardPaymentsSettings,
  out: SchemaOut$AccountCardPaymentsSettings,
};
