import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsNotificationBannerFeatures
 */
export type AccountSessionsCreateBodyComponentsNotificationBannerFeatures = {
  disableStripeUserAuthentication?: boolean | undefined;
  externalAccountCollection?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsNotificationBannerFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsNotificationBannerFeatures =
  {
    disable_stripe_user_authentication?: boolean | undefined;
    external_account_collection?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsNotificationBannerFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsNotificationBannerFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsNotificationBannerFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean().optional(),
    external_account_collection: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disable_stripe_user_authentication: "disableStripeUserAuthentication",
      external_account_collection: "externalAccountCollection",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsNotificationBannerFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsNotificationBannerFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsNotificationBannerFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsNotificationBannerFeatures // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean().optional(),
    externalAccountCollection: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      externalAccountCollection: "external_account_collection",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsNotificationBannerFeatures =
  {
    in: SchemaIn$AccountSessionsCreateBodyComponentsNotificationBannerFeatures,
    out: SchemaOut$AccountSessionsCreateBodyComponentsNotificationBannerFeatures,
  };
