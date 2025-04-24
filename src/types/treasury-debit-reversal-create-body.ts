import {
  External$TreasuryDebitReversalCreateBodyMetadata,
  Schemas$TreasuryDebitReversalCreateBodyMetadata,
  TreasuryDebitReversalCreateBodyMetadata,
} from "./treasury-debit-reversal-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryDebitReversalCreateBody
 */
export type TreasuryDebitReversalCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryDebitReversalCreateBodyMetadata | undefined;
  /**
   * The ReceivedDebit to reverse.
   */
  receivedDebit: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TreasuryDebitReversalCreateBodyMetadata | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryDebitReversalCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryDebitReversalCreateBody = {
  expand?: string[] | undefined;
  metadata?: External$TreasuryDebitReversalCreateBodyMetadata | undefined;
  received_debit: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$TreasuryDebitReversalCreateBodyMetadata | undefined)
    | string
    | External$TreasuryDebitReversalCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryDebitReversalCreateBody
 */
const SchemaIn$TreasuryDebitReversalCreateBody: z.ZodType<
  TreasuryDebitReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryDebitReversalCreateBodyMetadata.in.optional(),
    received_debit: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      received_debit: "receivedDebit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryDebitReversalCreateBody
 */
const SchemaOut$TreasuryDebitReversalCreateBody: z.ZodType<
  External$TreasuryDebitReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryDebitReversalCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryDebitReversalCreateBodyMetadata.out.optional(),
    receivedDebit: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      receivedDebit: "received_debit",
    });
  });

export const Schemas$TreasuryDebitReversalCreateBody = {
  in: SchemaIn$TreasuryDebitReversalCreateBody,
  out: SchemaOut$TreasuryDebitReversalCreateBody,
};
