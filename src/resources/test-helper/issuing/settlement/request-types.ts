import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperIssuingSettlementCompleteBody,
  Schemas$TestHelperIssuingSettlementCompleteBody,
  TestHelperIssuingSettlementCompleteBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-settlement-complete-body";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The Bank Identification Number reflecting this settlement record.
   */
  bin: string;
  /**
   * The date that the transactions are cleared and posted to user's accounts.
   */
  clearingDate: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The total interchange received as reimbursement for the transactions.
   */
  interchangeFeesAmount?: number | undefined;
  /**
   * The total net amount required to settle with the network.
   */
  netTotalAmount: number;
  /**
   * The card network for this settlement. One of ["visa", "maestro"]
   */
  network?: ("maestro" | "visa") | undefined;
  /**
   * The Settlement Identification Number assigned by the network.
   */
  networkSettlementIdentifier?: string | undefined;
  /**
   * The total transaction amount reflected in this settlement.
   */
  transactionAmount?: number | undefined;
  /**
   * The total number of transactions reflected in this settlement.
   */
  transactionCount?: number | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  bin: string;
  clearing_date: number;
  currency: string;
  expand?: string[] | undefined;
  interchange_fees_amount?: number | undefined;
  net_total_amount: number;
  network?: ("maestro" | "visa") | undefined;
  network_settlement_identifier?: string | undefined;
  transaction_amount?: number | undefined;
  transaction_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bin: z.string(),
    clearing_date: z.number().int(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    interchange_fees_amount: z.number().int().optional(),
    net_total_amount: z.number().int(),
    network: z.enum(["maestro", "visa"]).optional(),
    network_settlement_identifier: z.string().optional(),
    transaction_amount: z.number().int().optional(),
    transaction_count: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bin: "bin",
      clearing_date: "clearingDate",
      currency: "currency",
      expand: "expand",
      interchange_fees_amount: "interchangeFeesAmount",
      net_total_amount: "netTotalAmount",
      network: "network",
      network_settlement_identifier: "networkSettlementIdentifier",
      transaction_amount: "transactionAmount",
      transaction_count: "transactionCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    bin: z.string(),
    clearingDate: z.number().int(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    interchangeFeesAmount: z.number().int().optional(),
    netTotalAmount: z.number().int(),
    network: z.enum(["maestro", "visa"]).optional(),
    networkSettlementIdentifier: z.string().optional(),
    transactionAmount: z.number().int().optional(),
    transactionCount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bin: "bin",
      clearingDate: "clearing_date",
      currency: "currency",
      expand: "expand",
      interchangeFeesAmount: "interchange_fees_amount",
      netTotalAmount: "net_total_amount",
      network: "network",
      networkSettlementIdentifier: "network_settlement_identifier",
      transactionAmount: "transaction_amount",
      transactionCount: "transaction_count",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CompleteRequest
 */
export type CompleteRequest = {
  data?: TestHelperIssuingSettlementCompleteBody | undefined;
  /**
   * The settlement token to mark as complete.
   */
  settlement: string;
};

/**
 * @internal
 * CompleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CompleteRequest = {
  data?: External$TestHelperIssuingSettlementCompleteBody | undefined;
  settlement: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CompleteRequest
 */
const SchemaIn$CompleteRequest: z.ZodType<
  CompleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingSettlementCompleteBody.in.optional(),
    settlement: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      settlement: "settlement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CompleteRequest
 */
const SchemaOut$CompleteRequest: z.ZodType<
  External$CompleteRequest, // output type of this zod object
  z.ZodTypeDef,
  CompleteRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingSettlementCompleteBody.out.optional(),
    settlement: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      settlement: "settlement",
    });
  });

export const Schemas$CompleteRequest = {
  in: SchemaIn$CompleteRequest,
  out: SchemaOut$CompleteRequest,
};
