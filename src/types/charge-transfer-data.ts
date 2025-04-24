import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ChargeTransferData = {
  /**
   * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
   */
  amount?: number | null | undefined;
  /**
   * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
   */
  destination: string | Account;
};

/**
 * @internal
 * ChargeTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeTransferData = {
  amount?: number | null | undefined;
  destination: string | External$Account;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeTransferData
 */
const SchemaIn$ChargeTransferData: z.ZodType<
  ChargeTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeTransferData
 */
const SchemaOut$ChargeTransferData: z.ZodType<
  External$ChargeTransferData, // output type of this zod object
  z.ZodTypeDef,
  ChargeTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$ChargeTransferData = {
  in: SchemaIn$ChargeTransferData,
  out: SchemaOut$ChargeTransferData,
};
