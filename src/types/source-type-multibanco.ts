import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeMultibanco
 */
export type SourceTypeMultibanco = {
  entity?: string | null | undefined;
  reference?: string | null | undefined;
  refundAccountHolderAddressCity?: string | null | undefined;
  refundAccountHolderAddressCountry?: string | null | undefined;
  refundAccountHolderAddressLine1?: string | null | undefined;
  refundAccountHolderAddressLine2?: string | null | undefined;
  refundAccountHolderAddressPostalCode?: string | null | undefined;
  refundAccountHolderAddressState?: string | null | undefined;
  refundAccountHolderName?: string | null | undefined;
  refundIban?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeMultibanco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeMultibanco = {
  entity?: string | null | undefined;
  reference?: string | null | undefined;
  refund_account_holder_address_city?: string | null | undefined;
  refund_account_holder_address_country?: string | null | undefined;
  refund_account_holder_address_line1?: string | null | undefined;
  refund_account_holder_address_line2?: string | null | undefined;
  refund_account_holder_address_postal_code?: string | null | undefined;
  refund_account_holder_address_state?: string | null | undefined;
  refund_account_holder_name?: string | null | undefined;
  refund_iban?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeMultibanco
 */
const SchemaIn$SourceTypeMultibanco: z.ZodType<
  SourceTypeMultibanco, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    entity: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    refund_account_holder_address_city: z.string().nullable().optional(),
    refund_account_holder_address_country: z.string().nullable().optional(),
    refund_account_holder_address_line1: z.string().nullable().optional(),
    refund_account_holder_address_line2: z.string().nullable().optional(),
    refund_account_holder_address_postal_code: z.string().nullable().optional(),
    refund_account_holder_address_state: z.string().nullable().optional(),
    refund_account_holder_name: z.string().nullable().optional(),
    refund_iban: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      reference: "reference",
      refund_account_holder_address_city: "refundAccountHolderAddressCity",
      refund_account_holder_address_country:
        "refundAccountHolderAddressCountry",
      refund_account_holder_address_line1: "refundAccountHolderAddressLine1",
      refund_account_holder_address_line2: "refundAccountHolderAddressLine2",
      refund_account_holder_address_postal_code:
        "refundAccountHolderAddressPostalCode",
      refund_account_holder_address_state: "refundAccountHolderAddressState",
      refund_account_holder_name: "refundAccountHolderName",
      refund_iban: "refundIban",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeMultibanco
 */
const SchemaOut$SourceTypeMultibanco: z.ZodType<
  External$SourceTypeMultibanco, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeMultibanco // the object to be transformed
> = z
  .object({
    entity: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    refundAccountHolderAddressCity: z.string().nullable().optional(),
    refundAccountHolderAddressCountry: z.string().nullable().optional(),
    refundAccountHolderAddressLine1: z.string().nullable().optional(),
    refundAccountHolderAddressLine2: z.string().nullable().optional(),
    refundAccountHolderAddressPostalCode: z.string().nullable().optional(),
    refundAccountHolderAddressState: z.string().nullable().optional(),
    refundAccountHolderName: z.string().nullable().optional(),
    refundIban: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      reference: "reference",
      refundAccountHolderAddressCity: "refund_account_holder_address_city",
      refundAccountHolderAddressCountry:
        "refund_account_holder_address_country",
      refundAccountHolderAddressLine1: "refund_account_holder_address_line1",
      refundAccountHolderAddressLine2: "refund_account_holder_address_line2",
      refundAccountHolderAddressPostalCode:
        "refund_account_holder_address_postal_code",
      refundAccountHolderAddressState: "refund_account_holder_address_state",
      refundAccountHolderName: "refund_account_holder_name",
      refundIban: "refund_iban",
    });
  });

export const Schemas$SourceTypeMultibanco = {
  in: SchemaIn$SourceTypeMultibanco,
  out: SchemaOut$SourceTypeMultibanco,
};
