import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeAcssDebit
 */
export type SourceTypeAcssDebit = {
  bankAddressCity?: string | null | undefined;
  bankAddressLine1?: string | null | undefined;
  bankAddressLine2?: string | null | undefined;
  bankAddressPostalCode?: string | null | undefined;
  bankName?: string | null | undefined;
  category?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  routingNumber?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeAcssDebit = {
  bank_address_city?: string | null | undefined;
  bank_address_line_1?: string | null | undefined;
  bank_address_line_2?: string | null | undefined;
  bank_address_postal_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  category?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  routing_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeAcssDebit
 */
const SchemaIn$SourceTypeAcssDebit: z.ZodType<
  SourceTypeAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_address_city: z.string().nullable().optional(),
    bank_address_line_1: z.string().nullable().optional(),
    bank_address_line_2: z.string().nullable().optional(),
    bank_address_postal_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    category: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_address_city: "bankAddressCity",
      bank_address_line_1: "bankAddressLine1",
      bank_address_line_2: "bankAddressLine2",
      bank_address_postal_code: "bankAddressPostalCode",
      bank_name: "bankName",
      category: "category",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeAcssDebit
 */
const SchemaOut$SourceTypeAcssDebit: z.ZodType<
  External$SourceTypeAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeAcssDebit // the object to be transformed
> = z
  .object({
    bankAddressCity: z.string().nullable().optional(),
    bankAddressLine1: z.string().nullable().optional(),
    bankAddressLine2: z.string().nullable().optional(),
    bankAddressPostalCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    category: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAddressCity: "bank_address_city",
      bankAddressLine1: "bank_address_line_1",
      bankAddressLine2: "bank_address_line_2",
      bankAddressPostalCode: "bank_address_postal_code",
      bankName: "bank_name",
      category: "category",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routingNumber: "routing_number",
    });
  });

export const Schemas$SourceTypeAcssDebit = {
  in: SchemaIn$SourceTypeAcssDebit,
  out: SchemaOut$SourceTypeAcssDebit,
};
