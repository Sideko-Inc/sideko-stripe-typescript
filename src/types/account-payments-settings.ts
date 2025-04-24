import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountPaymentsSettings = {
  /**
   * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
   */
  statementDescriptorKana?: string | null | undefined;
  /**
   * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
   */
  statementDescriptorKanji?: string | null | undefined;
};

/**
 * @internal
 * AccountPaymentsSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPaymentsSettings = {
  statement_descriptor?: string | null | undefined;
  statement_descriptor_kana?: string | null | undefined;
  statement_descriptor_kanji?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPaymentsSettings
 */
const SchemaIn$AccountPaymentsSettings: z.ZodType<
  AccountPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    statement_descriptor: z.string().nullable().optional(),
    statement_descriptor_kana: z.string().nullable().optional(),
    statement_descriptor_kanji: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      statement_descriptor: "statementDescriptor",
      statement_descriptor_kana: "statementDescriptorKana",
      statement_descriptor_kanji: "statementDescriptorKanji",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPaymentsSettings
 */
const SchemaOut$AccountPaymentsSettings: z.ZodType<
  External$AccountPaymentsSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountPaymentsSettings // the object to be transformed
> = z
  .object({
    statementDescriptor: z.string().nullable().optional(),
    statementDescriptorKana: z.string().nullable().optional(),
    statementDescriptorKanji: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      statementDescriptor: "statement_descriptor",
      statementDescriptorKana: "statement_descriptor_kana",
      statementDescriptorKanji: "statement_descriptor_kanji",
    });
  });

export const Schemas$AccountPaymentsSettings = {
  in: SchemaIn$AccountPaymentsSettings,
  out: SchemaOut$AccountPaymentsSettings,
};
