import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type OnlineAcceptance = {
  /**
   * The customer accepts the mandate from this IP address.
   */
  ipAddress?: string | null | undefined;
  /**
   * The customer accepts the mandate using the user agent of the browser.
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * OnlineAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OnlineAcceptance = {
  ip_address?: string | null | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OnlineAcceptance
 */
const SchemaIn$OnlineAcceptance: z.ZodType<
  OnlineAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string().nullable().optional(),
    user_agent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OnlineAcceptance
 */
const SchemaOut$OnlineAcceptance: z.ZodType<
  External$OnlineAcceptance, // output type of this zod object
  z.ZodTypeDef,
  OnlineAcceptance // the object to be transformed
> = z
  .object({
    ipAddress: z.string().nullable().optional(),
    userAgent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    });
  });

export const Schemas$OnlineAcceptance = {
  in: SchemaIn$OnlineAcceptance,
  out: SchemaOut$OnlineAcceptance,
};
