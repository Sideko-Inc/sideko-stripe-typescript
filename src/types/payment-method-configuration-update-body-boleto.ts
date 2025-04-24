import {
  External$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference,
  PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference,
} from "./payment-method-configuration-update-body-boleto-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyBoleto = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBoleto = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBoleto
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBoleto: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBoleto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBoleto
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBoleto: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBoleto // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBoleto = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyBoleto,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyBoleto,
};
