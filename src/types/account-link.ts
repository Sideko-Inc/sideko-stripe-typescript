import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Account Links are the means by which a Connect platform grants a connected account permission to access
 * Stripe-hosted applications, such as Connect Onboarding.
 *
 * Related guide: [Connect Onboarding](https://stripe.com/docs/connect/custom/hosted-onboarding)
 */
export type AccountLink = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The timestamp at which this account link will expire.
   */
  expiresAt: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "account_link";
  /**
   * The URL for the account link.
   */
  url: string;
};

/**
 * @internal
 * AccountLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountLink = {
  created: number;
  expires_at: number;
  object: "account_link";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountLink
 */
const SchemaIn$AccountLink: z.ZodType<
  AccountLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    expires_at: z.number().int(),
    object: z.enum(["account_link"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expires_at: "expiresAt",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountLink
 */
const SchemaOut$AccountLink: z.ZodType<
  External$AccountLink, // output type of this zod object
  z.ZodTypeDef,
  AccountLink // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    expiresAt: z.number().int(),
    object: z.enum(["account_link"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expiresAt: "expires_at",
      object: "object",
      url: "url",
    });
  });

export const Schemas$AccountLink = {
  in: SchemaIn$AccountLink,
  out: SchemaOut$AccountLink,
};
