import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import { External$Source, Schemas$Source, Source } from "./source";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The customer's payment sources, if any.
 */
export type CustomerSources = {
  /**
   * Details about each object.
   */
  data: (BankAccount | Card | Source)[];
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
 * CustomerSources without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSources = {
  data: (External$BankAccount | External$Card | External$Source)[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSources
 */
const SchemaIn$CustomerSources: z.ZodType<
  CustomerSources, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(
      z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSources
 */
const SchemaOut$CustomerSources: z.ZodType<
  External$CustomerSources, // output type of this zod object
  z.ZodTypeDef,
  CustomerSources // the object to be transformed
> = z
  .object({
    data: z.array(
      z.union([
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$Source.out,
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

export const Schemas$CustomerSources = {
  in: SchemaIn$CustomerSources,
  out: SchemaOut$CustomerSources,
};
