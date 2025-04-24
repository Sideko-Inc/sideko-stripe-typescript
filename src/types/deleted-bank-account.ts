import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedBankAccount = {
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
   */
  currency?: string | null | undefined;
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "bank_account";
};

/**
 * @internal
 * DeletedBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedBankAccount = {
  currency?: string | null | undefined;
  deleted: boolean;
  id: string;
  object: "bank_account";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedBankAccount
 */
const SchemaIn$DeletedBankAccount: z.ZodType<
  DeletedBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string().nullable().optional(),
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["bank_account"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedBankAccount
 */
const SchemaOut$DeletedBankAccount: z.ZodType<
  External$DeletedBankAccount, // output type of this zod object
  z.ZodTypeDef,
  DeletedBankAccount // the object to be transformed
> = z
  .object({
    currency: z.string().nullable().optional(),
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["bank_account"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedBankAccount = {
  in: SchemaIn$DeletedBankAccount,
  out: SchemaOut$DeletedBankAccount,
};
