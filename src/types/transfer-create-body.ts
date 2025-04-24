import {
  External$TransferCreateBodyMetadata,
  Schemas$TransferCreateBodyMetadata,
  TransferCreateBodyMetadata,
} from "./transfer-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransferCreateBody
 */
export type TransferCreateBody = {
  /**
   * A positive integer in cents (or local equivalent) representing how much to transfer.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The ID of a connected Stripe account. <a href="/docs/connect/separate-charges-and-transfers">See the Connect documentation</a> for details.
   */
  destination: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TransferCreateBodyMetadata | undefined;
  /**
   * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-availability) for details.
   */
  sourceTransaction?: string | undefined;
  /**
   * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
   */
  sourceType?: ("bank_account" | "card" | "fpx") | undefined;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | string
    | (string | undefined)
    | string
    | (string[] | undefined)
    | (TransferCreateBodyMetadata | undefined)
    | (string | undefined)
    | (("bank_account" | "card" | "fpx") | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TransferCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferCreateBody = {
  amount?: number | undefined;
  currency: string;
  description?: string | undefined;
  destination: string;
  expand?: string[] | undefined;
  metadata?: External$TransferCreateBodyMetadata | undefined;
  source_transaction?: string | undefined;
  source_type?: ("bank_account" | "card" | "fpx") | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | string
    | (string | undefined)
    | string
    | (string[] | undefined)
    | (External$TransferCreateBodyMetadata | undefined)
    | (string | undefined)
    | (("bank_account" | "card" | "fpx") | undefined)
    | (string | undefined)
    | External$TransferCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferCreateBody
 */
const SchemaIn$TransferCreateBody: z.ZodType<
  TransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TransferCreateBodyMetadata.in.optional(),
    source_transaction: z.string().optional(),
    source_type: z.enum(["bank_account", "card", "fpx"]).optional(),
    transfer_group: z.string().optional(),
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
      source_transaction: "sourceTransaction",
      source_type: "sourceType",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferCreateBody
 */
const SchemaOut$TransferCreateBody: z.ZodType<
  External$TransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TransferCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TransferCreateBodyMetadata.out.optional(),
    sourceTransaction: z.string().optional(),
    sourceType: z.enum(["bank_account", "card", "fpx"]).optional(),
    transferGroup: z.string().optional(),
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
      sourceTransaction: "source_transaction",
      sourceType: "source_type",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$TransferCreateBody = {
  in: SchemaIn$TransferCreateBody,
  out: SchemaOut$TransferCreateBody,
};
