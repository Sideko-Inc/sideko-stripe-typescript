import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeAchDebit
 */
export type SourceTypeAchDebit = {
  bankName?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  routingNumber?: string | null | undefined;
  type?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeAchDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeAchDebit = {
  bank_name?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  routing_number?: string | null | undefined;
  type?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeAchDebit
 */
const SchemaIn$SourceTypeAchDebit: z.ZodType<
  SourceTypeAchDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_name: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routing_number: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_name: "bankName",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routing_number: "routingNumber",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeAchDebit
 */
const SchemaOut$SourceTypeAchDebit: z.ZodType<
  External$SourceTypeAchDebit, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeAchDebit // the object to be transformed
> = z
  .object({
    bankName: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    routingNumber: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankName: "bank_name",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      routingNumber: "routing_number",
      type: "type",
    });
  });

export const Schemas$SourceTypeAchDebit = {
  in: SchemaIn$SourceTypeAchDebit,
  out: SchemaOut$SourceTypeAchDebit,
};
