import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeSofort
 */
export type SourceTypeSofort = {
  bankCode?: string | null | undefined;
  bankName?: string | null | undefined;
  bic?: string | null | undefined;
  country?: string | null | undefined;
  ibanLast4?: string | null | undefined;
  preferredLanguage?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeSofort = {
  bank_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  bic?: string | null | undefined;
  country?: string | null | undefined;
  iban_last4?: string | null | undefined;
  preferred_language?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeSofort
 */
const SchemaIn$SourceTypeSofort: z.ZodType<
  SourceTypeSofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    iban_last4: z.string().nullable().optional(),
    preferred_language: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      bank_name: "bankName",
      bic: "bic",
      country: "country",
      iban_last4: "ibanLast4",
      preferred_language: "preferredLanguage",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeSofort
 */
const SchemaOut$SourceTypeSofort: z.ZodType<
  External$SourceTypeSofort, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeSofort // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    bic: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    ibanLast4: z.string().nullable().optional(),
    preferredLanguage: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      bankName: "bank_name",
      bic: "bic",
      country: "country",
      ibanLast4: "iban_last4",
      preferredLanguage: "preferred_language",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeSofort = {
  in: SchemaIn$SourceTypeSofort,
  out: SchemaOut$SourceTypeSofort,
};
