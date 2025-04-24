import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountExternalAccountListResponse = {
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
 * AccountExternalAccountListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountListResponse = {
  data: (External$BankAccount | External$Card)[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountListResponse
 */
const SchemaIn$AccountExternalAccountListResponse: z.ZodType<
  AccountExternalAccountListResponse, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountListResponse
 */
const SchemaOut$AccountExternalAccountListResponse: z.ZodType<
  External$AccountExternalAccountListResponse, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountListResponse // the object to be transformed
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

export const Schemas$AccountExternalAccountListResponse = {
  in: SchemaIn$AccountExternalAccountListResponse,
  out: SchemaOut$AccountExternalAccountListResponse,
};
