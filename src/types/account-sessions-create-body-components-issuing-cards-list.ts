import {
  AccountSessionsCreateBodyComponentsIssuingCardsListFeatures,
  External$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures,
  Schemas$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures,
} from "./account-sessions-create-body-components-issuing-cards-list-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsIssuingCardsList
 */
export type AccountSessionsCreateBodyComponentsIssuingCardsList = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsIssuingCardsListFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsIssuingCardsList without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsIssuingCardsList = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsIssuingCardsList
 */
const SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardsList: z.ZodType<
  AccountSessionsCreateBodyComponentsIssuingCardsList, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsIssuingCardsList
 */
const SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardsList: z.ZodType<
  External$AccountSessionsCreateBodyComponentsIssuingCardsList, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsIssuingCardsList // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsIssuingCardsList = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardsList,
  out: SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardsList,
};
