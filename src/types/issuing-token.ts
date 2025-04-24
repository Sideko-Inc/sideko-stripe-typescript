import {
  External$IssuingCard,
  IssuingCard,
  Schemas$IssuingCard,
} from "./issuing-card";
import {
  External$IssuingNetworkTokenNetworkData,
  IssuingNetworkTokenNetworkData,
  Schemas$IssuingNetworkTokenNetworkData,
} from "./issuing-network-token-network-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An issuing token object is created when an issued card is added to a digital wallet. As a [card issuer](https://stripe.com/docs/issuing), you can [view and manage these tokens](https://stripe.com/docs/issuing/controls/token-management) through Stripe.
 */
export type IssuingToken = {
  /**
   * Card associated with this token.
   */
  card: string | IssuingCard;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The hashed ID derived from the device ID from the card network associated with the token.
   */
  deviceFingerprint?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last four digits of the token.
   */
  last4?: string | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The token service provider / card network associated with the token.
   */
  network: "mastercard" | "visa";
  networkData?: IssuingNetworkTokenNetworkData | undefined;
  /**
   * Time at which the token was last updated by the card network. Measured in seconds since the Unix epoch.
   */
  networkUpdatedAt: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.token";
  /**
   * The usage state of the token.
   */
  status: "active" | "deleted" | "requested" | "suspended";
  /**
   * The digital wallet for this token, if one was used.
   */
  walletProvider?: ("apple_pay" | "google_pay" | "samsung_pay") | undefined;
};

/**
 * @internal
 * IssuingToken without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingToken = {
  card: string | External$IssuingCard;
  created: number;
  device_fingerprint?: string | null | undefined;
  id: string;
  last4?: string | undefined;
  livemode: boolean;
  network: "mastercard" | "visa";
  network_data?: External$IssuingNetworkTokenNetworkData | undefined;
  network_updated_at: number;
  object: "issuing.token";
  status: "active" | "deleted" | "requested" | "suspended";
  wallet_provider?: ("apple_pay" | "google_pay" | "samsung_pay") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingToken
 */
const SchemaIn$IssuingToken: z.ZodType<
  IssuingToken, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card: z.union([z.string(), z.lazy(() => Schemas$IssuingCard.in)]),
    created: z.number().int(),
    device_fingerprint: z.string().nullable().optional(),
    id: z.string(),
    last4: z.string().optional(),
    livemode: z.boolean(),
    network: z.enum(["mastercard", "visa"]),
    network_data: Schemas$IssuingNetworkTokenNetworkData.in.optional(),
    network_updated_at: z.number().int(),
    object: z.enum(["issuing.token"]),
    status: z.enum(["active", "deleted", "requested", "suspended"]),
    wallet_provider: z
      .enum(["apple_pay", "google_pay", "samsung_pay"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      created: "created",
      device_fingerprint: "deviceFingerprint",
      id: "id",
      last4: "last4",
      livemode: "livemode",
      network: "network",
      network_data: "networkData",
      network_updated_at: "networkUpdatedAt",
      object: "object",
      status: "status",
      wallet_provider: "walletProvider",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingToken
 */
const SchemaOut$IssuingToken: z.ZodType<
  External$IssuingToken, // output type of this zod object
  z.ZodTypeDef,
  IssuingToken // the object to be transformed
> = z
  .object({
    card: z.union([z.string(), z.lazy(() => Schemas$IssuingCard.out)]),
    created: z.number().int(),
    deviceFingerprint: z.string().nullable().optional(),
    id: z.string(),
    last4: z.string().optional(),
    livemode: z.boolean(),
    network: z.enum(["mastercard", "visa"]),
    networkData: Schemas$IssuingNetworkTokenNetworkData.out.optional(),
    networkUpdatedAt: z.number().int(),
    object: z.enum(["issuing.token"]),
    status: z.enum(["active", "deleted", "requested", "suspended"]),
    walletProvider: z
      .enum(["apple_pay", "google_pay", "samsung_pay"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      created: "created",
      deviceFingerprint: "device_fingerprint",
      id: "id",
      last4: "last4",
      livemode: "livemode",
      network: "network",
      networkData: "network_data",
      networkUpdatedAt: "network_updated_at",
      object: "object",
      status: "status",
      walletProvider: "wallet_provider",
    });
  });

export const Schemas$IssuingToken = {
  in: SchemaIn$IssuingToken,
  out: SchemaOut$IssuingToken,
};
