import {
  AccountSessionsCreateBodyComponentsAccountOnboardingFeatures,
  External$AccountSessionsCreateBodyComponentsAccountOnboardingFeatures,
  Schemas$AccountSessionsCreateBodyComponentsAccountOnboardingFeatures,
} from "./account-sessions-create-body-components-account-onboarding-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsAccountOnboarding
 */
export type AccountSessionsCreateBodyComponentsAccountOnboarding = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsAccountOnboardingFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsAccountOnboarding without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsAccountOnboarding = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsAccountOnboardingFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsAccountOnboarding
 */
const SchemaIn$AccountSessionsCreateBodyComponentsAccountOnboarding: z.ZodType<
  AccountSessionsCreateBodyComponentsAccountOnboarding, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsAccountOnboardingFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsAccountOnboarding
 */
const SchemaOut$AccountSessionsCreateBodyComponentsAccountOnboarding: z.ZodType<
  External$AccountSessionsCreateBodyComponentsAccountOnboarding, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsAccountOnboarding // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsAccountOnboardingFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsAccountOnboarding = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsAccountOnboarding,
  out: SchemaOut$AccountSessionsCreateBodyComponentsAccountOnboarding,
};
