import {
  External$PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference,
  PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference,
} from "./payment-method-configuration-update-body-cartes-bancaires-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyCartesBancaires = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCartesBancaires without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCartesBancaires = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCartesBancaires
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCartesBancaires: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCartesBancaires
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCartesBancaires: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCartesBancaires // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyCartesBancairesDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCartesBancaires = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyCartesBancaires,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyCartesBancaires,
};
