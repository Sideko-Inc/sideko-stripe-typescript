import {
  AccountSessionsCreateBodyComponentsNotificationBannerFeatures,
  External$AccountSessionsCreateBodyComponentsNotificationBannerFeatures,
  Schemas$AccountSessionsCreateBodyComponentsNotificationBannerFeatures,
} from "./account-sessions-create-body-components-notification-banner-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsNotificationBanner
 */
export type AccountSessionsCreateBodyComponentsNotificationBanner = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsNotificationBannerFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsNotificationBanner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsNotificationBanner = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsNotificationBannerFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsNotificationBanner
 */
const SchemaIn$AccountSessionsCreateBodyComponentsNotificationBanner: z.ZodType<
  AccountSessionsCreateBodyComponentsNotificationBanner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsNotificationBannerFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsNotificationBanner
 */
const SchemaOut$AccountSessionsCreateBodyComponentsNotificationBanner: z.ZodType<
  External$AccountSessionsCreateBodyComponentsNotificationBanner, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsNotificationBanner // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsNotificationBannerFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsNotificationBanner = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsNotificationBanner,
  out: SchemaOut$AccountSessionsCreateBodyComponentsNotificationBanner,
};
