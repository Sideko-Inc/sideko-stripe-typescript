import {
  External$SourceTransactionAchCreditTransferData,
  Schemas$SourceTransactionAchCreditTransferData,
  SourceTransactionAchCreditTransferData,
} from "./source-transaction-ach-credit-transfer-data";
import {
  External$SourceTransactionChfCreditTransferData,
  Schemas$SourceTransactionChfCreditTransferData,
  SourceTransactionChfCreditTransferData,
} from "./source-transaction-chf-credit-transfer-data";
import {
  External$SourceTransactionGbpCreditTransferData,
  Schemas$SourceTransactionGbpCreditTransferData,
  SourceTransactionGbpCreditTransferData,
} from "./source-transaction-gbp-credit-transfer-data";
import {
  External$SourceTransactionPaperCheckData,
  Schemas$SourceTransactionPaperCheckData,
  SourceTransactionPaperCheckData,
} from "./source-transaction-paper-check-data";
import {
  External$SourceTransactionSepaCreditTransferData,
  Schemas$SourceTransactionSepaCreditTransferData,
  SourceTransactionSepaCreditTransferData,
} from "./source-transaction-sepa-credit-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Some payment methods have no required amount that a customer must send.
 * Customers can be instructed to send any amount, and it can be made up of
 * multiple transactions. As such, sources can have multiple associated
 * transactions.
 */
export type SourceTransaction = {
  achCreditTransfer?: SourceTransactionAchCreditTransferData | undefined;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
   */
  amount: number;
  chfCreditTransfer?: SourceTransactionChfCreditTransferData | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  gbpCreditTransfer?: SourceTransactionGbpCreditTransferData | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "source_transaction";
  paperCheck?: SourceTransactionPaperCheckData | undefined;
  sepaCreditTransfer?: SourceTransactionSepaCreditTransferData | undefined;
  /**
   * The ID of the source this transaction is attached to.
   */
  source: string;
  /**
   * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
   */
  status: string;
  /**
   * The type of source this transaction is attached to.
   */
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "alipay"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
};

/**
 * @internal
 * SourceTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTransaction = {
  ach_credit_transfer?:
    | External$SourceTransactionAchCreditTransferData
    | undefined;
  amount: number;
  chf_credit_transfer?:
    | External$SourceTransactionChfCreditTransferData
    | undefined;
  created: number;
  currency: string;
  gbp_credit_transfer?:
    | External$SourceTransactionGbpCreditTransferData
    | undefined;
  id: string;
  livemode: boolean;
  object: "source_transaction";
  paper_check?: External$SourceTransactionPaperCheckData | undefined;
  sepa_credit_transfer?:
    | External$SourceTransactionSepaCreditTransferData
    | undefined;
  source: string;
  status: string;
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "alipay"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTransaction
 */
const SchemaIn$SourceTransaction: z.ZodType<
  SourceTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach_credit_transfer:
      Schemas$SourceTransactionAchCreditTransferData.in.optional(),
    amount: z.number().int(),
    chf_credit_transfer:
      Schemas$SourceTransactionChfCreditTransferData.in.optional(),
    created: z.number().int(),
    currency: z.string(),
    gbp_credit_transfer:
      Schemas$SourceTransactionGbpCreditTransferData.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["source_transaction"]),
    paper_check: Schemas$SourceTransactionPaperCheckData.in.optional(),
    sepa_credit_transfer:
      Schemas$SourceTransactionSepaCreditTransferData.in.optional(),
    source: z.string(),
    status: z.string(),
    type: z.enum([
      "ach_credit_transfer",
      "ach_debit",
      "alipay",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach_credit_transfer: "achCreditTransfer",
      amount: "amount",
      chf_credit_transfer: "chfCreditTransfer",
      created: "created",
      currency: "currency",
      gbp_credit_transfer: "gbpCreditTransfer",
      id: "id",
      livemode: "livemode",
      object: "object",
      paper_check: "paperCheck",
      sepa_credit_transfer: "sepaCreditTransfer",
      source: "source",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTransaction
 */
const SchemaOut$SourceTransaction: z.ZodType<
  External$SourceTransaction, // output type of this zod object
  z.ZodTypeDef,
  SourceTransaction // the object to be transformed
> = z
  .object({
    achCreditTransfer:
      Schemas$SourceTransactionAchCreditTransferData.out.optional(),
    amount: z.number().int(),
    chfCreditTransfer:
      Schemas$SourceTransactionChfCreditTransferData.out.optional(),
    created: z.number().int(),
    currency: z.string(),
    gbpCreditTransfer:
      Schemas$SourceTransactionGbpCreditTransferData.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["source_transaction"]),
    paperCheck: Schemas$SourceTransactionPaperCheckData.out.optional(),
    sepaCreditTransfer:
      Schemas$SourceTransactionSepaCreditTransferData.out.optional(),
    source: z.string(),
    status: z.string(),
    type: z.enum([
      "ach_credit_transfer",
      "ach_debit",
      "alipay",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      achCreditTransfer: "ach_credit_transfer",
      amount: "amount",
      chfCreditTransfer: "chf_credit_transfer",
      created: "created",
      currency: "currency",
      gbpCreditTransfer: "gbp_credit_transfer",
      id: "id",
      livemode: "livemode",
      object: "object",
      paperCheck: "paper_check",
      sepaCreditTransfer: "sepa_credit_transfer",
      source: "source",
      status: "status",
      type: "type",
    });
  });

export const Schemas$SourceTransaction = {
  in: SchemaIn$SourceTransaction,
  out: SchemaOut$SourceTransaction,
};
