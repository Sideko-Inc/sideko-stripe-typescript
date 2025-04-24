import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Describes an owner of an account.
 */
export type FinancialConnectionsAccountOwner = {
  /**
   * The email address of the owner.
   */
  email?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The full name of the owner.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "financial_connections.account_owner";
  /**
   * The ownership object that this owner belongs to.
   */
  ownership: string;
  /**
   * The raw phone number of the owner.
   */
  phone?: string | null | undefined;
  /**
   * The raw physical address of the owner.
   */
  rawAddress?: string | null | undefined;
  /**
   * The timestamp of the refresh that updated this owner.
   */
  refreshedAt?: number | null | undefined;
};

/**
 * @internal
 * FinancialConnectionsAccountOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountOwner = {
  email?: string | null | undefined;
  id: string;
  name: string;
  object: "financial_connections.account_owner";
  ownership: string;
  phone?: string | null | undefined;
  raw_address?: string | null | undefined;
  refreshed_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountOwner
 */
const SchemaIn$FinancialConnectionsAccountOwner: z.ZodType<
  FinancialConnectionsAccountOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string().nullable().optional(),
    id: z.string(),
    name: z.string(),
    object: z.enum(["financial_connections.account_owner"]),
    ownership: z.string(),
    phone: z.string().nullable().optional(),
    raw_address: z.string().nullable().optional(),
    refreshed_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      id: "id",
      name: "name",
      object: "object",
      ownership: "ownership",
      phone: "phone",
      raw_address: "rawAddress",
      refreshed_at: "refreshedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountOwner
 */
const SchemaOut$FinancialConnectionsAccountOwner: z.ZodType<
  External$FinancialConnectionsAccountOwner, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountOwner // the object to be transformed
> = z
  .object({
    email: z.string().nullable().optional(),
    id: z.string(),
    name: z.string(),
    object: z.enum(["financial_connections.account_owner"]),
    ownership: z.string(),
    phone: z.string().nullable().optional(),
    rawAddress: z.string().nullable().optional(),
    refreshedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      id: "id",
      name: "name",
      object: "object",
      ownership: "ownership",
      phone: "phone",
      rawAddress: "raw_address",
      refreshedAt: "refreshed_at",
    });
  });

export const Schemas$FinancialConnectionsAccountOwner = {
  in: SchemaIn$FinancialConnectionsAccountOwner,
  out: SchemaOut$FinancialConnectionsAccountOwner,
};
