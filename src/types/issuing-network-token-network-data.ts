import {
  External$IssuingNetworkTokenDevice,
  IssuingNetworkTokenDevice,
  Schemas$IssuingNetworkTokenDevice,
} from "./issuing-network-token-device";
import {
  External$IssuingNetworkTokenMastercard,
  IssuingNetworkTokenMastercard,
  Schemas$IssuingNetworkTokenMastercard,
} from "./issuing-network-token-mastercard";
import {
  External$IssuingNetworkTokenVisa,
  IssuingNetworkTokenVisa,
  Schemas$IssuingNetworkTokenVisa,
} from "./issuing-network-token-visa";
import {
  External$IssuingNetworkTokenWalletProvider,
  IssuingNetworkTokenWalletProvider,
  Schemas$IssuingNetworkTokenWalletProvider,
} from "./issuing-network-token-wallet-provider";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenNetworkData = {
  device?: IssuingNetworkTokenDevice | undefined;
  mastercard?: IssuingNetworkTokenMastercard | undefined;
  /**
   * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
   */
  type: "mastercard" | "visa";
  visa?: IssuingNetworkTokenVisa | undefined;
  walletProvider?: IssuingNetworkTokenWalletProvider | undefined;
};

/**
 * @internal
 * IssuingNetworkTokenNetworkData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenNetworkData = {
  device?: External$IssuingNetworkTokenDevice | undefined;
  mastercard?: External$IssuingNetworkTokenMastercard | undefined;
  type: "mastercard" | "visa";
  visa?: External$IssuingNetworkTokenVisa | undefined;
  wallet_provider?: External$IssuingNetworkTokenWalletProvider | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenNetworkData
 */
const SchemaIn$IssuingNetworkTokenNetworkData: z.ZodType<
  IssuingNetworkTokenNetworkData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    device: Schemas$IssuingNetworkTokenDevice.in.optional(),
    mastercard: Schemas$IssuingNetworkTokenMastercard.in.optional(),
    type: z.enum(["mastercard", "visa"]),
    visa: Schemas$IssuingNetworkTokenVisa.in.optional(),
    wallet_provider: Schemas$IssuingNetworkTokenWalletProvider.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      device: "device",
      mastercard: "mastercard",
      type: "type",
      visa: "visa",
      wallet_provider: "walletProvider",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenNetworkData
 */
const SchemaOut$IssuingNetworkTokenNetworkData: z.ZodType<
  External$IssuingNetworkTokenNetworkData, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenNetworkData // the object to be transformed
> = z
  .object({
    device: Schemas$IssuingNetworkTokenDevice.out.optional(),
    mastercard: Schemas$IssuingNetworkTokenMastercard.out.optional(),
    type: z.enum(["mastercard", "visa"]),
    visa: Schemas$IssuingNetworkTokenVisa.out.optional(),
    walletProvider: Schemas$IssuingNetworkTokenWalletProvider.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      device: "device",
      mastercard: "mastercard",
      type: "type",
      visa: "visa",
      walletProvider: "wallet_provider",
    });
  });

export const Schemas$IssuingNetworkTokenNetworkData = {
  in: SchemaIn$IssuingNetworkTokenNetworkData,
  out: SchemaOut$IssuingNetworkTokenNetworkData,
};
