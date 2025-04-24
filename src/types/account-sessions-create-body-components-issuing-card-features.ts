import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsIssuingCardFeatures
 */
export type AccountSessionsCreateBodyComponentsIssuingCardFeatures = {
  cardManagement?: boolean | undefined;
  cardSpendDisputeManagement?: boolean | undefined;
  cardholderManagement?: boolean | undefined;
  spendControlManagement?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsIssuingCardFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsIssuingCardFeatures = {
  card_management?: boolean | undefined;
  card_spend_dispute_management?: boolean | undefined;
  cardholder_management?: boolean | undefined;
  spend_control_management?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsIssuingCardFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsIssuingCardFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_management: z.boolean().optional(),
    card_spend_dispute_management: z.boolean().optional(),
    cardholder_management: z.boolean().optional(),
    spend_control_management: z.boolean().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsIssuingCardFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsIssuingCardFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsIssuingCardFeatures // the object to be transformed
> = z
  .object({
    cardManagement: z.boolean().optional(),
    cardSpendDisputeManagement: z.boolean().optional(),
    cardholderManagement: z.boolean().optional(),
    spendControlManagement: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardManagement: "card_management",
      cardSpendDisputeManagement: "card_spend_dispute_management",
      cardholderManagement: "cardholder_management",
      spendControlManagement: "spend_control_management",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsIssuingCardFeatures = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsIssuingCardFeatures,
  out: SchemaOut$AccountSessionsCreateBodyComponentsIssuingCardFeatures,
};
