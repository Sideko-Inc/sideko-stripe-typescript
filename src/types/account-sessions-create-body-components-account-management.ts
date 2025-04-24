import {
  AccountSessionsCreateBodyComponentsAccountManagementFeatures,
  External$AccountSessionsCreateBodyComponentsAccountManagementFeatures,
  Schemas$AccountSessionsCreateBodyComponentsAccountManagementFeatures,
} from "./account-sessions-create-body-components-account-management-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsAccountManagement
 */
export type AccountSessionsCreateBodyComponentsAccountManagement = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsAccountManagementFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsAccountManagement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsAccountManagement = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsAccountManagementFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsAccountManagement
 */
const SchemaIn$AccountSessionsCreateBodyComponentsAccountManagement: z.ZodType<
  AccountSessionsCreateBodyComponentsAccountManagement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsAccountManagementFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsAccountManagement
 */
const SchemaOut$AccountSessionsCreateBodyComponentsAccountManagement: z.ZodType<
  External$AccountSessionsCreateBodyComponentsAccountManagement, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsAccountManagement // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsAccountManagementFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsAccountManagement = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsAccountManagement,
  out: SchemaOut$AccountSessionsCreateBodyComponentsAccountManagement,
};
