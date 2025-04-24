import {
  AccountSessionsCreateBodyComponentsIssuingCardFeatures,
  External$AccountSessionsCreateBodyComponentsIssuingCardFeatures,
  Schemas$AccountSessionsCreateBodyComponentsIssuingCardFeatures,
} from "./account-sessions-create-body-components-issuing-card-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsIssuingCard
 */
export type AccountSessionsCreateBodyComponentsIssuingCard = {
  enabled: boolean;
  features?: AccountSessionsCreateBodyComponentsIssuingCardFeatures | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsIssuingCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsIssuingCard = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsIssuingCardFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsIssuingCard
 */
const SchemaIn$AccountSessionsCreateBodyComponentsIssuingCard: z.ZodType<
  AccountSessionsCreateBodyComponentsIssuingCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsIssuingCard
 */
const SchemaOut$AccountSessionsCreateBodyComponentsIssuingCard: z.ZodType<
  External$AccountSessionsCreateBodyComponentsIssuingCard, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsIssuingCard // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsIssuingCard = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsIssuingCard,
  out: SchemaOut$AccountSessionsCreateBodyComponentsIssuingCard,
};
