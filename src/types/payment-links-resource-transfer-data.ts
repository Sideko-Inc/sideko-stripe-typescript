import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceTransferData = {
  /**
   * The amount in cents (or local equivalent) that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
   */
  amount?: number | null | undefined;
  /**
   * The connected account receiving the transfer.
   */
  destination: string | Account;
};

/**
 * @internal
 * PaymentLinksResourceTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceTransferData = {
  amount?: number | null | undefined;
  destination: string | External$Account;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceTransferData
 */
const SchemaIn$PaymentLinksResourceTransferData: z.ZodType<
  PaymentLinksResourceTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceTransferData
 */
const SchemaOut$PaymentLinksResourceTransferData: z.ZodType<
  External$PaymentLinksResourceTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceTransferData // the object to be transformed
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

export const Schemas$PaymentLinksResourceTransferData = {
  in: SchemaIn$PaymentLinksResourceTransferData,
  out: SchemaOut$PaymentLinksResourceTransferData,
};
