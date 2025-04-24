import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Login Links are single-use URLs for a connected account to access the Express Dashboard. The connected account's [account.controller.stripe_dashboard.type](/api/accounts/object#account_object-controller-stripe_dashboard-type) must be `express` to have access to the Express Dashboard.
 */
export type LoginLink = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "login_link";
  /**
   * The URL for the login link.
   */
  url: string;
};

/**
 * @internal
 * LoginLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LoginLink = {
  created: number;
  object: "login_link";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LoginLink
 */
const SchemaIn$LoginLink: z.ZodType<
  LoginLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    object: z.enum(["login_link"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LoginLink
 */
const SchemaOut$LoginLink: z.ZodType<
  External$LoginLink, // output type of this zod object
  z.ZodTypeDef,
  LoginLink // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    object: z.enum(["login_link"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      object: "object",
      url: "url",
    });
  });

export const Schemas$LoginLink = {
  in: SchemaIn$LoginLink,
  out: SchemaOut$LoginLink,
};
