import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ReserveTransaction = {
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "reserve_transaction";
};

/**
 * @internal
 * ReserveTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReserveTransaction = {
  amount: number;
  currency: string;
  description?: string | null | undefined;
  id: string;
  object: "reserve_transaction";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReserveTransaction
 */
const SchemaIn$ReserveTransaction: z.ZodType<
  ReserveTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    id: z.string(),
    object: z.enum(["reserve_transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReserveTransaction
 */
const SchemaOut$ReserveTransaction: z.ZodType<
  External$ReserveTransaction, // output type of this zod object
  z.ZodTypeDef,
  ReserveTransaction // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    id: z.string(),
    object: z.enum(["reserve_transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      id: "id",
      object: "object",
    });
  });

export const Schemas$ReserveTransaction = {
  in: SchemaIn$ReserveTransaction,
  out: SchemaOut$ReserveTransaction,
};
