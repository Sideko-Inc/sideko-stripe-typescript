import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction-resource-bank-transfer-resource-eu-bank-transfer";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction-resource-bank-transfer-resource-gb-bank-transfer";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction-resource-bank-transfer-resource-jp-bank-transfer";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction-resource-bank-transfer-resource-us-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer =
  {
    euBankTransfer?:
      | CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
      | undefined;
    gbBankTransfer?:
      | CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
      | undefined;
    jpBankTransfer?:
      | CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
      | undefined;
    /**
     * The user-supplied reference field on the bank transfer.
     */
    reference?: string | null | undefined;
    /**
     * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
     */
    type:
      | "eu_bank_transfer"
      | "gb_bank_transfer"
      | "jp_bank_transfer"
      | "mx_bank_transfer"
      | "us_bank_transfer";
    usBankTransfer?:
      | CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
      | undefined;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer =
  {
    eu_bank_transfer?:
      | External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
      | undefined;
    gb_bank_transfer?:
      | External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
      | undefined;
    jp_bank_transfer?:
      | External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
      | undefined;
    reference?: string | null | undefined;
    type:
      | "eu_bank_transfer"
      | "gb_bank_transfer"
      | "jp_bank_transfer"
      | "mx_bank_transfer"
      | "us_bank_transfer";
    us_bank_transfer?:
      | External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer.in.optional(),
    gb_bank_transfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer.in.optional(),
    jp_bank_transfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer.in.optional(),
    reference: z.string().nullable().optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
    us_bank_transfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eu_bank_transfer: "euBankTransfer",
      gb_bank_transfer: "gbBankTransfer",
      jp_bank_transfer: "jpBankTransfer",
      reference: "reference",
      type: "type",
      us_bank_transfer: "usBankTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer.out.optional(),
    gbBankTransfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer.out.optional(),
    jpBankTransfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer.out.optional(),
    reference: z.string().nullable().optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
    usBankTransfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      gbBankTransfer: "gb_bank_transfer",
      jpBankTransfer: "jp_bank_transfer",
      reference: "reference",
      type: "type",
      usBankTransfer: "us_bank_transfer",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
  };
