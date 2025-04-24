import { Account, External$Account, Schemas$Account } from "./account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectCollectionTransfer = {
  /**
   * Amount transferred, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the account that funds are being collected for.
   */
  destination: string | Account;
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
  object: "connect_collection_transfer";
};

/**
 * @internal
 * ConnectCollectionTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectCollectionTransfer = {
  amount: number;
  currency: string;
  destination: string | External$Account;
  id: string;
  livemode: boolean;
  object: "connect_collection_transfer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectCollectionTransfer
 */
const SchemaIn$ConnectCollectionTransfer: z.ZodType<
  ConnectCollectionTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.in)]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["connect_collection_transfer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      destination: "destination",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectCollectionTransfer
 */
const SchemaOut$ConnectCollectionTransfer: z.ZodType<
  External$ConnectCollectionTransfer, // output type of this zod object
  z.ZodTypeDef,
  ConnectCollectionTransfer // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    destination: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["connect_collection_transfer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      destination: "destination",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$ConnectCollectionTransfer = {
  in: SchemaIn$ConnectCollectionTransfer,
  out: SchemaOut$ConnectCollectionTransfer,
};
