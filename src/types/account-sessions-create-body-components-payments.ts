import {
  AccountSessionsCreateBodyComponentsPaymentsFeatures,
  External$AccountSessionsCreateBodyComponentsPaymentsFeatures,
  Schemas$AccountSessionsCreateBodyComponentsPaymentsFeatures,
} from "./account-sessions-create-body-components-payments-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsPayments
 */
export type AccountSessionsCreateBodyComponentsPayments = {
  enabled: boolean;
  features?: AccountSessionsCreateBodyComponentsPaymentsFeatures | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsPayments = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsPaymentsFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsPayments
 */
const SchemaIn$AccountSessionsCreateBodyComponentsPayments: z.ZodType<
  AccountSessionsCreateBodyComponentsPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPaymentsFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsPayments
 */
const SchemaOut$AccountSessionsCreateBodyComponentsPayments: z.ZodType<
  External$AccountSessionsCreateBodyComponentsPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsPayments // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPaymentsFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsPayments = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsPayments,
  out: SchemaOut$AccountSessionsCreateBodyComponentsPayments,
};
