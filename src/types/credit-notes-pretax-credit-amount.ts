import {
  BillingCreditBalanceTransaction,
  External$BillingCreditBalanceTransaction,
  Schemas$BillingCreditBalanceTransaction,
} from "./billing-credit-balance-transaction";
import {
  DeletedDiscount,
  External$DeletedDiscount,
  Schemas$DeletedDiscount,
} from "./deleted-discount";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CreditNotesPretaxCreditAmount = {
  /**
   * The amount, in cents (or local equivalent), of the pretax credit amount.
   */
  amount: number;
  /**
   * The credit balance transaction that was applied to get this pretax credit amount.
   */
  creditBalanceTransaction?:
    | (string | BillingCreditBalanceTransaction)
    | undefined;
  /**
   * The discount that was applied to get this pretax credit amount.
   */
  discount?: (string | Discount | DeletedDiscount) | undefined;
  /**
   * Type of the pretax credit amount referenced.
   */
  type: "credit_balance_transaction" | "discount";
};

/**
 * @internal
 * CreditNotesPretaxCreditAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotesPretaxCreditAmount = {
  amount: number;
  credit_balance_transaction?:
    | (string | External$BillingCreditBalanceTransaction)
    | undefined;
  discount?:
    | (string | External$Discount | External$DeletedDiscount)
    | undefined;
  type: "credit_balance_transaction" | "discount";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotesPretaxCreditAmount
 */
const SchemaIn$CreditNotesPretaxCreditAmount: z.ZodType<
  CreditNotesPretaxCreditAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    credit_balance_transaction: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BillingCreditBalanceTransaction.in),
      ])
      .optional(),
    discount: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Discount.in),
        z.lazy(() => Schemas$DeletedDiscount.in),
      ])
      .optional(),
    type: z.enum(["credit_balance_transaction", "discount"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      credit_balance_transaction: "creditBalanceTransaction",
      discount: "discount",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotesPretaxCreditAmount
 */
const SchemaOut$CreditNotesPretaxCreditAmount: z.ZodType<
  External$CreditNotesPretaxCreditAmount, // output type of this zod object
  z.ZodTypeDef,
  CreditNotesPretaxCreditAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    creditBalanceTransaction: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BillingCreditBalanceTransaction.out),
      ])
      .optional(),
    discount: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Discount.out),
        z.lazy(() => Schemas$DeletedDiscount.out),
      ])
      .optional(),
    type: z.enum(["credit_balance_transaction", "discount"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      creditBalanceTransaction: "credit_balance_transaction",
      discount: "discount",
      type: "type",
    });
  });

export const Schemas$CreditNotesPretaxCreditAmount = {
  in: SchemaIn$CreditNotesPretaxCreditAmount,
  out: SchemaOut$CreditNotesPretaxCreditAmount,
};
