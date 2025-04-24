import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsIssuingCardsListFeatures
 */
export type AccountSessionsCreateBodyComponentsIssuingCardsListFeatures = {
  cardManagement?: boolean | undefined;
  cardSpendDisputeManagement?: boolean | undefined;
  cardholderManagement?: boolean | undefined;
  disableStripeUserAuthentication?: boolean | undefined;
  spendControlManagement?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsIssuingCardsListFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures =
  {
    card_management?: boolean | undefined;
    card_spend_dispute_management?: boolean | undefined;
    cardholder_management?: boolean | undefined;
    disable_stripe_user_authentication?: boolean | undefined;
    spend_control_management?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsIssuingCardsListFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsIssuingCardsListFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_management: z.boolean().optional(),
    card_spend_dispute_management: z.boolean().optional(),
    cardholder_management: z.boolean().optional(),
    disable_stripe_user_authentication: z.boolean().optional(),
    spend_control_management: z.boolean().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsIssuingCardsListFeatures // the object to be transformed
> = z
  .object({
    cardManagement: z.boolean().optional(),
    cardSpendDisputeManagement: z.boolean().optional(),
    cardholderManagement: z.boolean().optional(),
    disableStripeUserAuthentication: z.boolean().optional(),
    spendControlManagement: z.boolean().optional(),
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

export const Schemas$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures =
  {
    in: SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures,
    out: SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardsListFeatures,
  };
