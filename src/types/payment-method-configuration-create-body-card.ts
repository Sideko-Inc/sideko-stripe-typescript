import {
  External$PaymentMethodConfigurationCreateBodyCardDisplayPreference,
  PaymentMethodConfigurationCreateBodyCardDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyCardDisplayPreference,
} from "./payment-method-configuration-create-body-card-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.
 */
export type PaymentMethodConfigurationCreateBodyCard = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyCardDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCard = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyCardDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCard
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCard: z.ZodType<
  PaymentMethodConfigurationCreateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyCardDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCard
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCard: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCard // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyCardDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCard = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyCard,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyCard,
};
