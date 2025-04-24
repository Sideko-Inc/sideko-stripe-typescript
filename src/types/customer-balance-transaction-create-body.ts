import {
  CustomerBalanceTransactionCreateBodyMetadataObj0,
  External$CustomerBalanceTransactionCreateBodyMetadataObj0,
  Schemas$CustomerBalanceTransactionCreateBodyMetadataObj0,
} from "./customer-balance-transaction-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBalanceTransactionCreateBody
 */
export type CustomerBalanceTransactionCreateBody = {
  /**
   * The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?:
    | (CustomerBalanceTransactionCreateBodyMetadataObj0 | string)
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | ((CustomerBalanceTransactionCreateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerBalanceTransactionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceTransactionCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$CustomerBalanceTransactionCreateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (
        | (External$CustomerBalanceTransactionCreateBodyMetadataObj0 | string)
        | undefined
      )
    | External$CustomerBalanceTransactionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceTransactionCreateBody
 */
const SchemaIn$CustomerBalanceTransactionCreateBody: z.ZodType<
  CustomerBalanceTransactionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$CustomerBalanceTransactionCreateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceTransactionCreateBody
 */
const SchemaOut$CustomerBalanceTransactionCreateBody: z.ZodType<
  External$CustomerBalanceTransactionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceTransactionCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$CustomerBalanceTransactionCreateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$CustomerBalanceTransactionCreateBody = {
  in: SchemaIn$CustomerBalanceTransactionCreateBody,
  out: SchemaOut$CustomerBalanceTransactionCreateBody,
};
