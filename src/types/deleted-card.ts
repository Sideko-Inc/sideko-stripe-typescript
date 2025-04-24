import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedCard = {
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
  object: "card";
};

/**
 * @internal
 * DeletedCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedCard = {
  currency?: string | null | undefined;
  deleted: boolean;
  id: string;
  object: "card";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedCard
 */
const SchemaIn$DeletedCard: z.ZodType<
  DeletedCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string().nullable().optional(),
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["card"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedCard
 */
const SchemaOut$DeletedCard: z.ZodType<
  External$DeletedCard, // output type of this zod object
  z.ZodTypeDef,
  DeletedCard // the object to be transformed
> = z
  .object({
    currency: z.string().nullable().optional(),
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["card"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedCard = {
  in: SchemaIn$DeletedCard,
  out: SchemaOut$DeletedCard,
};
