import {
  External$TaxTransactionCreateReversalBodyLineItemsItemMetadata,
  Schemas$TaxTransactionCreateReversalBodyLineItemsItemMetadata,
  TaxTransactionCreateReversalBodyLineItemsItemMetadata,
} from "./tax-transaction-create-reversal-body-line-items-item-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxTransactionCreateReversalBodyLineItemsItem
 */
export type TaxTransactionCreateReversalBodyLineItemsItem = {
  amount: number;
  amountTax: number;
  metadata?: TaxTransactionCreateReversalBodyLineItemsItemMetadata | undefined;
  originalLineItem: string;
  quantity?: number | undefined;
  reference: string;
};

/**
 * @internal
 * TaxTransactionCreateReversalBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionCreateReversalBodyLineItemsItem = {
  amount: number;
  amount_tax: number;
  metadata?:
    | External$TaxTransactionCreateReversalBodyLineItemsItemMetadata
    | undefined;
  original_line_item: string;
  quantity?: number | undefined;
  reference: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionCreateReversalBodyLineItemsItem
 */
const SchemaIn$TaxTransactionCreateReversalBodyLineItemsItem: z.ZodType<
  TaxTransactionCreateReversalBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
    metadata:
      Schemas$TaxTransactionCreateReversalBodyLineItemsItemMetadata.in.optional(),
    original_line_item: z.string(),
    quantity: z.number().int().optional(),
    reference: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
      metadata: "metadata",
      original_line_item: "originalLineItem",
      quantity: "quantity",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionCreateReversalBodyLineItemsItem
 */
const SchemaOut$TaxTransactionCreateReversalBodyLineItemsItem: z.ZodType<
  External$TaxTransactionCreateReversalBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionCreateReversalBodyLineItemsItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
    metadata:
      Schemas$TaxTransactionCreateReversalBodyLineItemsItemMetadata.out.optional(),
    originalLineItem: z.string(),
    quantity: z.number().int().optional(),
    reference: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
      metadata: "metadata",
      originalLineItem: "original_line_item",
      quantity: "quantity",
      reference: "reference",
    });
  });

export const Schemas$TaxTransactionCreateReversalBodyLineItemsItem = {
  in: SchemaIn$TaxTransactionCreateReversalBodyLineItemsItem,
  out: SchemaOut$TaxTransactionCreateReversalBodyLineItemsItem,
};
