import {
  BalanceAmountBySourceType,
  External$BalanceAmountBySourceType,
  Schemas$BalanceAmountBySourceType,
} from "./balance-amount-by-source-type";
import {
  BalanceNetAvailable,
  External$BalanceNetAvailable,
  Schemas$BalanceNetAvailable,
} from "./balance-net-available";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BalanceAmountNet = {
  /**
   * Balance amount.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Breakdown of balance by destination.
   */
  netAvailable?: BalanceNetAvailable[] | undefined;
  sourceTypes?: BalanceAmountBySourceType | undefined;
};

/**
 * @internal
 * BalanceAmountNet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceAmountNet = {
  amount: number;
  currency: string;
  net_available?: External$BalanceNetAvailable[] | undefined;
  source_types?: External$BalanceAmountBySourceType | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceAmountNet
 */
const SchemaIn$BalanceAmountNet: z.ZodType<
  BalanceAmountNet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    net_available: z.array(Schemas$BalanceNetAvailable.in).optional(),
    source_types: Schemas$BalanceAmountBySourceType.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      net_available: "netAvailable",
      source_types: "sourceTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceAmountNet
 */
const SchemaOut$BalanceAmountNet: z.ZodType<
  External$BalanceAmountNet, // output type of this zod object
  z.ZodTypeDef,
  BalanceAmountNet // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    netAvailable: z.array(Schemas$BalanceNetAvailable.out).optional(),
    sourceTypes: Schemas$BalanceAmountBySourceType.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      netAvailable: "net_available",
      sourceTypes: "source_types",
    });
  });

export const Schemas$BalanceAmountNet = {
  in: SchemaIn$BalanceAmountNet,
  out: SchemaOut$BalanceAmountNet,
};
