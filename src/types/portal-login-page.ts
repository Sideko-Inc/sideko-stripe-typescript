import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalLoginPage = {
  /**
   * If `true`, a shareable `url` will be generated that will take your customers to a hosted login page for the customer portal.
   *
   * If `false`, the previously generated `url`, if any, will be deactivated.
   */
  enabled: boolean;
  /**
   * A shareable URL to the hosted portal login page. Your customers will be able to log in with their [email](https://stripe.com/docs/api/customers/object#customer_object-email) and receive a link to their customer portal.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * PortalLoginPage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalLoginPage = {
  enabled: boolean;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalLoginPage
 */
const SchemaIn$PortalLoginPage: z.ZodType<
  PortalLoginPage, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalLoginPage
 */
const SchemaOut$PortalLoginPage: z.ZodType<
  External$PortalLoginPage, // output type of this zod object
  z.ZodTypeDef,
  PortalLoginPage // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      url: "url",
    });
  });

export const Schemas$PortalLoginPage = {
  in: SchemaIn$PortalLoginPage,
  out: SchemaOut$PortalLoginPage,
};
