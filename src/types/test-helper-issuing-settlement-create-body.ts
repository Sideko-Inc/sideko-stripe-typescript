import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingSettlementCreateBody
 */
export type TestHelperIssuingSettlementCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | number
    | string
    | (string[] | undefined)
    | (number | undefined)
    | number
    | (("maestro" | "visa") | undefined)
    | (string | undefined)
    | (number | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingSettlementCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingSettlementCreateBody = {
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

  [additionalProperty: string]:
    | string
    | number
    | string
    | (string[] | undefined)
    | (number | undefined)
    | number
    | (("maestro" | "visa") | undefined)
    | (string | undefined)
    | (number | undefined)
    | (number | undefined)
    | External$TestHelperIssuingSettlementCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingSettlementCreateBody
 */
const SchemaIn$TestHelperIssuingSettlementCreateBody: z.ZodType<
  TestHelperIssuingSettlementCreateBody, // output type of this zod object
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
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingSettlementCreateBody
 */
const SchemaOut$TestHelperIssuingSettlementCreateBody: z.ZodType<
  External$TestHelperIssuingSettlementCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingSettlementCreateBody // the object to be transformed
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
  .catchall(zodRequiredAny)
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

export const Schemas$TestHelperIssuingSettlementCreateBody = {
  in: SchemaIn$TestHelperIssuingSettlementCreateBody,
  out: SchemaOut$TestHelperIssuingSettlementCreateBody,
};
