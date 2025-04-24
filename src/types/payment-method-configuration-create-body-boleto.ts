import {
  External$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference,
  PaymentMethodConfigurationCreateBodyBoletoDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference,
} from "./payment-method-configuration-create-body-boleto-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
 */
export type PaymentMethodConfigurationCreateBodyBoleto = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyBoletoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBoleto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBoleto = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBoleto
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBoleto: z.ZodType<
  PaymentMethodConfigurationCreateBodyBoleto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBoleto
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBoleto: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBoleto, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBoleto // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBoleto = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyBoleto,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyBoleto,
};
