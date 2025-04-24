import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeBancontact
 */
export type SourceTypeBancontact = {
  bankCode?: string | null | undefined;
  bankName?: string | null | undefined;
  bic?: string | null | undefined;
  ibanLast4?: string | null | undefined;
  preferredLanguage?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeBancontact = {
  bank_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  bic?: string | null | undefined;
  iban_last4?: string | null | undefined;
  preferred_language?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeBancontact
 */
const SchemaIn$SourceTypeBancontact: z.ZodType<
  SourceTypeBancontact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    iban_last4: z.string().nullable().optional(),
    preferred_language: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      bank_name: "bankName",
      bic: "bic",
      iban_last4: "ibanLast4",
      preferred_language: "preferredLanguage",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeBancontact
 */
const SchemaOut$SourceTypeBancontact: z.ZodType<
  External$SourceTypeBancontact, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeBancontact // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    ibanLast4: z.string().nullable().optional(),
    preferredLanguage: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      bankName: "bank_name",
      bic: "bic",
      ibanLast4: "iban_last4",
      preferredLanguage: "preferred_language",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeBancontact = {
  in: SchemaIn$SourceTypeBancontact,
  out: SchemaOut$SourceTypeBancontact,
};
