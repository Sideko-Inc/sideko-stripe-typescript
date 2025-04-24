import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedIssuingCardsListFeatures = {
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
   * Disables Stripe user authentication for this embedded component. This feature can only be false for accounts where you’re responsible for collecting updated information when requirements are due or change, like custom accounts.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether to allow spend control management features.
   */
  spendControlManagement: boolean;
};

/**
 * @internal
 * ConnectEmbeddedIssuingCardsListFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedIssuingCardsListFeatures = {
  card_management: boolean;
  card_spend_dispute_management: boolean;
  cardholder_management: boolean;
  disable_stripe_user_authentication: boolean;
  spend_control_management: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedIssuingCardsListFeatures
 */
const SchemaIn$ConnectEmbeddedIssuingCardsListFeatures: z.ZodType<
  ConnectEmbeddedIssuingCardsListFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_management: z.boolean(),
    card_spend_dispute_management: z.boolean(),
    cardholder_management: z.boolean(),
    disable_stripe_user_authentication: z.boolean(),
    spend_control_management: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_management: "cardManagement",
      card_spend_dispute_management: "cardSpendDisputeManagement",
      cardholder_management: "cardholderManagement",
      disable_stripe_user_authentication: "disableStripeUserAuthentication",
      spend_control_management: "spendControlManagement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedIssuingCardsListFeatures
 */
const SchemaOut$ConnectEmbeddedIssuingCardsListFeatures: z.ZodType<
  External$ConnectEmbeddedIssuingCardsListFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedIssuingCardsListFeatures // the object to be transformed
> = z
  .object({
    cardManagement: z.boolean(),
    cardSpendDisputeManagement: z.boolean(),
    cardholderManagement: z.boolean(),
    disableStripeUserAuthentication: z.boolean(),
    spendControlManagement: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardManagement: "card_management",
      cardSpendDisputeManagement: "card_spend_dispute_management",
      cardholderManagement: "cardholder_management",
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      spendControlManagement: "spend_control_management",
    });
  });

export const Schemas$ConnectEmbeddedIssuingCardsListFeatures = {
  in: SchemaIn$ConnectEmbeddedIssuingCardsListFeatures,
  out: SchemaOut$ConnectEmbeddedIssuingCardsListFeatures,
};
