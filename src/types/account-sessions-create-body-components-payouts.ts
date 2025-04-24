import {
  AccountSessionsCreateBodyComponentsPayoutsFeatures,
  External$AccountSessionsCreateBodyComponentsPayoutsFeatures,
  Schemas$AccountSessionsCreateBodyComponentsPayoutsFeatures,
} from "./account-sessions-create-body-components-payouts-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsPayouts
 */
export type AccountSessionsCreateBodyComponentsPayouts = {
  enabled: boolean;
  features?: AccountSessionsCreateBodyComponentsPayoutsFeatures | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsPayouts without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsPayouts = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsPayoutsFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsPayouts
 */
const SchemaIn$AccountSessionsCreateBodyComponentsPayouts: z.ZodType<
  AccountSessionsCreateBodyComponentsPayouts, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPayoutsFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsPayouts
 */
const SchemaOut$AccountSessionsCreateBodyComponentsPayouts: z.ZodType<
  External$AccountSessionsCreateBodyComponentsPayouts, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsPayouts // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPayoutsFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsPayouts = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsPayouts,
  out: SchemaOut$AccountSessionsCreateBodyComponentsPayouts,
};
