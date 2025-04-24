import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsPayments
 */
export type AccountCreateBodySettingsPayments = {
  statementDescriptor?: string | undefined;
  statementDescriptorKana?: string | undefined;
  statementDescriptorKanji?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsPayments = {
  statement_descriptor?: string | undefined;
  statement_descriptor_kana?: string | undefined;
  statement_descriptor_kanji?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsPayments
 */
const SchemaIn$AccountCreateBodySettingsPayments: z.ZodType<
  AccountCreateBodySettingsPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    statement_descriptor: z.string().optional(),
    statement_descriptor_kana: z.string().optional(),
    statement_descriptor_kanji: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsPayments
 */
const SchemaOut$AccountCreateBodySettingsPayments: z.ZodType<
  External$AccountCreateBodySettingsPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsPayments // the object to be transformed
> = z
  .object({
    statementDescriptor: z.string().optional(),
    statementDescriptorKana: z.string().optional(),
    statementDescriptorKanji: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      statementDescriptor: "statement_descriptor",
      statementDescriptorKana: "statement_descriptor_kana",
      statementDescriptorKanji: "statement_descriptor_kanji",
    });
  });

export const Schemas$AccountCreateBodySettingsPayments = {
  in: SchemaIn$AccountCreateBodySettingsPayments,
  out: SchemaOut$AccountCreateBodySettingsPayments,
};
