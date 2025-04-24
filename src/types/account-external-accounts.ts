import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
 */
export type AccountExternalAccounts = {
  /**
   * The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
   */
  data: (BankAccount | Card)[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * AccountExternalAccounts without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccounts = {
  data: (External$BankAccount | External$Card)[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccounts
 */
const SchemaIn$AccountExternalAccounts: z.ZodType<
  AccountExternalAccounts, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(
      z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
    ),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccounts
 */
const SchemaOut$AccountExternalAccounts: z.ZodType<
  External$AccountExternalAccounts, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccounts // the object to be transformed
> = z
  .object({
    data: z.array(
      z.union([
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
      ]),
    ),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$AccountExternalAccounts = {
  in: SchemaIn$AccountExternalAccounts,
  out: SchemaOut$AccountExternalAccounts,
};
