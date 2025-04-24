import {
  External$PayoutCreateBodyMetadata,
  PayoutCreateBodyMetadata,
  Schemas$PayoutCreateBodyMetadata,
} from "./payout-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutCreateBody
 */
export type PayoutCreateBody = {
  /**
   * A positive integer in cents representing how much to payout.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The ID of a bank account or a card to send the payout to. If you don't provide a destination, we use the default external account for the specified currency.
   */
  destination?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PayoutCreateBodyMetadata | undefined;
  /**
   * The method used to send this payout, which is `standard` or `instant`. We support `instant` for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method?: ("instant" | "standard") | undefined;
  /**
   * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.
   */
  sourceType?: ("bank_account" | "card" | "fpx") | undefined;
  /**
   * A string that displays on the recipient's bank or card statement (up to 22 characters). A `statement_descriptor` that's longer than 22 characters return an error. Most banks truncate this information and display it inconsistently. Some banks might not display it at all.
   */
  statementDescriptor?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (PayoutCreateBodyMetadata | undefined)
    | (("instant" | "standard") | undefined)
    | (("bank_account" | "card" | "fpx") | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PayoutCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  destination?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$PayoutCreateBodyMetadata | undefined;
  method?: ("instant" | "standard") | undefined;
  source_type?: ("bank_account" | "card" | "fpx") | undefined;
  statement_descriptor?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$PayoutCreateBodyMetadata | undefined)
    | (("instant" | "standard") | undefined)
    | (("bank_account" | "card" | "fpx") | undefined)
    | (string | undefined)
    | External$PayoutCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutCreateBody
 */
const SchemaIn$PayoutCreateBody: z.ZodType<
  PayoutCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutCreateBodyMetadata.in.optional(),
    method: z.enum(["instant", "standard"]).optional(),
    source_type: z.enum(["bank_account", "card", "fpx"]).optional(),
    statement_descriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      method: "method",
      source_type: "sourceType",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutCreateBody
 */
const SchemaOut$PayoutCreateBody: z.ZodType<
  External$PayoutCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PayoutCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutCreateBodyMetadata.out.optional(),
    method: z.enum(["instant", "standard"]).optional(),
    sourceType: z.enum(["bank_account", "card", "fpx"]).optional(),
    statementDescriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      method: "method",
      sourceType: "source_type",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$PayoutCreateBody = {
  in: SchemaIn$PayoutCreateBody,
  out: SchemaOut$PayoutCreateBody,
};
