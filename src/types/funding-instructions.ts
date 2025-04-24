import {
  External$FundingInstructionsBankTransfer,
  FundingInstructionsBankTransfer,
  Schemas$FundingInstructionsBankTransfer,
} from "./funding-instructions-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) that is
 * automatically applied to future invoices and payments using the `customer_balance` payment method.
 * Customers can fund this balance by initiating a bank transfer to any account in the
 * `financial_addresses` field.
 * Related guide: [Customer balance funding instructions](https://stripe.com/docs/payments/customer-balance/funding-instructions)
 */
export type FundingInstructions = {
  bankTransfer: FundingInstructionsBankTransfer;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The `funding_type` of the returned instructions
   */
  fundingType: "bank_transfer";
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "funding_instructions";
};

/**
 * @internal
 * FundingInstructions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructions = {
  bank_transfer: External$FundingInstructionsBankTransfer;
  currency: string;
  funding_type: "bank_transfer";
  livemode: boolean;
  object: "funding_instructions";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructions
 */
const SchemaIn$FundingInstructions: z.ZodType<
  FundingInstructions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer: Schemas$FundingInstructionsBankTransfer.in,
    currency: z.string(),
    funding_type: z.enum(["bank_transfer"]),
    livemode: z.boolean(),
    object: z.enum(["funding_instructions"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      currency: "currency",
      funding_type: "fundingType",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructions
 */
const SchemaOut$FundingInstructions: z.ZodType<
  External$FundingInstructions, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructions // the object to be transformed
> = z
  .object({
    bankTransfer: Schemas$FundingInstructionsBankTransfer.out,
    currency: z.string(),
    fundingType: z.enum(["bank_transfer"]),
    livemode: z.boolean(),
    object: z.enum(["funding_instructions"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      currency: "currency",
      fundingType: "funding_type",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$FundingInstructions = {
  in: SchemaIn$FundingInstructions,
  out: SchemaOut$FundingInstructions,
};
