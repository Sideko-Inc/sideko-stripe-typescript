import {
  External$PaymentMethodConfigurationCreateBodyCashappDisplayPreference,
  PaymentMethodConfigurationCreateBodyCashappDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyCashappDisplayPreference,
} from "./payment-method-configuration-create-body-cashapp-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyCashapp = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyCashappDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCashapp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCashapp = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyCashappDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCashapp
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCashapp: z.ZodType<
  PaymentMethodConfigurationCreateBodyCashapp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyCashappDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCashapp
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCashapp: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCashapp, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCashapp // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyCashappDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCashapp = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyCashapp,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyCashapp,
};
