import {
  ConnectEmbeddedAccountSessionCreateComponents,
  External$ConnectEmbeddedAccountSessionCreateComponents,
  Schemas$ConnectEmbeddedAccountSessionCreateComponents,
} from "./connect-embedded-account-session-create-components";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An AccountSession allows a Connect platform to grant access to a connected account in Connect embedded components.
 *
 * We recommend that you create an AccountSession each time you need to display an embedded component
 * to your user. Do not save AccountSessions to your database as they expire relatively
 * quickly, and cannot be used more than once.
 *
 * Related guide: [Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components)
 */
export type AccountSession = {
  /**
   * The ID of the account the AccountSession was created for
   */
  account: string;
  /**
   * The client secret of this AccountSession. Used on the client to set up secure access to the given `account`.
   *
   * The client secret can be used to provide access to `account` from your frontend. It should not be stored, logged, or exposed to anyone other than the connected account. Make sure that you have TLS enabled on any page that includes the client secret.
   *
   * Refer to our docs to [setup Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components) and learn about how `client_secret` should be handled.
   */
  clientSecret: string;
  components: ConnectEmbeddedAccountSessionCreateComponents;
  /**
   * The timestamp at which this AccountSession will expire.
   */
  expiresAt: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "account_session";
};

/**
 * @internal
 * AccountSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSession = {
  account: string;
  client_secret: string;
  components: External$ConnectEmbeddedAccountSessionCreateComponents;
  expires_at: number;
  livemode: boolean;
  object: "account_session";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSession
 */
const SchemaIn$AccountSession: z.ZodType<
  AccountSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    client_secret: z.string(),
    components: Schemas$ConnectEmbeddedAccountSessionCreateComponents.in,
    expires_at: z.number().int(),
    livemode: z.boolean(),
    object: z.enum(["account_session"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      client_secret: "clientSecret",
      components: "components",
      expires_at: "expiresAt",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSession
 */
const SchemaOut$AccountSession: z.ZodType<
  External$AccountSession, // output type of this zod object
  z.ZodTypeDef,
  AccountSession // the object to be transformed
> = z
  .object({
    account: z.string(),
    clientSecret: z.string(),
    components: Schemas$ConnectEmbeddedAccountSessionCreateComponents.out,
    expiresAt: z.number().int(),
    livemode: z.boolean(),
    object: z.enum(["account_session"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      clientSecret: "client_secret",
      components: "components",
      expiresAt: "expires_at",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$AccountSession = {
  in: SchemaIn$AccountSession,
  out: SchemaOut$AccountSession,
};
