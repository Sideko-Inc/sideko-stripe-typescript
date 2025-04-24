import {
  External$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference,
  PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference,
} from "./payment-method-configuration-create-body-cartes-bancaires-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
 */
export type PaymentMethodConfigurationCreateBodyCartesBancaires = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCartesBancaires without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCartesBancaires = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCartesBancaires
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCartesBancaires: z.ZodType<
  PaymentMethodConfigurationCreateBodyCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCartesBancaires
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCartesBancaires: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCartesBancaires // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCartesBancaires = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyCartesBancaires,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyCartesBancaires,
};
