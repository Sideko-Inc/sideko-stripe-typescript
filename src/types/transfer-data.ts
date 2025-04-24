import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TransferData = {
  /**
   * The amount transferred to the destination account. This transfer will occur automatically after the payment succeeds. If no amount is specified, by default the entire payment amount is transferred to the destination account.
   *  The amount must be less than or equal to the [amount](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-amount), and must be a positive integer
   *  representing how much to transfer in the smallest currency unit (e.g., 100 cents to charge $1.00).
   */
  amount?: number | undefined;
  /**
   * The account (if any) that the payment is attributed to for tax reporting, and where funds from the payment are transferred to after payment success.
   */
  destination: string | Account;
};

/**
 * @internal
 * TransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferData = {
  amount?: number | undefined;
  destination: string | External$Account;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferData
 */
const SchemaIn$TransferData: z.ZodType<
  TransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferData
 */
const SchemaOut$TransferData: z.ZodType<
  External$TransferData, // output type of this zod object
  z.ZodTypeDef,
  TransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$TransferData = {
  in: SchemaIn$TransferData,
  out: SchemaOut$TransferData,
};
