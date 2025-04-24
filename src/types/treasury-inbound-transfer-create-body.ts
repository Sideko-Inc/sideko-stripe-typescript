import {
  External$TreasuryInboundTransferCreateBodyMetadata,
  Schemas$TreasuryInboundTransferCreateBodyMetadata,
  TreasuryInboundTransferCreateBodyMetadata,
} from "./treasury-inbound-transfer-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryInboundTransferCreateBody
 */
export type TreasuryInboundTransferCreateBody = {
  /**
   * Amount (in cents) to be transferred.
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The FinancialAccount to send funds to.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryInboundTransferCreateBodyMetadata | undefined;
  /**
   * The origin payment method to be debited for the InboundTransfer.
   */
  originPaymentMethod: string;
  /**
   * The complete description that appears on your customers' statements. Maximum 10 characters.
   */
  statementDescriptor?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | string
    | (TreasuryInboundTransferCreateBodyMetadata | undefined)
    | string
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryInboundTransferCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransferCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  metadata?: External$TreasuryInboundTransferCreateBodyMetadata | undefined;
  origin_payment_method: string;
  statement_descriptor?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | string
    | (External$TreasuryInboundTransferCreateBodyMetadata | undefined)
    | string
    | (string | undefined)
    | External$TreasuryInboundTransferCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransferCreateBody
 */
const SchemaIn$TreasuryInboundTransferCreateBody: z.ZodType<
  TreasuryInboundTransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    financial_account: z.string(),
    metadata: Schemas$TreasuryInboundTransferCreateBodyMetadata.in.optional(),
    origin_payment_method: z.string(),
    statement_descriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financial_account: "financialAccount",
      metadata: "metadata",
      origin_payment_method: "originPaymentMethod",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransferCreateBody
 */
const SchemaOut$TreasuryInboundTransferCreateBody: z.ZodType<
  External$TreasuryInboundTransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransferCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    metadata: Schemas$TreasuryInboundTransferCreateBodyMetadata.out.optional(),
    originPaymentMethod: z.string(),
    statementDescriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financialAccount: "financial_account",
      metadata: "metadata",
      originPaymentMethod: "origin_payment_method",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$TreasuryInboundTransferCreateBody = {
  in: SchemaIn$TreasuryInboundTransferCreateBody,
  out: SchemaOut$TreasuryInboundTransferCreateBody,
};
