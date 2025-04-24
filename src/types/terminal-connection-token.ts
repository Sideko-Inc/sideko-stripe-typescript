import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Connection Token is used by the Stripe Terminal SDK to connect to a reader.
 *
 * Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */
export type TerminalConnectionToken = {
  /**
   * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
   */
  location?: string | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "terminal.connection_token";
  /**
   * Your application should pass this token to the Stripe Terminal SDK.
   */
  secret: string;
};

/**
 * @internal
 * TerminalConnectionToken without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConnectionToken = {
  location?: string | undefined;
  object: "terminal.connection_token";
  secret: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConnectionToken
 */
const SchemaIn$TerminalConnectionToken: z.ZodType<
  TerminalConnectionToken, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    location: z.string().optional(),
    object: z.enum(["terminal.connection_token"]),
    secret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      object: "object",
      secret: "secret",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConnectionToken
 */
const SchemaOut$TerminalConnectionToken: z.ZodType<
  External$TerminalConnectionToken, // output type of this zod object
  z.ZodTypeDef,
  TerminalConnectionToken // the object to be transformed
> = z
  .object({
    location: z.string().optional(),
    object: z.enum(["terminal.connection_token"]),
    secret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      object: "object",
      secret: "secret",
    });
  });

export const Schemas$TerminalConnectionToken = {
  in: SchemaIn$TerminalConnectionToken,
  out: SchemaOut$TerminalConnectionToken,
};
