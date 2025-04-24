import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedIssuingCardFeatures = {
  /**
   * Whether to allow card management features.
   */
  cardManagement: boolean;
  /**
   * Whether to allow card spend dispute management features.
   */
  cardSpendDisputeManagement: boolean;
  /**
   * Whether to allow cardholder management features.
   */
  cardholderManagement: boolean;
  /**
   * Whether to allow spend control management features.
   */
  spendControlManagement: boolean;
};

/**
 * @internal
 * ConnectEmbeddedIssuingCardFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedIssuingCardFeatures = {
  card_management: boolean;
  card_spend_dispute_management: boolean;
  cardholder_management: boolean;
  spend_control_management: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedIssuingCardFeatures
 */
const SchemaIn$ConnectEmbeddedIssuingCardFeatures: z.ZodType<
  ConnectEmbeddedIssuingCardFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_management: z.boolean(),
    card_spend_dispute_management: z.boolean(),
    cardholder_management: z.boolean(),
    spend_control_management: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_management: "cardManagement",
      card_spend_dispute_management: "cardSpendDisputeManagement",
      cardholder_management: "cardholderManagement",
      spend_control_management: "spendControlManagement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedIssuingCardFeatures
 */
const SchemaOut$ConnectEmbeddedIssuingCardFeatures: z.ZodType<
  External$ConnectEmbeddedIssuingCardFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedIssuingCardFeatures // the object to be transformed
> = z
  .object({
    cardManagement: z.boolean(),
    cardSpendDisputeManagement: z.boolean(),
    cardholderManagement: z.boolean(),
    spendControlManagement: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardManagement: "card_management",
      cardSpendDisputeManagement: "card_spend_dispute_management",
      cardholderManagement: "cardholder_management",
      spendControlManagement: "spend_control_management",
    });
  });

export const Schemas$ConnectEmbeddedIssuingCardFeatures = {
  in: SchemaIn$ConnectEmbeddedIssuingCardFeatures,
  out: SchemaOut$ConnectEmbeddedIssuingCardFeatures,
};
