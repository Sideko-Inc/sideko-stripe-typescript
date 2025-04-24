import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeCreateBodyDestinationObj0
 */
export type ChargeCreateBodyDestinationObj0 = {
  account: string;
  amount?: number | undefined;
};

/**
 * @internal
 * ChargeCreateBodyDestinationObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyDestinationObj0 = {
  account: string;
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyDestinationObj0
 */
const SchemaIn$ChargeCreateBodyDestinationObj0: z.ZodType<
  ChargeCreateBodyDestinationObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyDestinationObj0
 */
const SchemaOut$ChargeCreateBodyDestinationObj0: z.ZodType<
  External$ChargeCreateBodyDestinationObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyDestinationObj0 // the object to be transformed
> = z
  .object({
    account: z.string(),
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
    });
  });

export const Schemas$ChargeCreateBodyDestinationObj0 = {
  in: SchemaIn$ChargeCreateBodyDestinationObj0,
  out: SchemaOut$ChargeCreateBodyDestinationObj0,
};
