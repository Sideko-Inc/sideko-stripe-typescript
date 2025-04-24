import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeSepaDebit
 */
export type SourceTypeSepaDebit = {
  bankCode?: string | null | undefined;
  branchCode?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandateReference?: string | null | undefined;
  mandateUrl?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeSepaDebit = {
  bank_code?: string | null | undefined;
  branch_code?: string | null | undefined;
  country?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  mandate_reference?: string | null | undefined;
  mandate_url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeSepaDebit
 */
const SchemaIn$SourceTypeSepaDebit: z.ZodType<
  SourceTypeSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_code: z.string().nullable().optional(),
    branch_code: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandate_reference: z.string().nullable().optional(),
    mandate_url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_code: "bankCode",
      branch_code: "branchCode",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      mandate_reference: "mandateReference",
      mandate_url: "mandateUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeSepaDebit
 */
const SchemaOut$SourceTypeSepaDebit: z.ZodType<
  External$SourceTypeSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeSepaDebit // the object to be transformed
> = z
  .object({
    bankCode: z.string().nullable().optional(),
    branchCode: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    mandateReference: z.string().nullable().optional(),
    mandateUrl: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankCode: "bank_code",
      branchCode: "branch_code",
      country: "country",
      fingerprint: "fingerprint",
      last4: "last4",
      mandateReference: "mandate_reference",
      mandateUrl: "mandate_url",
    });
  });

export const Schemas$SourceTypeSepaDebit = {
  in: SchemaIn$SourceTypeSepaDebit,
  out: SchemaOut$SourceTypeSepaDebit,
};
