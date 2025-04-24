import {
  AccountSessionsCreateBodyComponentsFinancialAccountFeatures,
  External$AccountSessionsCreateBodyComponentsFinancialAccountFeatures,
  Schemas$AccountSessionsCreateBodyComponentsFinancialAccountFeatures,
} from "./account-sessions-create-body-components-financial-account-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsFinancialAccount
 */
export type AccountSessionsCreateBodyComponentsFinancialAccount = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsFinancialAccountFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsFinancialAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsFinancialAccount = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsFinancialAccountFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsFinancialAccount
 */
const SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccount: z.ZodType<
  AccountSessionsCreateBodyComponentsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsFinancialAccount
 */
const SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccount: z.ZodType<
  External$AccountSessionsCreateBodyComponentsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsFinancialAccount // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsFinancialAccount = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccount,
  out: SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccount,
};
