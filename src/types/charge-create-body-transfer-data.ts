import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
 */
export type ChargeCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * ChargeCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyTransferData
 */
const SchemaIn$ChargeCreateBodyTransferData: z.ZodType<
  ChargeCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyTransferData
 */
const SchemaOut$ChargeCreateBodyTransferData: z.ZodType<
  External$ChargeCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$ChargeCreateBodyTransferData = {
  in: SchemaIn$ChargeCreateBodyTransferData,
  out: SchemaOut$ChargeCreateBodyTransferData,
};
