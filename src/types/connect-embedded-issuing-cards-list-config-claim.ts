import {
  ConnectEmbeddedIssuingCardsListFeatures,
  External$ConnectEmbeddedIssuingCardsListFeatures,
  Schemas$ConnectEmbeddedIssuingCardsListFeatures,
} from "./connect-embedded-issuing-cards-list-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedIssuingCardsListConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedIssuingCardsListFeatures;
};

/**
 * @internal
 * ConnectEmbeddedIssuingCardsListConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedIssuingCardsListConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedIssuingCardsListFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedIssuingCardsListConfigClaim
 */
const SchemaIn$ConnectEmbeddedIssuingCardsListConfigClaim: z.ZodType<
  ConnectEmbeddedIssuingCardsListConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedIssuingCardsListFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedIssuingCardsListConfigClaim
 */
const SchemaOut$ConnectEmbeddedIssuingCardsListConfigClaim: z.ZodType<
  External$ConnectEmbeddedIssuingCardsListConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedIssuingCardsListConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedIssuingCardsListFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedIssuingCardsListConfigClaim = {
  in: SchemaIn$ConnectEmbeddedIssuingCardsListConfigClaim,
  out: SchemaOut$ConnectEmbeddedIssuingCardsListConfigClaim,
};
