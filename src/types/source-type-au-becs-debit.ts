import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeAuBecsDebit
 */
export type SourceTypeAuBecsDebit = {
  bsbNumber?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeAuBecsDebit = {
  bsb_number?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeAuBecsDebit
 */
const SchemaIn$SourceTypeAuBecsDebit: z.ZodType<
  SourceTypeAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bsb_number: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsb_number: "bsbNumber",
      fingerprint: "fingerprint",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeAuBecsDebit
 */
const SchemaOut$SourceTypeAuBecsDebit: z.ZodType<
  External$SourceTypeAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeAuBecsDebit // the object to be transformed
> = z
  .object({
    bsbNumber: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bsbNumber: "bsb_number",
      fingerprint: "fingerprint",
      last4: "last4",
    });
  });

export const Schemas$SourceTypeAuBecsDebit = {
  in: SchemaIn$SourceTypeAuBecsDebit,
  out: SchemaOut$SourceTypeAuBecsDebit,
};
