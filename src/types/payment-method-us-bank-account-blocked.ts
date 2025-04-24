import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodUsBankAccountBlocked = {
  /**
   * The ACH network code that resulted in this block.
   */
  networkCode?:
    | (
        | "R02"
        | "R03"
        | "R04"
        | "R05"
        | "R07"
        | "R08"
        | "R10"
        | "R11"
        | "R16"
        | "R20"
        | "R29"
        | "R31"
      )
    | null
    | undefined;
  /**
   * The reason why this PaymentMethod's fingerprint has been blocked
   */
  reason?:
    | (
        | "bank_account_closed"
        | "bank_account_frozen"
        | "bank_account_invalid_details"
        | "bank_account_restricted"
        | "bank_account_unusable"
        | "debit_not_authorized"
      )
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodUsBankAccountBlocked without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUsBankAccountBlocked = {
  network_code?:
    | (
        | "R02"
        | "R03"
        | "R04"
        | "R05"
        | "R07"
        | "R08"
        | "R10"
        | "R11"
        | "R16"
        | "R20"
        | "R29"
        | "R31"
      )
    | null
    | undefined;
  reason?:
    | (
        | "bank_account_closed"
        | "bank_account_frozen"
        | "bank_account_invalid_details"
        | "bank_account_restricted"
        | "bank_account_unusable"
        | "debit_not_authorized"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUsBankAccountBlocked
 */
const SchemaIn$PaymentMethodUsBankAccountBlocked: z.ZodType<
  PaymentMethodUsBankAccountBlocked, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network_code: z
      .enum([
        "R02",
        "R03",
        "R04",
        "R05",
        "R07",
        "R08",
        "R10",
        "R11",
        "R16",
        "R20",
        "R29",
        "R31",
      ])
      .nullable()
      .optional(),
    reason: z
      .enum([
        "bank_account_closed",
        "bank_account_frozen",
        "bank_account_invalid_details",
        "bank_account_restricted",
        "bank_account_unusable",
        "debit_not_authorized",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network_code: "networkCode",
      reason: "reason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUsBankAccountBlocked
 */
const SchemaOut$PaymentMethodUsBankAccountBlocked: z.ZodType<
  External$PaymentMethodUsBankAccountBlocked, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUsBankAccountBlocked // the object to be transformed
> = z
  .object({
    networkCode: z
      .enum([
        "R02",
        "R03",
        "R04",
        "R05",
        "R07",
        "R08",
        "R10",
        "R11",
        "R16",
        "R20",
        "R29",
        "R31",
      ])
      .nullable()
      .optional(),
    reason: z
      .enum([
        "bank_account_closed",
        "bank_account_frozen",
        "bank_account_invalid_details",
        "bank_account_restricted",
        "bank_account_unusable",
        "debit_not_authorized",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      networkCode: "network_code",
      reason: "reason",
    });
  });

export const Schemas$PaymentMethodUsBankAccountBlocked = {
  in: SchemaIn$PaymentMethodUsBankAccountBlocked,
  out: SchemaOut$PaymentMethodUsBankAccountBlocked,
};
