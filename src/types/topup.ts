import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { External$Source, Schemas$Source, Source } from "./source";
import {
  External$TopupMetadata,
  Schemas$TopupMetadata,
  TopupMetadata,
} from "./topup-metadata";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * To top up your Stripe balance, you create a top-up object. You can retrieve
 * individual top-ups, as well as list all top-ups. Top-ups are identified by a
 * unique, random ID.
 *
 * Related guide: [Topping up your platform account](https://stripe.com/docs/connect/top-ups)
 */
export type Topup = {
  /**
   * Amount transferred.
   */
  amount: number;
  /**
   * ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
   */
  expectedAvailabilityDate?: number | null | undefined;
  /**
   * Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
   */
  failureCode?: string | null | undefined;
  /**
   * Message to user further explaining reason for top-up failure if available.
   */
  failureMessage?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TopupMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "topup";
  /**
   * `Source` objects allow you to accept a variety of payment methods. They
   * represent a customer's payment instrument, and can be used with the Stripe API
   * just like a `Card` object: once chargeable, they can be charged, or can be
   * attached to customers.
   *
   * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
   * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
   * This newer API provides access to our latest features and payment method types.
   *
   * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
   */
  source?: Source | undefined;
  /**
   * Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
   */
  status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
  /**
   * A string that identifies this top-up as part of a group.
   */
  transferGroup?: string | null | undefined;
};

/**
 * @internal
 * Topup without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Topup = {
  amount: number;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  created: number;
  currency: string;
  description?: string | null | undefined;
  expected_availability_date?: number | null | undefined;
  failure_code?: string | null | undefined;
  failure_message?: string | null | undefined;
  id: string;
  livemode: boolean;
  metadata: External$TopupMetadata;
  object: "topup";
  source?: External$Source | undefined;
  statement_descriptor?: string | null | undefined;
  status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
  transfer_group?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Topup
 */
const SchemaIn$Topup: z.ZodType<
  Topup, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    expected_availability_date: z.number().int().nullable().optional(),
    failure_code: z.string().nullable().optional(),
    failure_message: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TopupMetadata.in,
    object: z.enum(["topup"]),
    source: Schemas$Source.in.optional(),
    statement_descriptor: z.string().nullable().optional(),
    status: z.enum(["canceled", "failed", "pending", "reversed", "succeeded"]),
    transfer_group: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_transaction: "balanceTransaction",
      created: "created",
      currency: "currency",
      description: "description",
      expected_availability_date: "expectedAvailabilityDate",
      failure_code: "failureCode",
      failure_message: "failureMessage",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      source: "source",
      statement_descriptor: "statementDescriptor",
      status: "status",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Topup
 */
const SchemaOut$Topup: z.ZodType<
  External$Topup, // output type of this zod object
  z.ZodTypeDef,
  Topup // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    expectedAvailabilityDate: z.number().int().nullable().optional(),
    failureCode: z.string().nullable().optional(),
    failureMessage: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TopupMetadata.out,
    object: z.enum(["topup"]),
    source: Schemas$Source.out.optional(),
    statementDescriptor: z.string().nullable().optional(),
    status: z.enum(["canceled", "failed", "pending", "reversed", "succeeded"]),
    transferGroup: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceTransaction: "balance_transaction",
      created: "created",
      currency: "currency",
      description: "description",
      expectedAvailabilityDate: "expected_availability_date",
      failureCode: "failure_code",
      failureMessage: "failure_message",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      source: "source",
      statementDescriptor: "statement_descriptor",
      status: "status",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$Topup = {
  in: SchemaIn$Topup,
  out: SchemaOut$Topup,
};
