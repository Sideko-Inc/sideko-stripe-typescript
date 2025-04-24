import {
  External$PaymentMethodConfigurationUpdateBodyCardDisplayPreference,
  PaymentMethodConfigurationUpdateBodyCardDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyCardDisplayPreference,
} from "./payment-method-configuration-update-body-card-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.
 */
export type PaymentMethodConfigurationUpdateBodyCard = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyCardDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCard = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyCardDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCard
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCard: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyCardDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCard
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCard: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCard // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyCardDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCard = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyCard,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyCard,
};
