import {
  AccountSessionsCreateBodyComponentsBalancesFeatures,
  External$AccountSessionsCreateBodyComponentsBalancesFeatures,
  Schemas$AccountSessionsCreateBodyComponentsBalancesFeatures,
} from "./account-sessions-create-body-components-balances-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsBalances
 */
export type AccountSessionsCreateBodyComponentsBalances = {
  enabled: boolean;
  features?: AccountSessionsCreateBodyComponentsBalancesFeatures | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsBalances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsBalances = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsBalancesFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsBalances
 */
const SchemaIn$AccountSessionsCreateBodyComponentsBalances: z.ZodType<
  AccountSessionsCreateBodyComponentsBalances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsBalancesFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsBalances
 */
const SchemaOut$AccountSessionsCreateBodyComponentsBalances: z.ZodType<
  External$AccountSessionsCreateBodyComponentsBalances, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsBalances // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsBalancesFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsBalances = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsBalances,
  out: SchemaOut$AccountSessionsCreateBodyComponentsBalances,
};
