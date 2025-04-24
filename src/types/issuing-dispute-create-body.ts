import {
  External$IssuingDisputeCreateBodyEvidence,
  IssuingDisputeCreateBodyEvidence,
  Schemas$IssuingDisputeCreateBodyEvidence,
} from "./issuing-dispute-create-body-evidence";
import {
  External$IssuingDisputeCreateBodyMetadata,
  IssuingDisputeCreateBodyMetadata,
  Schemas$IssuingDisputeCreateBodyMetadata,
} from "./issuing-dispute-create-body-metadata";
import {
  External$IssuingDisputeCreateBodyTreasury,
  IssuingDisputeCreateBodyTreasury,
  Schemas$IssuingDisputeCreateBodyTreasury,
} from "./issuing-dispute-create-body-treasury";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeCreateBody
 */
export type IssuingDisputeCreateBody = {
  /**
   * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If not set, defaults to the full transaction amount.
   */
  amount?: number | undefined;
  /**
   * Evidence provided for the dispute.
   */
  evidence?: IssuingDisputeCreateBodyEvidence | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingDisputeCreateBodyMetadata | undefined;
  /**
   * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
   */
  transaction?: string | undefined;
  /**
   * Params for disputes related to Treasury FinancialAccounts
   */
  treasury?: IssuingDisputeCreateBodyTreasury | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (IssuingDisputeCreateBodyEvidence | undefined)
    | (string[] | undefined)
    | (IssuingDisputeCreateBodyMetadata | undefined)
    | (string | undefined)
    | (IssuingDisputeCreateBodyTreasury | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingDisputeCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeCreateBody = {
  amount?: number | undefined;
  evidence?: External$IssuingDisputeCreateBodyEvidence | undefined;
  expand?: string[] | undefined;
  metadata?: External$IssuingDisputeCreateBodyMetadata | undefined;
  transaction?: string | undefined;
  treasury?: External$IssuingDisputeCreateBodyTreasury | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (External$IssuingDisputeCreateBodyEvidence | undefined)
    | (string[] | undefined)
    | (External$IssuingDisputeCreateBodyMetadata | undefined)
    | (string | undefined)
    | (External$IssuingDisputeCreateBodyTreasury | undefined)
    | External$IssuingDisputeCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeCreateBody
 */
const SchemaIn$IssuingDisputeCreateBody: z.ZodType<
  IssuingDisputeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    evidence: Schemas$IssuingDisputeCreateBodyEvidence.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$IssuingDisputeCreateBodyMetadata.in.optional(),
    transaction: z.string().optional(),
    treasury: Schemas$IssuingDisputeCreateBodyTreasury.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      transaction: "transaction",
      treasury: "treasury",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeCreateBody
 */
const SchemaOut$IssuingDisputeCreateBody: z.ZodType<
  External$IssuingDisputeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    evidence: Schemas$IssuingDisputeCreateBodyEvidence.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$IssuingDisputeCreateBodyMetadata.out.optional(),
    transaction: z.string().optional(),
    treasury: Schemas$IssuingDisputeCreateBodyTreasury.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      transaction: "transaction",
      treasury: "treasury",
    });
  });

export const Schemas$IssuingDisputeCreateBody = {
  in: SchemaIn$IssuingDisputeCreateBody,
  out: SchemaOut$IssuingDisputeCreateBody,
};
