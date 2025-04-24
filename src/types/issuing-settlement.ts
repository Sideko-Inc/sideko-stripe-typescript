import {
  External$IssuingSettlementMetadata,
  IssuingSettlementMetadata,
  Schemas$IssuingSettlementMetadata,
} from "./issuing-settlement-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When a non-stripe BIN is used, any use of an [issued card](https://stripe.com/docs/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
 */
export type IssuingSettlement = {
  /**
   * The Bank Identification Number reflecting this settlement record.
   */
  bin: string;
  /**
   * The date that the transactions are cleared and posted to user's accounts.
   */
  clearingDate: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The total interchange received as reimbursement for the transactions.
   */
  interchangeFeesAmount: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingSettlementMetadata;
  /**
   * The total net amount required to settle with the network.
   */
  netTotalAmount: number;
  /**
   * The card network for this settlement report. One of ["visa", "maestro"]
   */
  network: "maestro" | "visa";
  /**
   * The total amount of fees owed to the network.
   */
  networkFeesAmount: number;
  /**
   * The Settlement Identification Number assigned by the network.
   */
  networkSettlementIdentifier: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.settlement";
  /**
   * One of `international` or `uk_national_net`.
   */
  settlementService: string;
  /**
   * The current processing status of this settlement.
   */
  status: "complete" | "pending";
  /**
   * The total transaction amount reflected in this settlement.
   */
  transactionAmount: number;
  /**
   * The total number of transactions reflected in this settlement.
   */
  transactionCount: number;
};

/**
 * @internal
 * IssuingSettlement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingSettlement = {
  bin: string;
  clearing_date: number;
  created: number;
  currency: string;
  id: string;
  interchange_fees_amount: number;
  livemode: boolean;
  metadata: External$IssuingSettlementMetadata;
  net_total_amount: number;
  network: "maestro" | "visa";
  network_fees_amount: number;
  network_settlement_identifier: string;
  object: "issuing.settlement";
  settlement_service: string;
  status: "complete" | "pending";
  transaction_amount: number;
  transaction_count: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingSettlement
 */
const SchemaIn$IssuingSettlement: z.ZodType<
  IssuingSettlement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bin: z.string(),
    clearing_date: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    interchange_fees_amount: z.number().int(),
    livemode: z.boolean(),
    metadata: Schemas$IssuingSettlementMetadata.in,
    net_total_amount: z.number().int(),
    network: z.enum(["maestro", "visa"]),
    network_fees_amount: z.number().int(),
    network_settlement_identifier: z.string(),
    object: z.enum(["issuing.settlement"]),
    settlement_service: z.string(),
    status: z.enum(["complete", "pending"]),
    transaction_amount: z.number().int(),
    transaction_count: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bin: "bin",
      clearing_date: "clearingDate",
      created: "created",
      currency: "currency",
      id: "id",
      interchange_fees_amount: "interchangeFeesAmount",
      livemode: "livemode",
      metadata: "metadata",
      net_total_amount: "netTotalAmount",
      network: "network",
      network_fees_amount: "networkFeesAmount",
      network_settlement_identifier: "networkSettlementIdentifier",
      object: "object",
      settlement_service: "settlementService",
      status: "status",
      transaction_amount: "transactionAmount",
      transaction_count: "transactionCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingSettlement
 */
const SchemaOut$IssuingSettlement: z.ZodType<
  External$IssuingSettlement, // output type of this zod object
  z.ZodTypeDef,
  IssuingSettlement // the object to be transformed
> = z
  .object({
    bin: z.string(),
    clearingDate: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    interchangeFeesAmount: z.number().int(),
    livemode: z.boolean(),
    metadata: Schemas$IssuingSettlementMetadata.out,
    netTotalAmount: z.number().int(),
    network: z.enum(["maestro", "visa"]),
    networkFeesAmount: z.number().int(),
    networkSettlementIdentifier: z.string(),
    object: z.enum(["issuing.settlement"]),
    settlementService: z.string(),
    status: z.enum(["complete", "pending"]),
    transactionAmount: z.number().int(),
    transactionCount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bin: "bin",
      clearingDate: "clearing_date",
      created: "created",
      currency: "currency",
      id: "id",
      interchangeFeesAmount: "interchange_fees_amount",
      livemode: "livemode",
      metadata: "metadata",
      netTotalAmount: "net_total_amount",
      network: "network",
      networkFeesAmount: "network_fees_amount",
      networkSettlementIdentifier: "network_settlement_identifier",
      object: "object",
      settlementService: "settlement_service",
      status: "status",
      transactionAmount: "transaction_amount",
      transactionCount: "transaction_count",
    });
  });

export const Schemas$IssuingSettlement = {
  in: SchemaIn$IssuingSettlement,
  out: SchemaOut$IssuingSettlement,
};
